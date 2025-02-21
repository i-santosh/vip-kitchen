"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeftCircle, ChevronRightCircle, Pause, Play } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

// Types remain the same
type Subtitle = string | { text: string; nestedItems?: string[] };

interface Headline {
    title: string;
    subtitles: Subtitle[];
}

const TRANSITION_DURATION = 4000;
const FADE_DURATION = 300;
const INDICATOR_HIDE_DELAY = 1000;

// Image configuration with multiple sizes
interface ImageConfig {
    src: string;
    mobileSrc?: string; // Optional mobile-specific source
    alt: string;
}

const images: ImageConfig[] = [
    {
        src: "/interior-hero.jpg",
        mobileSrc: "/interior-hero-mobile.jpg", // Assuming you have mobile versions
        alt: "Modern interior design showcase"
    },
    {
        src: "/hero-img-1.jpg",
        mobileSrc: "/hero-img-1-mobile.jpg",
        alt: "Kitchen design showcase"
    },
    {
        src: "/gallery-1.jpg",
        mobileSrc: "/gallery-1-mobile.jpg",
        alt: "Gallery showcase"
    },
    {
        src: "/i-2D-3D.jpg",
        mobileSrc: "/i-2D-3D-mobile.jpg",
        alt: "2D and 3D design showcase"
    },
    {
        src: "/remote-door-closing.jpg",
        mobileSrc: "/remote-door-closing-mobile.jpg",
        alt: "Home automation showcase"
    }
];

// Headlines array remains the same as before
const headlines: Headline[] = [
    {
        title: "Modular Kitchens",
        subtitles: [
            "Kicthen Manufacturing & Installation (Lifetime Warranty)",
            "2D & 3D Interior Designing",
            {
                text: "Including Other Works In Kitchen:",
                nestedItems: [
                    "Granite Tiles (Installation)",
                    "Sink",
                    "Hob & Chimney (Installation)",
                    "Undersink Filter",
                    "Lightings in Kitchen",
                    "Breakfast Counter"
                ]
            }
        ]
    },
    {
        title: "Interior Designing",
        subtitles: [
            "Room Interior Design with 2D & 3D Planning",
            "Interior Vastu According To Direction & Requirements",
            "Window & Doors (Manufacturing & Installation)",
            "LED Units, Washroom Vanity, Almirah",
            "Renovation (Old To Modern Home With Vastu)"
        ]
    },
    {
        title: "Home Automation",
        subtitles: [
            "Control Your Home Anytime - Anywhere",
            "Authorized Distributor of Leccy & Genesis USA Products",
            "Full Control of Appliances from Anywhere in the World",
            "Smart & Secure Home Automation",
            "Control And Manage Lights, Fans, Switches, Curtains, AC, Geyser, Washing Machines & More Remotely",
        ]
    },
    {
        title: "2D & 3D Design",
        subtitles: [
            "2D & 3D Design, Planning & Budget",
            "2D & 3D Drawing Before Booking",
            "Budget According to Drawings",
            "Customisation According to Space & Requirements"
        ]
    },
    {
        title: "Guarantee & Warranty and After Service",
        subtitles: [
            "Termite (ਸਿਉਂਕ) & Borer Proof (Lifetime Warranty)",
            "5 Year Warranty on Accessories",
            {
                text: "Having Dealership Of:",
                nestedItems: [
                    "EBCO (Kitchen Accessories)",
                    "ELICA (Hob & Chimney)",
                    "LECCY & GENESIS (Smart Door Lock & Switches)",
                ]
            }
        ]
    },
];

const NavigationButton: React.FC<{
    direction: 'prev' | 'next';
    onClick: () => void;
}> = ({ direction, onClick }) => {
    const Icon = direction === 'prev' ? ChevronLeftCircle : ChevronRightCircle;
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
            }}
            className={cn(
                "absolute top-[25%] -translate-y-1/2 p-1.5 sm:p-2 z-20",
                "text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full",
                "transition-all duration-300 hover:scale-110 focus:outline-none",
                "sm:top-1/2",
                direction === 'prev'
                    ? "left-1 sm:left-4 md:left-8"
                    : "right-1 sm:right-4 md:right-8"
            )}
            aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
        >
            <Icon className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>
    );
};

