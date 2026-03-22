"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { news, events } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";

export default function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getTagColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green/10 text-green-dark";
      case "brown":
        return "bg-brown/10 text-brown";
      case "earth":
        return "bg-earth/10 text-earth";
      default:
        return "bg-ink/10 text-ink/60";
    }
  };

  return (
    <section id="actualites" className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-earth/10 text-earth text-sm font-semibold tracking-wide mb-4">
            RESTEZ INFORMÉS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
            Actualités & Événements
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed">
            Suivez nos dernières actualités et ne manquez pas nos prochains événements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News List */}
          <div className="lg:col-span-2 space-y-4">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 flex gap-4 sm:gap-6 hover:shadow-md transition-shadow border border-ink/5"
              >
                {/* Date */}
                <div className="flex-shrink-0 w-14 sm:w-16 text-center">
                  <span className="block text-2xl font-extrabold text-brown">{item.day}</span>
                  <span className="block text-xs text-ink/50 uppercase font-semibold">{item.month}</span>
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold mb-2 ${getTagColor(item.tagColor)}`}>
                    {item.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.excerpt}</p>
                </div>

                {/* Arrow */}
                <a href="#" className="flex-shrink-0 self-center text-brown hover:text-brown-light transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center pt-4"
            >
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-brown text-brown font-semibold hover:bg-brown hover:text-white transition-colors"
              >
                Voir toutes les actualités
              </a>
            </motion.div>
          </div>

          {/* Events Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 h-fit border border-ink/5"
          >
            <h3 className="text-xl font-bold text-ink mb-6">Prochains événements</h3>

            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="flex gap-4">
                  <div
                    className="w-3 h-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: event.dotColor }}
                  />
                  <div>
                    <h4 className="font-bold text-ink">{event.title}</h4>
                    <p className="text-sm text-brown font-medium">{event.date}</p>
                    <p className="text-sm text-ink/50 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="block mt-8 text-center text-brown font-semibold hover:text-brown-light transition-colors"
            >
              Voir le calendrier complet
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
