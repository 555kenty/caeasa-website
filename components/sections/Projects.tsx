"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "En cours":
        return "bg-green text-white";
      case "Terminé":
        return "bg-brown text-white";
      case "Planifié":
        return "bg-earth text-white";
      default:
        return "bg-muted text-white";
    }
  };

  return (
    <section id="projets" className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green/10 text-green-dark text-sm font-medium  mb-4">
            Nos réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink font-serif mb-4">
            Nos Projets
          </h2>
          <p className="text-lg text-muted">
            Découvrez les projets que nous accompagnons pour transformer l&apos;agriculture burkinabè.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-white  overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-green via-earth to-brown flex items-center justify-center relative">
                  <span className="text-8xl">🌾</span>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1  text-xs font-medium ${getBadgeColor(featuredProject.badge)}`}>
                      {featuredProject.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm  px-3 py-1">
                    <p className="text-xs text-ink font-medium">TODO: replace with real photo</p>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <span className="text-sm text-muted uppercase tracking-wider">{featuredProject.category}</span>
                  <h3 className="text-2xl font-bold text-ink font-serif mt-2 mb-4">{featuredProject.title}</h3>
                  <p className="text-ink-2 mb-6">{featuredProject.description}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">Période</span>
                      <span className="font-medium text-ink">{featuredProject.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Budget</span>
                      <span className="font-medium text-ink">{featuredProject.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Financeur</span>
                      <span className="font-medium text-ink">{featuredProject.funder}</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center mt-8 text-brown font-medium hover:text-brown-light transition-colors"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white  overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-earth-xl to-cream-2 flex items-center justify-center relative">
                <span className="text-5xl">{["🌻", "💧", "🏭"][index]}</span>
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1  text-xs font-medium ${getBadgeColor(project.badge)}`}>
                    {project.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs text-muted uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-bold text-ink font-serif mt-1 mb-2">{project.title}</h3>
                <p className="text-sm text-ink-2 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{project.date}</span>
                  <span>{project.budget}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
