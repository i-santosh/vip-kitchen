import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Star, Clock, CheckCircle2, Building2 } from 'lucide-react';
import type { Metadata } from "next";
import Link from 'next/link';


export const metadata: Metadata = {
  title: "About Us | VIP Kitchen",
  description: "Crafting Beautiful Spaces Since 2008.",
};


interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <Card className="border-none bg-white/50 backdrop-blur-sm">
    <CardContent className="p-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-xl bg-teal-50">
          <Icon className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMemberCard = ({ image, name, role, description }: TeamMemberCardProps) => (
  <div className="group">
    <div className="relative h-[400px] overflow-hidden rounded-xl mb-4">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const AboutUs: React.FC = () => {
  const stats = [
    { icon: Building2, value: "17+", label: "Years Experience" },
    { icon: Users, value: "2000+", label: "Happy Clients" },
    { icon: CheckCircle2, value: "5000+", label: "Projects Completed" },
    { icon: Star, value: "4.9", label: "Average Rating" }
  ];

  const teamMembers = [
    {
      image: "/principal.png",
      name: "Sarah Johnson",
      role: "Principal Designer",
      description: "With over 15 years of experience in luxury interior design, Sarah brings creative vision and technical expertise to every project."
    },
    {
      image: "/director.jpg",
      name: "Michael Chen",
      role: "Creative Director",
      description: "Michael's innovative approach to design has earned him recognition in leading architecture and interior design publications."
    },
    {
      image: "/project-manager.jpg",
      name: "Emily Rodriguez",
      role: "Project Manager",
      description: "Emily ensures seamless execution of projects, coordinating with clients and contractors to deliver exceptional results."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/about-us-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl mb-6">
            Crafting Beautiful Spaces Since 2008
          </h1>
          <p className="text-xl text-white/90 max-w-xl">
            We&apos;re more than designers – we&apos;re creators of experiences, transforming spaces into stunning reflections of our clients&apos; dreams.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px]">
              <Image
                src="/story.jpg"
                alt="Our Story"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-teal-600">17+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
            <div>
              <div className="w-12 h-1 bg-teal-500 mb-8" />
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, VIP Kitchen began with a simple yet powerful vision: to transform living spaces into extraordinary environments that inspire and delight. Our journey started with a small team of passionate designers who believed in the power of thoughtful design to enhance people&apos;s lives.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we&apos;ve grown into a full-service interior design firm with a portfolio of over 5,000 successful projects. Our team of expert designers, project managers, and craftsmen work together to deliver exceptional results that exceed our clients&apos; expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-teal-500 pl-4">
                  <h3 className="font-semibold mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-600">To create inspiring spaces that perfectly balance beauty, functionality, and personal expression.</p>
                </div>
                <div className="border-l-2 border-teal-500 pl-4">
                  <h3 className="font-semibold mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-600">To be the most trusted name in interior design, known for innovation and excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion for Design",
                description: "We pour our heart into every project, treating each space as a unique canvas for creativity."
              },
              {
                icon: Users,
                title: "Client-Centric Approach",
                description: "Your vision and satisfaction are our top priorities throughout the design process."
              },
              {
                icon: Clock,
                title: "Timeless Quality",
                description: "We create enduring designs that stand the test of time in both style and craftsmanship."
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="w-12 h-1 bg-teal-500 mb-8" />
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-xl">
                Our talented team of designers and professionals bring creativity, expertise, and passion to every project
              </p>
            </div>
            <button className="mt-4 md:mt-0 flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors duration-300">
              <span>View All Team Members</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Design Journey?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Let&apos;s work together to create a space that reflects your style and exceeds your expectations.
          </p>
          <Link href='/contact-us' className="bg-white text-teal-900 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
