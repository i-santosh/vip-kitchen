"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

interface Headline {
    title: string;
    subtitles: string[];
}

const images: string[] = [
    "/hero-img-1.jpg",
    "/hero-img-2.jpg",
    "/yivWL.jpg",
    "/collections-1.jpg",
    "/remote-door-closing.jpg",
    "/_55b488cf-39c3-4149-806a-4a3bd392887e.jpg",
];

const headlines: Headline[] = [
    {
        title: "Modular Kitchens – Designed for Your Lifestyle",
        subtitles: [
            "2D & 3D Interior Designing with Proper Vastu",
            "Authorized Distributor of Apco & Elica Appliances",
            "Complete Kitchen Finishing with Modern Functionality"
        ]
    },
    {
        title: "Luxury, Comfort & Stylish Interior for Your Home",
        subtitles: [
            "Custom Windows, LED Units, Bedrooms & Luxury Beds",
            "Expert Room Interior Design with 2D & 3D Planning",
            "Vastu-Aligned Interiors for a Harmonious Living Space"
        ]
    },
    {
        title: "Make your Interior Design With Vastu",
        subtitles: [
            "Enhance the energy and positivity of your home",
            "Integrate traditional Vastu principles with modern architecture",
            "Create spaces that promote health, happiness, and prosperity"
        ]
    },
    {
        title: "Design Your Kitchen & Interior",
        subtitles: [
            "Specialize in creating beautiful, functional spaces",
            "Dedicated to bringing your vision to life",
            "Focus on making your space comfortable, practical, and unique"
        ]
    },
    {
        title: "Automatic Door & Curtains",
        subtitles: [
            "Our home automation services bring convenience, ",
            "security, and efficiency to your living space by integrating smart technology into your home.",
            "With seamless control over lighting, security, doors   you can enjoy a connected lifestyle tailored to your needs."
        ]
    },
    {
        title: "2D-3D Interior Design",
        subtitles: [
            "Design your dream home with precision, aesthetics, and positive energy!",
            "Our expert 2D & 3D interior design services include Vastu guidance to",
            "create a harmonious and balanced living space."
        ]
    },
];

const TRANSITION_DURATION = 10000;
const FADE_DURATION = 300;

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

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);

    const handleNavigation = useCallback((newIndex: number) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setAutoplayEnabled(false);
        setCurrentImageIndex(newIndex);

        setTimeout(() => {
            setIsTransitioning(false);
            setAutoplayEnabled(true);
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

    useEffect(() => {
        if (!autoplayEnabled) return;

        const timer = setInterval(goToNext, TRANSITION_DURATION);
        return () => clearInterval(timer);
    }, [autoplayEnabled, goToNext]);

    return (
        <div className="relative w-full min-h-screen overflow-hidden z-10">
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

            <NavigationButton direction="prev" onClick={goToPrev} />
            <NavigationButton direction="next" onClick={goToNext} />

            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
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

            <div className="absolute inset-0 flex flex-col">
                <div className="flex-1 flex flex-col justify-center items-center px-8 sm:px-4 md:px-6 container mx-auto">
                    <div className="max-w-xl md:max-w-2xl relative text-center">
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mb-6 md:mb-8 mx-auto" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in drop-shadow-lg leading-tight">
                            {headlines[currentImageIndex].title}
                        </h1>
                        <div className="backdrop-blur-sm bg-black/40 md:bg-black/30 rounded-lg p-3 md:p-4 mb-6 md:mb-8 mx-4 sm:mx-0">
                            <ul className="text-lg md:text-xl text-white/90 animate-fade-in-delay text-left leading-relaxed list-disc list-inside marker:text-teal-400">
                                {headlines[currentImageIndex].subtitles.map((subtitle, index) => (
                                    <li key={index} className="mb-2">{subtitle}</li>
                                ))}
                            </ul>
                        </div>
                        <Link href='/contact-us' className="group bg-gradient-to-r from-teal-600 to-teal-400 text-white px-6 md:px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 inline-flex items-center space-x-2">
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