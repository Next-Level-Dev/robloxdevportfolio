'use client';
import Image from 'next/image';
import React from 'react';

const images = [
  'https://source.unsplash.com/random/800x600?sig=1',
  'https://source.unsplash.com/random/800x600?sig=2',
  'https://source.unsplash.com/random/800x600?sig=3',
  'https://source.unsplash.com/random/800x600?sig=4',
  'https://source.unsplash.com/random/800x600?sig=5',
];

export default function Gallery() {
  return (
    <section className="py-2 px-2">
      <h2 className="text-3xl font-bold text-center">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={url}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
