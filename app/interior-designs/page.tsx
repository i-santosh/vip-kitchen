import React from 'react';
import { ArrowUpRight, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from '@/components/interior/products';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Interior Design Portfolio | VIP Kitchen",
    description: "Discover our collection of thoughtfully crafted spaces that reflect modern living.",
};


interface DesignShowcaseProps {
    isImageFirst?: boolean;
    image: string;
    title: string;
    description: string;
    features: string[];
}

const DesignShowcase: React.FC<DesignShowcaseProps> = ({ isImageFirst = true, image, title, description, features }) => (
    <div className={`flex flex-col ${isImageFirst ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
        <div className="w-full md:w-1/2 relative h-[400px] rounded-xl overflow-hidden group">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <Card className="w-full md:w-1/2 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-stone-50">
            <CardContent className="p-8">
                <div className="w-12 h-1 bg-teal-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <div className="space-y-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <ArrowRight className="w-4 h-4 text-teal-500" />
                            <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
);

interface CategoryCardProps {
    title: string;
    description: string;
    image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image }) => (
    <div className="group relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
        <Image
            src={image}
            alt={title}
            width={400}
            height={500}
            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-white/80 text-sm mb-4">{description}</p>
            <button className="flex items-center space-x-2 text-teal-400 group/btn">
                <span>Explore More</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-4px]" />
            </button>
        </div>
    </div>
);

interface CollectionCardProps {
    title: string;
    description: string;
    image: string;
    items: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, description, image, items }) => (
    <div className="group cursor-pointer">
        <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-white/80 mb-4">{description}</p>
                <p className="text-sm font-medium">{items} items</p>
            </div>
        </div>
    </div>
);

const InteriorDesigns: React.FC = () => {
    const designs = [
        {
            image: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/2024-1704354150-jzIcs/ond-1728544865-qCz8v/living-room-1728552712-ToumU/021325jnjnjn-1733306135-GQ8UW.jpg",
            title: "Contemporary Living Spaces",
            description: "Modern design elements seamlessly blend with comfort to create an inviting atmosphere that suits your lifestyle.",
            features: [
                "Open-concept layouts for better flow",
                "Strategic lighting design",
                "Custom furniture solutions",
                "Premium material selection"
            ]
        },
        {
            image: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/2024-1704354150-jzIcs/ond-1728544865-qCz8v/kitchen-1728544882-0n1Ia/0025-1734075898-kVHBp.jpg",
            title: "Modern Kitchen Designs",
            description: "Functional and stylish kitchens that combine innovative storage solutions with premium aesthetics.",
            features: [
                "Ergonomic workspace design",
                "High-end appliance integration",
                "Smart storage solutions",
                "Designer finishes and fixtures"
            ]
        },
        {
            image: "https://vipkitchen.in/wp-content/uploads/2022/07/Bedroom.jpg",
            title: "Luxurious Bedrooms",
            description: "Transform your bedroom into a peaceful sanctuary with our carefully curated design elements.",
            features: [
                "Ambient lighting schemes",
                "Custom wardrobes and storage",
                "Premium bedding solutions",
                "Acoustic comfort features"
            ]
        }
    ];

    const categories = [
        {
            title: "Minimalist Design",
            description: "Clean lines and uncluttered spaces that promote peace and tranquility",
            image: "/design-styles-1.jpg"
        },
        {
            title: "Industrial Chic",
            description: "Raw elements meet sophisticated design for a unique urban feel",
            image: "/design-styles-2.jpg"
        },
        {
            title: "Scandinavian Style",
            description: "Light, airy spaces with functional beauty at their core",
            image: "/design-styles-3.jpg"
        }
    ];

    const products = [
        {
            image: "/product-1.jpg",
            name: "Modern Lounge Chair",
            price: 5632,
            rating: 4.8,
            category: "Seating"
        },
        {
            image: "/product-2.jpg",
            name: "Pendant Light",
            price: 7898,
            rating: 4.7,
            category: "Lighting"
        },
        {
            image: "/product-3.jpg",
            name: "Marble Coffee Table",
            price: 3270,
            rating: 4.9,
            category: "Tables"
        },
        {
            image: "/product-4.jpg",
            name: "Accent Cabinet",
            price: 7580,
            rating: 4.6,
            category: "Storage"
        }
    ];

    const collections = [
        {
            title: "Scandinavian Collection",
            description: "Clean lines meet natural materials",
            image: "/collections-1.jpg",
            items: 24
        },
        {
            title: "Modern Luxe",
            description: "Contemporary luxury for modern living",
            image: "/collections-2.jpg",
            items: 18
        },
        {
            title: "Urban Industrial",
            description: "Raw materials with refined finishes",
            image: "/collections-3.jpg",
            items: 32
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/banner-1714034487-xNaST/homepage-banner-web-1714034622-yivWL.jpg"
                    alt="Interior Design Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Interior Design Portfolio</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Discover our collection of thoughtfully crafted spaces that reflect modern living
                    </p>
                </div>
            </section>

            {/* Design Showcase Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {designs.map((design, index) => (
                            <DesignShowcase
                                key={index}
                                isImageFirst={index % 2 === 0}
                                {...design}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-6">
                            <Sparkles className="w-12 h-12 text-teal-500" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Design Styles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our range of design styles and find the perfect match for your personality and lifestyle
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <CategoryCard key={index} {...category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
                            <p className="text-gray-600 max-w-xl">
                                Discover our handpicked selection of premium furniture and decor pieces that blend style with functionality
                            </p>
                        </div>
                        <button className="mt-4 md:mt-0 flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors duration-300">
                            <span>View All Products</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                rating={product.rating}
                                category={product.category}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Curated Collections Section */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-full bg-teal-100 p-3 mb-4">
                            <Sparkles className="w-6 h-6 text-teal-600" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Curated Collections</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our thoughtfully curated collections designed to inspire and transform your space
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {collections.map((collection, index) => (
                            <CollectionCard key={index} {...collection} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Process Section */}
            <section className="py-16 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                        {['Consultation', 'Design', 'Execution'].map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute inset-0 bg-white/5 rounded-xl transition-all duration-300 group-hover:bg-white/10" />
                                <div className="relative z-10 p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-4">{step}</h3>
                                    <p className="text-white/70">Detailed process for every project</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-teal-900 to-teal-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
                        <p className="mb-8 text-white/80">
                            Let&apos;s collaborate to create a space that perfectly reflects your style and meets your needs.
                        </p>
                        <button className="inline-flex items-center space-x-2 bg-white text-teal-900 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors duration-300 group">
                            <span>Schedule a Consultation</span>
                            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InteriorDesigns;
