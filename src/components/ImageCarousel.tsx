"use client";

import Image from "next/image";
import React, { useState, useEffect, JSX } from "react";

const slides = [
  {
    image: "/clayton-cardinalli-hOLe72JN37I-unsplash.jpg",
    tagline: "Fast integration into existing processes, minimizing disruption to ongoing operations.",
  },
  {
    image: "/sam-moghadam-bN_aaTKfwM0-unsplash.jpg",
    tagline: "Swift and responsive assistance that ensures minimal downtime.",
  },
  {
    image: "/cdc-4CVYSH5mQYs-unsplash.jpg",
    tagline: "Accessible design from the outset with a wide range of user needs in mind without specialized tools.",
  },
];

export default function ImageCarousel(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative aspect-[16/9]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Tagline overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
            <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 md:left-16 right-4 sm:right-8 md:right-16">
              <p className="text-white text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-snug tracking-wide">
                {slide.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
