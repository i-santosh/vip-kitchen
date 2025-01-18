import { Mail } from 'lucide-react';

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <button
      className={`
        group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-stone-700 to-stone-900 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-stone-300 dark:focus:ring-stone-800
        ${className}
      `}
    >
      <span className="relative flex items-center gap-2 rounded-full bg-white px-3 py-2 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 dark:bg-gray-900">
        <Mail className="h-4 w-4 text-stone-700 group-hover:text-white transition-colors duration-300 ease-in-out" />
        <span className="relative text-stone-700 group-hover:text-white transition-colors duration-300 ease-in-out">Contact Us</span>
      </span>
    </button>
  );
}