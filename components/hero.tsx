"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeftCircle, ChevronRightCircle, Pause, Play } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

// Define types
type Subtitle = string | { text: string; nestedItems?: string[] };

interface Headline {
    title: string;
    subtitles: Subtitle[];
}

// Constants
const TRANSITION_DURATION = 4000;
const FADE_DURATION = 300;
const INDICATOR_HIDE_DELAY = 1000;

const images: string[] = [
    "/hero-img-2.jpg",
    "/hero-img-1.jpg",
    "/gallery-1.jpg",
    "/collections-1.jpg",
    "/remote-door-closing.jpg",
];

const headlines: Headline[] = [
    {
        title: "Modular Kitchens",
        subtitles: [
            "2D & 3D Interior Designing",
            "Kicthen Manufacturing & Installation (Lifetime Warranty)",
            {
                text: "Including Other Works In Kitchen:",
                nestedItems: [
                    "Granite Tiles",
                    "Sink",
                    "Hove & Chimney",
                    "Undersink Filter",
                    "Lightings"
                ]
            }
        ]
    },
    {
        title: "Interior Designing",
        subtitles: [
            "Custom Windows, LED Units, Bedrooms",
            "Room Interior Design with 2D & 3D Planning",
            "Interior Vastu According To Direction & Requirements",
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
            "Control And Manage Lights, Fans Switches, Curtains, Washing Machines & More Remotely",
        ]
    },
    {
        title: "2D & 3D Design",
        subtitles: [
            "Planning Budget, 2D & 3D Design",
            "2D & 3D Drawing Before Booking",
            "Budget According to Drawings",
            "Customisation According to Space & Requirements"
        ]
    },
    {
        title: "Guarantee & Warranty After Service",
        subtitles: [
            "Termite (ਸਿਉਂਕ) & Borer Proof (Lifetime Warranty)",
            "5 Year Warranty on Products",
            {
                text: "Having Dealership Of:",
                nestedItems: [
                    "APCO (Kitchen Accessories)",
                    "ELICA (Hove & Chimney)",
                    "LECCY & GENESIS (Door Lock & Switches)",
                ]
            }
        ]
    },
];

// Navigation Button Component
interface NavigationButtonProps {
    direction: 'prev' | 'next';
    onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick }) => {
    const Icon = direction === 'prev' ? ChevronLeftCircle : ChevronRightCircle;
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent triggering pause when clicking navigation
                onClick();
            }}
            className={cn(
                "absolute top-[25%] -translate-y-1/2 p-2 z-20",
                "text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full",
                "transition-all duration-300 hover:scale-110 focus:outline-none",
                "sm:top-1/2",
                direction === 'prev'
                    ? "left-2 sm:left-4 md:left-8"
                    : "right-2 sm:right-4 md:right-8"
            )}
            aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
        >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>
    );
};

// Main Hero Section Component
const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [showPlayPause, setShowPlayPause] = useState(false);

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

        // Hide the play/pause indicator after delay
        setTimeout(() => {
            setShowPlayPause(false);
        }, INDICATOR_HIDE_DELAY);
    }, []);

    // Autoplay effect
    useEffect(() => {
        if (!autoplayEnabled || isPaused) return;

        const timer = setInterval(goToNext, TRANSITION_DURATION);
        return () => clearInterval(timer);
    }, [autoplayEnabled, isPaused, goToNext]);

    // Cache the current headline
    const currentHeadline = headlines[currentImageIndex];

    return (
        <div className="relative w-full min-h-screen overflow-hidden z-10">
            {/* Image container with click handler */}
            <div 
                className="absolute inset-0 cursor-pointer"
                onClick={togglePause}
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-1000",
                            currentImageIndex === index ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Image
                            src={src}
                            alt={`Hero image ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70" />
                    </div>
                ))}
            </div>

            {/* Play/Pause indicator */}
            <div 
                className={cn(
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    "bg-black/50 rounded-full p-6",
                    "transition-all duration-300",
                    showPlayPause ? "opacity-100 scale-100 z-50" : "opacity-0 scale-50"
                )}
            >
                {isPaused ? (
                    <Play className="w-12 h-12 text-white" />
                ) : (
                    <Pause className="w-12 h-12 text-white" />
                )}
            </div>

            {/* Navigation buttons */}
            <NavigationButton direction="prev" onClick={goToPrev} />
            <NavigationButton direction="next" onClick={goToNext} />

            {/* Slide indicators */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 translate-y-20 flex space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the pause
                            goToSlide(index);
                        }}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            currentImageIndex === index
                                ? "bg-teal-400 w-8"
                                : "bg-white/50 hover:bg-white/70"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
                <div className="flex-1 flex flex-col justify-center items-center px-8 sm:px-4 md:px-6 container mx-auto">
                    <div className="max-w-xl md:max-w-2xl relative text-center">
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mb-6 md:mb-8 mx-auto" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in drop-shadow-lg leading-tight">
                            {currentHeadline.title}
                        </h1>
                        <div className="backdrop-blur-sm bg-black/40 md:bg-black/30 rounded-lg p-3 md:p-4 mb-6 md:mb-8 mx-4 sm:mx-0">
                            <ul className="text-lg md:text-xl text-white/90 animate-fade-in-delay text-left leading-relaxed list-disc list-inside marker:text-teal-400">
                                {currentHeadline.subtitles.map((subtitle, index) => {
                                    if (typeof subtitle === "string") {
                                        if (
                                            currentHeadline.title === "Interior Designing" &&
                                            subtitle.startsWith("Renovation")
                                        ) {
                                            const boldPart = "Renovation";
                                            const rest = subtitle.substring(boldPart.length);
                                            return (
                                                <li key={index} className="mb-2">
                                                    <b>{boldPart}</b>
                                                    {rest}
                                                </li>
                                            );
                                        }
                                        return <li key={index} className="mb-2">{subtitle}</li>;
                                    } else {
                                        return (
                                            <li key={index} className="mb-2">
                                                <b>{subtitle.text}</b>
                                                {subtitle.nestedItems && subtitle.nestedItems.length > 0 && (
                                                    <ul className="list-disc ml-4 mt-1">
                                                        {subtitle.nestedItems.map((item, subIndex) => (
                                                            <li key={subIndex}>
                                                                <small className="text-lg">{item}</small>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                        <Link 
                            href="/contact-us" 
                            className="group bg-gradient-to-r from-teal-600 to-teal-400 text-white px-6 md:px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 inline-flex items-center space-x-2 pointer-events-auto"
                        >
                            <span className="font-medium">Begin Journey</span>
                            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;