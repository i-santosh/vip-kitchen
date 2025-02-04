"use client"

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription } from '@/components/ui/alert';

type ContactDetail = {
    text: string;
    isTitle?: boolean;
}

type ContactInfo = {
    icon: React.ElementType;
    title: string;
    details: ContactDetail[];
    highlight?: boolean;
}

const ContactPage = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: ''
    });

    const [status, setStatus] = useState({
        type: '', // 'success' | 'error'
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://vipkitchen.pythonanywhere.com/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }
            setStatus({
                type: 'success',
                message: 'Thank you for your message! We will get back to you soon.'
            });
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                message: ''
            });
        } catch (error: unknown ) {
            if (error instanceof Error) {
                setStatus({
                    type: 'error',
                    message: error.message || 'Something went wrong. Please try again.'
                });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Something went wrong. Please try again.'
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo: ContactInfo[] = [
        {
            icon: Phone,
            title: "Call Us",
            details: [
                { text: "+91 70093 50717" }
            ],
            highlight: true
        },
        {
            icon: Mail,
            title: "Email Us",
            details: [
                { text: "info@vipkitchen.in" },
                { text: "support@vipkitchen.in" }
            ]
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: [
                { text: "Head Office", isTitle: true },
                { text: "Nawanshahr Road, Near Petrol Pump" },
                { text: "Garhshankar-Punjab, India, 144527" },
                { text: "" },
                { text: "Branch Office", isTitle: true },
                { text: "Model Town, Up Stairs Adidas Showroom" },
                { text: "City Center, Ropar, Punjab, India, 140001" }
            ]
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: [
                { text: "Open 7 days" },
                { text: "09:00 AM - 8:00 PM" }
            ]
        }
    ];
    const locations = [
        {
            title: "VIP Kitchen & Interiors",
            address: "Nawanshahr Road, near Petrol Pump, Garhshankar, Punjab 144527",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.2991205617764!2d76.14400427550429!3d31.2124412743563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abfca5f3876a3%3A0xc171f4da1a002ab9!2sVIP%20Kitchen%20%26%20Interiors!5e0!3m2!1sen!2sin!4v1737289576156!5m2!1sen!2sin"
        },
        {
            title: "VIP Kitchen & Interiors",
            address: "Model Town, Up Stairs Adidas Showroom, VIP Kitchen, City Center, Punjab 140001",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.6189194132744!2d76.5193369754938!3d30.953206074478643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39055516b41791c9%3A0xa4623ad21d2257d!2sVIP%20Kitchen%20%26%20Interiors!5e0!3m2!1sen!2sin!4v1737289659929!5m2!1sen!2sin"
        }
    ];




    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center">
                <Image
                    src="/contact-us.jpg"
                    alt="Contact Us Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="relative container mx-auto px-4 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Let&apos;s discuss how we can transform your space into something extraordinary
                    </p>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <Card key={index} className={`border-none ${info.highlight ? 'bg-teal-900 text-white' : 'bg-white'}`}>
                                <CardContent className="p-6">
                                    <div className={`p-3 rounded-xl inline-block mb-4 ${info.highlight ? 'bg-white/10' : 'bg-teal-50'
                                        }`}>
                                        <info.icon className={`w-6 h-6 ${info.highlight ? 'text-white' : 'text-teal-600'
                                            }`} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                                    {info.details.map((detail, idx) => (
                                        <p
                                            key={idx}
                                            className={`
                        ${detail.isTitle ?
                                                    (info.highlight ? 'text-white font-semibold bg-white/10' : 'text-teal-600 font-semibold bg-teal-50') + ' inline-block px-2 py-1 rounded-lg'
                                                    :
                                                    info.highlight ? 'text-white/80' : 'text-gray-600'
                                                }
                        ${detail.text === "" ? 'my-2' : 'mb-2'}
                      `}
                                        >
                                            {detail.text}
                                        </p>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="w-12 h-1 bg-teal-500 mb-8" />
                            <h2 className="text-3xl font-bold mb-6">Let&apos;s Start a Conversation</h2>
                            <p className="text-gray-600 mb-8">
                                Whether you&apos;re starting a new project or looking to renovate, we&apos;re here to help bring your vision to life.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <MessageSquare className="w-5 h-5 text-teal-600" />
                                    <span>Usually responds within 24 hours</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <Clock className="w-5 h-5 text-teal-600" />
                                    <span>Available for site visits seven days</span>
                                </div>
                            </div>
                        </div>

                        <Card className="border-none shadow-lg">
                            <CardContent className="p-8">
                                {status.type && (
                                    <Alert className={`mb-6 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                        <AlertDescription>{status.message}</AlertDescription>
                                    </Alert>
                                )}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            placeholder="Tell us about your project"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </form>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <Card key={index} className="border-none overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="p-6">
                                        <h3 className="inline-block bg-teal-50 text-teal-600 px-3 py-1.5 rounded-lg text-xl font-semibold mb-3">{location.title}</h3>
                                        <p className="text-gray-600">{location.address}</p>
                                    </div>
                                    <div className="aspect-video w-full">
                                        <iframe
                                            src={location.mapSrc}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;