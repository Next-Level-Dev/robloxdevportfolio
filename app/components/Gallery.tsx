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
          <div
            key={index}
            className="relative w-full h-64 rounded-md overflow-hidden"
          >
            <Image
              src={url}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0} // preload first image for better UX
              unoptimized={false} // allow optimization; set true if external fails
            />
          </div>
        ))}
      </div>
    </section>
  );
}
