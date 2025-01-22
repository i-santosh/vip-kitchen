"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductCardProps {
  image: string;
  name: string;
  rating: number;
  category: string;
}

const ProductCard = ({ image, name, rating, category }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative">
        <div className="aspect-square overflow-hidden rounded-xl bg-stone-100">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute right-4 top-4 rounded-full bg-white p-2 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
            {/* <p className="text-sm font-medium text-gray-900">${price}</p> */}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-500">{category}</p>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm text-gray-500">{rating}</span>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg p-0">
          <DialogHeader className="p-4">
            <DialogTitle className="text-xl">{name}</DialogTitle>
          </DialogHeader>
          <div className="relative h-[400px] w-full">
            <Image
              src={image}
              alt={name}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, 600px"
              className="object-contain"
              priority={true}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = '/placeholder.jpg';
              }}
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-gray-500">{rating}</span>
              </div>
            </div>
            <p className="mt-2 text-gray-500">{category}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;