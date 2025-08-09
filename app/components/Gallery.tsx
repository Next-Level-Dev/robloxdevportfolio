"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
    "https://i.postimg.cc/jdMBC0FF/0FEYrPF.webp",
    "https://i.postimg.cc/3RQczKkd/1isriyN.webp",
    "https://i.postimg.cc/65WD95YZ/3Ctbn64.webp",
    "https://i.postimg.cc/Vk5pCZyL/J6DfRVj.webp",
    "https://i.postimg.cc/Pqw76Lrg/lMISKLq.webp",
    "https://i.postimg.cc/RZ88Q191/TCSTL0E.webp",
    "https://i.postimg.cc/gJKN539T/SidKKh6.webp",
    "https://i.postimg.cc/PqWHyxx6/image.png",
    "https://i.postimg.cc/3wXB42wx/image.png",
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
