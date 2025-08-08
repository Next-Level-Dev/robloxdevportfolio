'use client';
import Image from 'next/image';
import React from 'react';

const images = [
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
];

export default function Gallery() {
  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold text-center mb-3">Image Gallery</h2>

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
