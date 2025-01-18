import { Pen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const UnderConstruction = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-stone-50">
      <div className="text-center px-4 py-12 max-w-2xl mx-auto">
        {/* Icon Container with Animation */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto bg-stone-100 rounded-full flex items-center justify-center">
            <Pen className="w-10 h-10 text-stone-600 animate-bounce" />
          </div>
          <div className="absolute -top-1 -right-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-500"></span>
            </span>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-bold text-stone-800 mb-4">
          Page Under Construction
        </h1>
        <p className="text-lg text-stone-600 mb-8">
          We&apos;re currently crafting something amazing for you. 
          This page is being written and will be available soon.
        </p>

        {/* Divider with Animation */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 bg-gradient-to-r from-stone-200 via-stone-400 to-stone-200 rounded animate-pulse"></div>
        </div>

        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-64 h-64 bg-stone-100 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;