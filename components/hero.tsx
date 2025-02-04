"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

interface Headline {
    title: string;
    subtitle: string;
}

interface Step {
    title: string;
    notes: string[];
}

const images: string[] = [
    "/remote-door-closing.jpg",
    "/_55b488cf-39c3-4149-806a-4a3bd392887e.jpg",
    "/yivWL.jpg",
];

const headlines: Headline[] = [
    {
        title: "Automatic Door & Curtains",
        subtitle: "Our home automation services bring convenience, security, and efficiency to your living space by integrating smart technology into your home. With seamless control over lighting, security, doors   you can enjoy a connected lifestyle tailored to your needs."
    },
    {
        title: "2D-3D Interior Design Available with Consultation",
        subtitle: "Design your dream home with precision, aesthetics, and positive energy! Our expert 2D & 3D interior design services include Vastu guidance to create a harmonious and balanced living space."
    },
    {
        title: "Interior Vastu Consultation",
        subtitle: "Enhance the energy and positivity of your home with our VastuShastra design services. Our experts integrate traditional Vastu principles with modern architecture to create spaces that promote health, happiness, and prosperity."
    }
];

const steps: Step[] = [
    {
        title: "Discover",
        notes: [
            "Thoughtful spaces that reflect you",
            "Modern kitchens with latest designs",
            "Elevating bedrooms to serene retreats"
        ]
    },
    {
        title: "Design",
        notes: [
            "Luxury homes starting at Rs.1800/sqft",
            "Professional designers for bespoke looks",
            "Luxury interiors that make you feel at home"
        ]
    },
    {
        title: "Deliver",
        notes: [
            "Designs that celebrate your personality",
            "Transforming homes with creative designs",
            "Designing spaces that empower your lifestyle"
        ]
    }
];

const TRANSITION_DURATION = 5000;
const FADE_DURATION = 300;

interface CustomProgressBarProps {
    isActive: boolean;
    isComplete: boolean;
    duration: number;
    onComplete?: () => void;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ isActive, isComplete, duration, onComplete }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (isActive) {
            setWidth(0);
            const startTime = Date.now();
            
            const timer = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const progress = (elapsed / duration) * 100;
                
                if (progress >= 100) {
                    setWidth(100);
                    clearInterval(timer);
                    if (onComplete) onComplete();
                } else {
                    setWidth(progress);
                }
            }, 16);

            return () => clearInterval(timer);
        } else {
            setWidth(isComplete ? 100 : 0);
        }
    }, [isActive, isComplete, duration, onComplete]);

    return (
        <div className="relative w-full h-1 bg-white/10">
            <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-300"
                style={{ width: `${width}%` }}
            >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-teal-400 rotate-45" />
            </div>
        </div>
    );
};

interface StepCardProps {
    index: number;
    title: string;
    note: string;
    isActive: boolean;
    isComplete: boolean;
    duration: number;
    onComplete?: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ 
    index, 
    title, 
    note, 
    isActive, 
    isComplete, 
    duration, 
    onComplete 
}) => (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-teal-500/30 transition-all duration-300 overflow-hidden group">
        <div className="p-4">
            <div className="flex items-center space-x-3 mb-3">
                <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-300",
                    isComplete ? "bg-teal-500 text-white" : "bg-white/10 text-white/70"
                )}>
                    {index + 1}
                </div>
                <h3 className="text-white/90 font-medium">{title}</h3>
            </div>
            <CustomProgressBar
                isActive={isActive}
                isComplete={isComplete}
                duration={duration}
                onComplete={onComplete}
            />
            <p className="mt-3 text-white/60 text-sm line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
                {note}
            </p>
        </div>
    </Card>
);

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
                "absolute top-1/2 -translate-y-1/2 p-2 z-20",
                "text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full",
                "transition-all duration-300 hover:scale-110 focus:outline-none",
                direction === 'prev' ? "left-4 md:left-8" : "right-4 md:right-8"
            )}
            aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
        >
            <Icon className="w-8 h-8 md:w-10 md:h-10" />
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
                <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 container mx-auto">
                    <div className="max-w-xl md:max-w-2xl relative text-center">
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mb-6 md:mb-8 mx-auto" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in drop-shadow-lg leading-tight">
                            {headlines[currentImageIndex].title}
                        </h1>
                        <div className="backdrop-blur-sm bg-black/40 md:bg-black/30 rounded-lg p-3 md:p-4 mb-6 md:mb-8">
                            <p className="text-lg md:text-xl text-white/90 animate-fade-in-delay leading-relaxed">
                                {headlines[currentImageIndex].subtitle}
                            </p>
                        </div>
                        <Link href='/contact-us' className="group bg-gradient-to-r from-teal-600 to-teal-400 text-white px-6 md:px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 inline-flex items-center space-x-2">
                            <span className="font-medium">Begin Journey</span>
                            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                <div className="hidden md:block container mx-auto px-6 pb-16">
                    <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                index={index}
                                title={step.title}
                                note={step.notes[currentImageIndex]}
                                isActive={currentImageIndex === index}
                                isComplete={currentImageIndex > index}
                                duration={TRANSITION_DURATION}
                                onComplete={index === 2 ? goToNext : undefined}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;