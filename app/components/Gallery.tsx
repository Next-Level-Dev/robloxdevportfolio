'use client';
import Image from 'next/image';
import React from 'react';

const images = [
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
  'https://i.postimg.cc/PqWHyxx6/image.png',
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
  'https://i.postimg.cc/PqWHyxx6/image.png',
  'https://i.postimg.cc/YS9KPR8N/Untitled-design.png',
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-5">Image Gallery</h2>

      {/* 2 images per row on all screen sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {images.map((url, index) => (
          <div
            key={index}
            className="relative w-full aspect-video rounded-md overflow-hidden shadow-md"
          >
            <Image
              src={url}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              unoptimized={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
