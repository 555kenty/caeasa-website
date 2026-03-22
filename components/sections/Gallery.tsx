"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { galleryImages } from "@/lib/data";
import { ChevronLeft, ChevronRight, Users, Flower, Wheat, Sprout, Droplets, Factory } from "lucide-react";

const galleryIcons = [Users, Flower, Wheat, Sprout, Droplets, Factory];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + galleryImages.length) % galleryImages.length;
  };

  const CurrentIcon = galleryIcons[currentIndex];
  const PrevIcon = galleryIcons[getSlideIndex(-1)];
  const NextIcon = galleryIcons[getSlideIndex(1)];

  return (
    <section id="galerie" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-brown/10 text-brown text-sm font-semibold tracking-wide mb-4">
              NOS RÉALISATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Galerie photos
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
              className="p-3 border border-ink/20 hover:border-brown hover:bg-brown hover:text-white transition-all"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
              className="p-3 border border-ink/20 hover:border-brown hover:bg-brown hover:text-white transition-all"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex gap-4 justify-center items-center">
            {/* Previous slide (preview) */}
            <motion.div
              key={`prev-${getSlideIndex(-1)}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block w-1/4 aspect-[4/3] bg-cream overflow-hidden cursor-pointer"
              onClick={prevSlide}
            >
              <div className="w-full h-full bg-gradient-to-br from-green/20 via-earth/20 to-brown/20 flex items-center justify-center">
                <PrevIcon className="w-16 h-16 text-green/40" />
              </div>
            </motion.div>

            {/* Current slide */}
            <motion.div
              key={`current-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-1/2 aspect-[16/10] bg-cream overflow-hidden relative group"
            >
              <div className="w-full h-full bg-gradient-to-br from-green via-earth to-brown flex items-center justify-center">
                <CurrentIcon className="w-24 h-24 sm:w-32 sm:h-32 text-white/30" />
              </div>
              
              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-semibold">{galleryImages[currentIndex].alt}</p>
                  <p className="text-white/70 text-sm">{currentIndex + 1} / {galleryImages.length}</p>
                </div>
              </div>
            </motion.div>

            {/* Next slide (preview) */}
            <motion.div
              key={`next-${getSlideIndex(1)}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block w-1/4 aspect-[4/3] bg-cream overflow-hidden cursor-pointer"
              onClick={nextSlide}
            >
              <div className="w-full h-full bg-gradient-to-br from-green/20 via-earth/20 to-brown/20 flex items-center justify-center">
                <NextIcon className="w-16 h-16 text-green/40" />
              </div>
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                className={`h-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-brown" 
                    : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Aller à l\u0026apos;image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
