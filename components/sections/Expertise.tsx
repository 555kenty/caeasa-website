"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { expertiseAreas } from "@/lib/data";

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brown/10 text-brown text-sm font-medium rounded-full mb-4">
            Nos domaines
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink font-serif mb-4">
            Notre Expertise
          </h2>
          <p className="text-lg text-muted">
            Des solutions complètes pour accompagner les entrepreneurs agricoles à chaque étape de leur développement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-xl to-earth-xl rounded-2xl flex items-center justify-center text-3xl mb-6">
                {area.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-ink font-serif mb-3">
                {area.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {area.description}
              </p>

              {/* Bottom bar animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green to-green-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
