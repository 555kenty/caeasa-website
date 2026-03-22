"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { expertiseAreas } from "@/lib/data";
import { ArrowUpRight, Sprout, Banknote, Handshake } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout,
  Banknote,
  Handshake,
};

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brown/10 text-brown text-sm font-semibold tracking-wide mb-6">
            NOS DOMAINES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
            Notre Expertise
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed">
            Des solutions complètes pour accompagner les entrepreneurs agricoles 
            à chaque étape de leur développement.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Sprout;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-cream p-8 sm:p-10 hover:bg-white transition-colors duration-300 border border-ink/5"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-ink/5">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-green/10 flex items-center justify-center mb-6"
                >
                  <IconComponent className="w-7 h-7 text-green" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-green transition-colors">
                  {area.title}
                </h3>
                <p className="text-ink/60 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brown hover:text-brown-light transition-colors"
                >
                  En savoir plus
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Hover border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-green group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