const HeroImage: React.FC<{
    image: ImageConfig;
    isActive: boolean;
    priority: boolean;
}> = ({ image, isActive, priority }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                isActive ? "opacity-100" : "opacity-0"
            )}
        >
            <picture>
                {/* Mobile-first image */}
                <source
                    media="(max-width: 640px)"
                    srcSet={image.mobileSrc || image.src}
                />
                {/* Tablet image */}
                <source
                    media="(max-width: 1024px)"
                    srcSet={image.src}
                />
                {/* Desktop image */}
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={priority}
                    className="object-cover"
                    quality={priority ? 90 : 75}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 75vw"
                    loading={priority ? "eager" : "lazy"}
                />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70" />
        </div>
    );
};

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [showPlayPause, setShowPlayPause] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile viewport on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNavigation = useCallback((newIndex: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentImageIndex(newIndex);
        setTimeout(() => {
            setIsTransitioning(false);
        }, FADE_DURATION);
    }, [isTransitioning]);

    const goToNext = useCallback(() => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        handleNavigation(nextIndex);
    }, [currentImageIndex, handleNavigation]);

    const goToPrev = useCallback(() => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        handleNavigation(prevIndex);
    }, [currentImageIndex, handleNavigation]);

    const goToSlide = useCallback((index: number) => {
        if (index === currentImageIndex) return;
        handleNavigation(index);
    }, [currentImageIndex, handleNavigation]);

    const togglePause = useCallback(() => {
        setIsPaused(prev => !prev);
        setAutoplayEnabled(prev => !prev);
        setShowPlayPause(true);
        setTimeout(() => {
            setShowPlayPause(false);
        }, INDICATOR_HIDE_DELAY);
    }, []);

    useEffect(() => {
        if (!autoplayEnabled || isPaused) return;
        const timer = setInterval(goToNext, TRANSITION_DURATION);
        return () => clearInterval(timer);
    }, [autoplayEnabled, isPaused, goToNext]);

    const currentHeadline = headlines[currentImageIndex];

    return (
        <div className="relative w-full min-h-[100svh] overflow-hidden z-10">
            <div className="absolute inset-0 cursor-pointer" onClick={togglePause}>
                {images.map((image, index) => (
                    <HeroImage
                        key={index}
                        image={image}
                        isActive={currentImageIndex === index}
                        priority={index === 0}
                    />
                ))}
            </div>

            {/* Play/Pause indicator */}
            <div 
                className={cn(
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    "bg-black/50 rounded-full p-3 sm:p-4 md:p-6",
                    "transition-all duration-300",
                    showPlayPause ? "opacity-100 scale-100 z-50" : "opacity-0 scale-50"
                )}
            >
                {isPaused ? (
                    <Play className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                ) : (
                    <Pause className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                )}
            </div>

            {/* Navigation buttons */}
            <NavigationButton direction="prev" onClick={goToPrev} />
            <NavigationButton direction="next" onClick={goToNext} />

            {/* Slide indicators */}
            <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(index);
                        }}
                        className={cn(
                            "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300",
                            currentImageIndex === index
                                ? "bg-teal-400 w-6 sm:w-8"
                                : "bg-white/50 hover:bg-white/70"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
                <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 container mx-auto">
                    <div className="max-w-xl md:max-w-2xl relative">
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mb-4 md:mb-6 mx-auto" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 animate-fade-in drop-shadow-lg leading-tight text-center">
                            {currentHeadline.title}
                        </h1>
                        <div className="backdrop-blur-sm bg-black/40 md:bg-black/30 rounded-lg p-3 md:p-4 mb-4 md:mb-6 mx-4 sm:mx-0">
                            <ul className="text-base sm:text-lg md:text-xl text-white/90 animate-fade-in-delay leading-relaxed">
                                {currentHeadline.subtitles.map((subtitle, index) => {
                                    if (typeof subtitle === "string") {
                                        if (
                                            currentHeadline.title === "Interior Designing" &&
                                            subtitle.startsWith("Renovation")
                                        ) {
                                            const boldPart = "Renovation";
                                            const rest = subtitle.substring(boldPart.length);
                                            return (
                                                <li key={index} className="flex mb-2 items-baseline gap-3">
                                                    <span className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0 mt-2"></span>
                                                    <span className="font-bold">
                                                        <b>{boldPart}</b>
                                                        {rest}
                                                    </span>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={index} className="flex mb-2 items-baseline gap-3">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0 mt-2"></span>
                                                <span className="font-bold">{subtitle}</span>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={index} className="flex mb-2 items-baseline gap-3">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0 mt-2"></span>
                                                <div>
                                                    <b className="font-bold">{subtitle.text}</b>
                                                    {subtitle.nestedItems && subtitle.nestedItems.length > 0 && (
                                                        <ul className="mt-1">
                                                            {subtitle.nestedItems.map((item, subIndex) => (
                                                                <li key={subIndex} className="flex items-baseline gap-3 mb-1 last:mb-0">
                                                                    <span className="w-1.5 h-1.5 bg-teal-400/70 rounded-full flex-shrink-0 mt-2"></span>
                                                                    <span className="text-sm sm:text-base md:text-lg font-bold">
                                                                        {item}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="text-center">
                            <Link
                                href="/contact-us"
                                className="group bg-gradient-to-r from-teal-600 to-teal-400 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 inline-flex items-center space-x-2 pointer-events-auto text-sm sm:text-base"
                            >
                                <span className="font-medium">Begin Journey</span>
                                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;