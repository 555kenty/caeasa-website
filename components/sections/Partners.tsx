"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { partners } from "@/lib/data";

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "funder":
        return "Financeur";
      case "technical":
        return "Partenaire technique";
      case "institutional":
        return "Partenaire institutionnel";
      default:
        return "Partenaire";
    }
  };

  return (
    <section className="py-24 bg-cream overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brown/10 text-brown text-sm font-medium  mb-4">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink font-serif mb-4">
            Nos Partenaires
          </h2>
          <p className="text-lg text-muted">
            Des organisations de renom qui soutiennent notre mission.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="flex partner-scroll hover:pause">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="w-64 h-32 bg-white  shadow-sm flex flex-col items-center justify-center px-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cream-2 to-earth-xl  flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-brown font-serif">{partner.name.charAt(0)}</span>
                </div>
                <p className="text-sm font-medium text-ink text-center">{partner.name}</p>
                <p className="text-xs text-muted">{getTypeLabel(partner.type)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10" />
      </motion.div>
    </section>
  );
}
