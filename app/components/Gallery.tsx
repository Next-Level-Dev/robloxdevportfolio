"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "https://i.postimg.cc/YS9KPR8N/Untitled-design.png",
  "https://i.postimg.cc/PqWHyxx6/image.png",
  "https://i.postimg.cc/YS9KPR8N/Untitled-design.png",
  "https://i.postimg.cc/PqWHyxx6/image.png",
  "https://i.postimg.cc/YS9KPR8N/Untitled-design.png",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const openImage = (url: string) => setSelectedImg(url);
  const closeImage = () => setSelectedImg(null);

  return (
    <>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
          {images.map((url, index) => (
            <div
              key={index}
              className="relative w-full aspect-video rounded-md overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openImage(url)}
            >
              <Image
                src={url}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index === 0}
                unoptimized={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal overlay */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out backdrop-blur-sm"
          onClick={closeImage}
        >
          <Image 
            src={selectedImg}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] rounded-md shadow-lg object-contain"
            draggable={false}
          />
        </div>
      )}
    </>
  );
}
