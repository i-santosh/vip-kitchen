import * as React from 'react';
import HeroSection from '@/components/hero';
import Image from 'next/image';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface OfferCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, imageUrl }) => (
  <div className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-stone-100">
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="transition-transform duration-500 group-hover:scale-105 object-cover"
      />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-teal-500 transition-all duration-300 group-hover:h-full" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1 group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
    </div>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => (
  <div className="relative overflow-hidden rounded-xl group h-64 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="absolute inset-0 bg-black/20 z-10" />

    <Image
      src={image}
      alt={title}
      fill
      className="transition-all duration-700 ease-in-out group-hover:scale-110 object-cover brightness-90 group-hover:brightness-100"
    />

    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500 ease-in-out z-20" />

    {/* Content Container */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end z-30">
      <div className="transform transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">
        {/* Animated Line */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-0.5 bg-teal-400 group-hover:w-12 transition-all duration-300 ease-in-out" />
          <ArrowUpRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title with hover effect */}
        <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
          {title}
        </h3>

        {/* Description with fade-in effect */}
        <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
          {description}
        </p>
      </div>
    </div>

    {/* Hover border effect */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/20 rounded-xl transition-all duration-300 z-40" />
  </div>
);

const offerCards = [
  {
    title: 'Interior Design',
    description: 'Expert designers to help you create your dream space with personalized solutions.',
    imageUrl: 'https://vipkitchen.in/wp-content/uploads/2022/07/6-1.jpg'
  },
  {
    title: 'Furniture Solutions',
    description: 'Curated collection of premium furniture from leading brands worldwide.',
    imageUrl: 'https://vipkitchen.in/wp-content/uploads/2022/07/4.jpg'
  },
  {
    title: 'Project Management',
    description: 'End-to-end project execution with dedicated project managers.',
    imageUrl: 'https://vipkitchen.in/wp-content/uploads/2022/07/home_interior3_portfolio2-960x720-1.jpg'
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality checks and warranty on all products and services.',
    imageUrl: 'https://vipkitchen.in/wp-content/uploads/2022/07/home_interior3_portfolio4-960x720-1.jpg'
  }
];

const projectGallery = [
  {
    image: "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/2024-1704354150-jzIcs/ond-1728544865-qCz8v/living-room-1728552712-ToumU/021325jnjnjn-1733306135-GQ8UW.jpg",
    title: "Modern Living Room",
    description: "Contemporary design with comfort and style in perfect harmony"
  },
  {
    image: "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/2024-1704354150-jzIcs/ond-1728544865-qCz8v/kitchen-1728544882-0n1Ia/0025-1734075898-kVHBp.jpg",
    title: "Luxury Kitchen",
    description: "State-of-the-art kitchen design with premium finishes"
  },
  {
    image: "https://vipkitchen.in/wp-content/uploads/2022/07/Bedroom.jpg",
    title: "Master Bedroom",
    description: "Serene and sophisticated bedroom spaces for ultimate relaxation"
  }
];


const ContactSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
        <div className="w-full md:w-3/5 relative h-[400px]">
          <Image
            src="https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/design-ideas-1631689829-DYFFs/categories-1631797090-e35Vc/desktop-1631797104-w47JI/1518-x-1288-1648187994-4ef5H.jpg"
            alt="Interior Design"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
        <div className="w-full md:w-2/5 bg-stone-100 p-8">
          <div className="flex flex-col justify-center h-full">
            <div className="w-12 h-1 bg-teal-500 mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s Create Your Dream Space
            </h2>
            <p className="text-gray-600 mb-8 text-sm">
              Transform your vision into reality with our expert design team.
              Book a consultation today and take the first step towards your
              perfect home.
            </p>
            <button className="flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 w-fit group">
              <span>Book a Visit</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Block Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-teal-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              The complete home interiors experience
            </h2>
            <p className="text-gray-600">
              No more dreaming about your interiors. <strong>VIP Kitchen</strong> brings
              together award-winning designers, service partners and brands, to help
              you take your home interiors from dream to reality.
            </p>
          </div>
        </div>
      </section>

      {/* What we offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-1 bg-teal-500 mb-4" />
            <h2 className="text-3xl font-bold text-center">
              What we offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerCards.map((card, index) => (
              <OfferCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-1 bg-teal-500 mb-4" />
            <h4 className="text-3xl font-bold text-center max-w-2xl">
              We believe home design should be empowering, dynamic, and fun.
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectGallery.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <p className="max-w-xl text-center text-gray-600">
              Your home design can be rooted in who you are and what you value —
              two things that evolve over time, but never go out of style.
              Let&apos;s design a space that celebrates you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default Home;