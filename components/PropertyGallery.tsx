"use client";

import { useState } from "react";
import Image from "next/image";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export default function PropertyGallery({
  images,
  title,
}: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-24 rounded-xl overflow-hidden border-2 transition ${
              selectedImage === image
                ? "border-yellow-500"
                : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              sizes="(max-width:768px) 100vw,
(max-width:1200px) 50vw,
33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}