'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { sliderImages } from '@/data/site';

export function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-soft">
      <div className="relative h-[360px] w-full sm:h-[420px]">
        {sliderImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" priority={index === 0} unoptimized />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/60'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
