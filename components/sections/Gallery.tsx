"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-cream overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-ink font-serif">Galerie photos</h3>
          <a href="#" className="text-brown hover:text-brown-light transition-colors text-sm font-medium">
            Voir tout →
          </a>
        </div>
      </motion.div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-72 h-48  overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-green-xl via-earth-xl to-brown/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-5xl">{["🌾", "🌻", "🌽", "🌱", "💧", "🏭"][index]}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-4 w-16 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
