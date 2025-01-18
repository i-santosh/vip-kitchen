"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

interface Headline {
    title: string;
    subtitle: string;
}

const images: string[] = [
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/livspace-vesta-1615288282-wkMjI/banner-1615288298-M39ju/updated-1632133477-mccfx/vesta-banner-trusted-desktop-1632133728-Z3ZWu.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/v2-1675654701-1kKSt/desktop-1675655000-6H0mD/banner-1675655465-eXung/kitchen-homepage-banner-web-1689683306-uyQOf.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/banner-1714034487-xNaST/homepage-banner-web-1714034622-yivWL.jpg",
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

const keyNotes = [
    [
        "Thoughtful spaces that reflect you",
        "Luxury homes starting at Rs.1800/sqft",
        "Designs that celebrate your personality"
    ],
    [
        "Modern kitchens with latest designs",
        "Professional designers for bespoke looks",
        "Transforming homes with creative designs"
    ],
    [
        "Elevating bedrooms to serene retreats",
        "Luxury interiors that make you feel at home",
        "Designing spaces that empower your lifestyle"
    ]
];

const TRANSITION_DURATION = 6000;
const FADE_DURATION = 1000;

const CustomProgressBar: React.FC<{
    isActive: boolean;
    isComplete: boolean;
}> = ({ isActive, isComplete }) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (isActive) {
                const newWidth = Math.min((progress / TRANSITION_DURATION) * 100, 100);
                setWidth(newWidth);

                if (progress < TRANSITION_DURATION) {
                    animationFrame = requestAnimationFrame(animate);
                }
            } else if (isComplete) {
                setWidth(100);
            } else {
                setWidth(0);
            }
        };

        if (isActive) {
            startTime = null;
            animationFrame = requestAnimationFrame(animate);
        } else {
            setWidth(isComplete ? 100 : 0);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isActive, isComplete]);

    return (
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <div
                className="h-full bg-stone-800 transition-all duration-300 rounded-full"
                style={{ width: `${width}%` }}
            />
        </div>
    );
};

const MobileCardControls: React.FC<{
    currentCard: number;
    totalCards: number;
    onPrevious: () => void;
    onNext: () => void;
}> = ({ currentCard, totalCards, onPrevious, onNext }) => (
    <div className="flex items-center justify-between mt-4 md:hidden">
        <button
            onClick={onPrevious}
            className="p-2 text-white/70 hover:text-white disabled:opacity-50"
            disabled={currentCard === 0}
        >
            <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
            {Array.from({ length: totalCards }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "w-2 h-2 rounded-full",
                        currentCard === i ? "bg-white" : "bg-white/30"
                    )}
                />
            ))}
        </div>
        <button
            onClick={onNext}
            className="p-2 text-white/70 hover:text-white disabled:opacity-50"
            disabled={currentCard === totalCards - 1}
        >
            <ChevronRight className="w-6 h-6" />
        </button>
    </div>
);

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [currentMobileCard, setCurrentMobileCard] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
                setCurrentMobileCard(0); // Reset mobile card index when image changes
            }, FADE_DURATION);
        }, TRANSITION_DURATION);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const handlePreviousCard = () => {
        setCurrentMobileCard((prev) => Math.max(0, prev - 1));
    };

    const handleNextCard = () => {
        setCurrentMobileCard((prev) => Math.min(2, prev + 1));
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
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
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-between py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                            {headlines[currentImageIndex].title}
                        </h1>
                        <p className="text-xl text-white/90 mb-8 animate-fade-in-delay">
                            {headlines[currentImageIndex].subtitle}
                        </p>
                        <button
                            className="bg-white text-stone-500 px-8 py-3 rounded-lg hover:bg-white/90 transition-colors w-fit"
                            onClick={() => console.log('Begin journey clicked')}
                        >
                            Begin Journey
                        </button>
                    </div>
                </div>

                {/* Progress Cards Container */}
                <div className="container mx-auto px-6">
                    {/* Mobile View - Single Card */}
                    <div className="block md:hidden">
                        <Card className="bg-white/10 backdrop-blur-md hover:border-stone-800 border-white/20">
                            <CardHeader>
                                <CardTitle className="text-white/90 text-lg">
                                    Step {currentMobileCard + 1}: {currentMobileCard === 0 ? "Discover" : currentMobileCard === 1 ? "Design" : "Deliver"}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CustomProgressBar
                                    isActive={currentImageIndex === currentMobileCard}
                                    isComplete={currentImageIndex > currentMobileCard}
                                />
                                <p className="mt-4 text-white/70 text-sm">
                                    {keyNotes[currentImageIndex][currentMobileCard]}
                                </p>
                            </CardContent>
                        </Card>
                        <MobileCardControls
                            currentCard={currentMobileCard}
                            totalCards={3}
                            onPrevious={handlePreviousCard}
                            onNext={handleNextCard}
                        />
                    </div>

                    {/* Desktop View - Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-4">
                        {[0, 1, 2].map((index) => (
                            <Card key={index} className="bg-white/10 hover:bg-stone-600/10 backdrop-blur-md hover:border-stone-800 border-white/20">
                                <CardHeader>
                                    <CardTitle className="text-white/90 text-lg">
                                        Step {index + 1}: {index === 0 ? "Discover" : index === 1 ? "Design" : "Deliver"}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CustomProgressBar
                                        isActive={currentImageIndex === index}
                                        isComplete={currentImageIndex > index}
                                    />
                                    <p className="mt-4 text-white/70 text-sm">
                                        {keyNotes[currentImageIndex][index]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;