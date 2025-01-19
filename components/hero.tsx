"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from 'next/image';

interface Headline {
    title: string;
    subtitle: string;
}

const images: string[] = [
    "/hero-img-1.jpg",
    "/hero-img-2.jpg",
    "/yivWL.jpg",
];

const headlines: Headline[] = [
    {
        title: "Transform Your Living Space",
        subtitle: "Experience luxury and thoughtful design that reflects your personality, starting at Rs.1800/sqft."
    },
    {
        title: "Elevate Your Home's Style",
        subtitle: "Discover modern kitchens, serene bedrooms, and luxury interiors that empower your lifestyle and celebrate you."
    },
    {
        title: "Make Your Dream Home a Reality",
        subtitle: "Let our professional designers guide you in creating a beautiful, practical, and unique reflection of your personality."
    }
];

const steps = [
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

const TRANSITION_DURATION = 6000;
const FADE_DURATION = 1000;

const CustomProgressBar: React.FC<{
    isActive: boolean;
    isComplete: boolean;
    duration: number;
    onComplete?: () => void;
}> = ({ isActive, isComplete, duration, onComplete }) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (isActive) {
                const newWidth = Math.min((progress / duration) * 100, 100);
                setWidth(newWidth);

                if (progress < duration) {
                    animationFrame = requestAnimationFrame(animate);
                } else if (onComplete) {
                    onComplete();
                }
            }
        };

        if (isActive) {
            startTime = null;
            setWidth(0);
            animationFrame = requestAnimationFrame(animate);
        } else {
            setWidth(isComplete ? 100 : 0);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isActive, isComplete, duration, onComplete]);

    return (
        <div className="relative w-full h-1 bg-white/10">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-300"
                style={{ width: `${width}%` }}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-teal-400 rotate-45" />
            </div>
        </div>
    );
};

const StepCard: React.FC<{
    index: number;
    title: string;
    note: string;
    isActive: boolean;
    isComplete: boolean;
    duration: number;
    onComplete?: () => void;
}> = ({ index, title, note, isActive, isComplete, duration, onComplete }) => (
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

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const moveToNextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeout(() => {
                moveToNextImage();
            }, FADE_DURATION);
        }, TRANSITION_DURATION);

        return () => {
            clearInterval(timer);
        };
    }, [moveToNextImage]);

    return (
        <div className="relative w-full min-h-screen overflow-hidden z-10">
            {/* Image Container */}
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
                        className="object-cover w-full h-full"
                        sizes="100vw"
                        quality={90}
                    />
                    {/* Enhanced gradient overlay with stronger mobile visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70" />
                </div>
            ))}

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col">
                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 container mx-auto">
                    <div className="max-w-xl md:max-w-2xl relative text-center">
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mb-6 md:mb-8 mx-auto" />
                        {/* Responsive typography */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in drop-shadow-lg leading-tight">
                            {headlines[currentImageIndex].title}
                        </h1>
                        {/* Enhanced mobile subtitle */}
                        <div className="backdrop-blur-sm bg-black/40 md:bg-black/30 rounded-lg p-3 md:p-4 mb-6 md:mb-8">
                            <p className="text-lg md:text-xl text-white/90 animate-fade-in-delay leading-relaxed">
                                {headlines[currentImageIndex].subtitle}
                            </p>
                        </div>
                        <button className="group bg-gradient-to-r from-teal-600 to-teal-400 text-white px-6 md:px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 inline-flex items-center space-x-2">
                            <span className="font-medium">Begin Journey</span>
                            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Steps Cards - Hidden on mobile */}
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
                                onComplete={index === 2 ? moveToNextImage : undefined}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;