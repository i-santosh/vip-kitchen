import * as React from 'react';
import HeroSection from '@/components/hero';
import Footer from '@/components/footer';
import Image from 'next/image';

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
  <div className="group bg-stone-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="aspect-square w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="transition-transform duration-500 group-hover:scale-110 object-cover"
      />
    </div>
    <div className="p-6 transform transition-transform duration-300 group-hover:translate-y-1">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-stone-500 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{description}</p>
    </div>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => (
  <div className="relative overflow-hidden rounded-lg group">
    <div className="aspect-[4/3] w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="transition-transform duration-500 group-hover:scale-110 object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/90 text-sm">{description}</p>
    </div>
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
    <section className="container p-20">
      <div className="flex">
        <div className="w-3/5 relative">
          <Image
            src="https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/design-ideas-1631689829-DYFFs/categories-1631797090-e35Vc/desktop-1631797104-w47JI/1518-x-1288-1648187994-4ef5H.jpg"
            alt="Interior Design"
            className="object-cover rounded-l-lg"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>
        <div className="w-2/5 bg-stone-400 p-8 rounded-r-lg">
          <div className="mb-8 flex flex-col justify-center items-center h-full w-full">
            <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
            <p className="text-gray-600 mb-6 px-6">
              Designing a beautiful and practical home takes valuable time and money.
              But following trends and letting others dictate your home design choices
              inevitably leads to disappointment and boredom.
            </p>
            <button className="bg-stone-600 text-white px-8 py-3 rounded-lg hover:bg-stone-700 transition-colors duration-300">
              Book a Visit
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              The complete home interiors experience
            </h2>
            <p className="text-xl text-gray-600">
              No more dreaming about your interiors. <strong>VIP Kitchen</strong> brings
              together award-winning designers, service partners and brands, to help
              you take your home interiors from dream to reality.
            </p>
          </div>
        </div>
      </section>

      {/* What we offer Section */}
      <section className="py-20 bg-stone-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What we offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerCards.map((card, index) => (
              <OfferCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-stone-300">
        <div className="container mx-auto px-4">
          <h4 className="text-4xl font-bold text-center mb-12">
            We believe home design should be empowering, dynamic, and fun.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectGallery.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className='w-screen flex justify-center items-center p-4'>
            <h2 className='w-[50%] text-center'>
              Your home design can be rooted in who you are and what you value — two things that evolve over time, but never go out of style.Let's design a space that celebrate you.
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;