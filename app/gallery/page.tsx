"use client"

import React, { useState } from 'react';
import { Filter, Play, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


interface Category {
    id: string;
    label: string;
}

interface GalleryItem {
    id: number;
    image: string;
    category: string;
    title: string;
    description: string;
}

interface VideoProject {
    id: number;
    videoId: string;
    title: string;
    description: string;
    thumbnail?: string;
}

interface VideoPlayerProps {
    videoId: string;
    title: string;
    thumbnail?: string;
    isPlaying: boolean;
    onPlay: () => void;
}


const GalleryPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    const categories: Category[] = [
        { id: 'all', label: 'All Projects' },
        { id: 'living', label: 'Living Room' },
        { id: 'kitchen', label: 'Kitchen' },
        { id: 'bedroom', label: 'Bedroom' },
        { id: 'bathroom', label: 'Bathroom' }
    ];

    const galleryItems: GalleryItem[] = [
        {
            id: 19,
            image: "/bd-3.jpg",
            category: 'bedroom',
            title: 'Master Retreat',
            description: 'Luxurious bedroom with custom headboard and plush furnishings'
        },
        {
            id: 6,
            image: "/g-20.jpg",
            category: 'bathroom',
            title: 'Luxury Bathroom',
            description: 'Spa-inspired sanctuary with premium fixtures'
        },
        {
            id: 15,
            image: "/g-10.jpg",
            category: 'kitchen',
            title: 'Open Kitchen',
            description: 'Entertainment-friendly space with breakfast bar'
        },
        {
            id: 21,
            image: "/bd-1.jpg",
            category: 'bedroom',
            title: 'Contemporary Suite',
            description: 'Modern bedroom featuring minimalist design and ambient lighting'
        },
        {
            id: 8,
            image: "/g-17.jpg",
            category: 'living',
            title: 'Family Living Space',
            description: 'Comfortable gathering area with custom built-ins'
        },
        {
            id: 3,
            image: "/vipk-Bedroom.jpg",
            category: 'bedroom',
            title: 'Serene Bedroom',
            description: 'Tranquil retreat featuring soft textures and natural light'
        },
        {
            id: 13,
            image: "/g-12.jpg",
            category: 'kitchen',
            title: 'Classic Kitchen',
            description: 'Traditional elements with modern functionality'
        },
        {
            id: 17,
            image: "/bd-5.jpg",
            category: 'bedroom',
            title: 'Urban Bedroom',
            description: 'Contemporary bedroom with industrial-chic elements'
        },
        {
            id: 4,
            image: "/6-1.jpg",
            category: 'living',
            title: 'Urban Living',
            description: 'Metropolitan elegance with panoramic city views'
        },
        {
            id: 11,
            image: "/g-14.jpg",
            category: 'kitchen',
            title: 'Contemporary Kitchen',
            description: 'Smart storage solutions with integrated technology'
        },
        {
            id: 16,
            image: "/g-5.jpg",
            category: 'bathroom',
            title: 'Guest Bathroom',
            description: 'Efficient layout with high-end finishes'
        },
        {
            id: 2,
            image: "/kVHBp.jpg",
            category: 'kitchen',
            title: 'Luxury Kitchen',
            description: 'High-end appliances with marble countertops and custom cabinetry'
        },
        {
            id: 20,
            image: "/bd-4.jpg",
            category: 'bedroom',
            title: 'Coastal Bedroom',
            description: 'Relaxing space with beach-inspired decor and textures'
        },
        {
            id: 9,
            image: "/g-16.jpg",
            category: 'bathroom',
            title: 'Modern Bathroom',
            description: 'Sleek fixtures with geometric tile patterns'
        },
        {
            id: 1,
            image: "/GQ8UW.jpg",
            category: 'living',
            title: 'Modern Living Space',
            description: 'Contemporary design blending natural materials with clean lines'
        },
        {
            id: 7,
            image: "/g-19.jpg",
            category: 'living',
            title: 'Contemporary Living',
            description: 'Minimalist design with bold architectural elements'
        },
        {
            id: 18,
            image: "/bd-2.jpg",
            category: 'bedroom',
            title: 'Modern Suite',
            description: 'Sophisticated bedroom with custom lighting and built-in storage'
        },
        {
            id: 22,
            image: "/g-6.jpg",
            category: 'kitchen',
            title: 'Industrial Kitchen',
            description: 'Urban loft style with stainless steel accents'
        },
        {
            id: 5,
            image: "/g-1.jpg",
            category: 'living',
            title: 'Elegant Dining Room',
            description: 'Open-concept dining space with statement chandelier'
        },
        {
            id: 12,
            image: "/g-2.jpg",
            category: 'kitchen',
            title: 'Modern Kitchen',
            description: 'Streamlined design with waterfall countertop island'
        },
        {
            id: 10,
            image: "/g-15.jpg",
            category: 'kitchen',
            title: 'Gourmet Kitchen',
            description: 'Chef-inspired layout with professional-grade appliances'
        },
        {
            id: 14,
            image: "/g-21.jpg",
            category: 'bathroom',
            title: 'Master Bathroom',
            description: 'Double vanity with freestanding soaking tub'
        }
    ];

    const videoProjects: VideoProject[] = [
        {
            id: 1,
            videoId: "f4X2cOnWQ3g",
            title: "Modern House Tour",
            description: "Walk through our latest modern home transformation",
            thumbnail: "/021325jnjnjn-1733306135-GQ8UW.jpg"
        },
        {
            id: 2,
            videoId: "f_jUaaM7lFM",
            title: "Kitchen Renovation",
            description: "Complete kitchen makeover from start to finish",
            thumbnail: "/kVHBp.jpg"
        },
        {
            id: 3,
            videoId: "iaxpvJIaXOg",
            title: "Bedroom Design Tips",
            description: "Expert tips for creating the perfect bedroom",
            thumbnail: "/vipk-Bedroom.jpg"
        }
    ];

    const handleVideoPlay = (videoId: string) => {
        setActiveVideoId(videoId);
    };

    const filteredItems = selectedCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src="/yivWL.jpg"
                    alt="Gallery Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Project Gallery</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Explore our collection of thoughtfully designed spaces
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <Filter className="w-5 h-5 text-teal-600" />
                        <div className="flex flex-wrap gap-4">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-teal-50'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map(item => (
                            <div key={item.id} className="group cursor-pointer">
                                <div className="relative h-[300px] overflow-hidden rounded-xl mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        priority
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-white/80">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Videos</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Watch our transformation journeys and get inspired by our detailed project walkthroughs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoProjects.map(video => (
                            <div key={video.id} className="group">
                                <VideoPlayer
                                    videoId={video.videoId}
                                    title={video.title}
                                    thumbnail={video.thumbnail}
                                    isPlaying={activeVideoId === video.videoId}
                                    onPlay={() => handleVideoPlay(video.videoId)}
                                />
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                                    <p className="text-gray-600">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-teal-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <Sparkles className="w-12 h-12 text-teal-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-8">
                        Let&apos;s collaborate to create a space that perfectly reflects your style and meets your needs.
                    </p>
                    <Link href='/contact-us' className="bg-white text-teal-900 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors duration-300">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};


const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title, thumbnail, isPlaying, onPlay }) => {
    const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
            {!isPlaying ? (
                <>
                    <div className="relative w-full h-full">
                        <Image
                            src={thumbnailUrl}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/30 transition-opacity hover:bg-black/40" />
                    <button
                        onClick={onPlay}
                        className="absolute inset-0 flex items-center justify-center group"
                        aria-label="Play video"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-all duration-300 group-hover:scale-110">
                            <Play
                                className="w-8 h-8 text-teal-600 group-hover:text-teal-700 transition-colors ml-1"
                                fill="currentColor"
                            />
                        </div>
                    </button>
                </>
            ) : (
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
};


export default GalleryPage;