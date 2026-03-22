"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { Sprout, Flower, Droplets, Factory, ArrowRight } from "lucide-react";

const projectIcons = [Sprout, Flower, Droplets, Factory];

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
        return "bg-ink/50 text-white";
    }
  };

  return (
    <section id="projets" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green/10 text-green-dark text-sm font-semibold tracking-wide mb-4">
            NOS RÉALISATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
            Nos Projets
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed">
            Découvrez les projets que nous accompagnons pour transformer l\u0026apos;agriculture burkinabè.
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
            <div className="bg-cream border border-ink/5 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-green via-earth to-brown flex items-center justify-center relative min-h-[300px]">
                  <Sprout className="w-24 h-24 sm:w-32 sm:h-32 text-white/30" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold ${getBadgeColor(featuredProject.badge)}`}>
                      {featuredProject.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-12">
                  <span className="text-sm text-ink/50 uppercase tracking-wider font-medium">{featuredProject.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-2 mb-4">{featuredProject.title}</h3>
                  <p className="text-ink/70 mb-6 leading-relaxed">{featuredProject.description}</p>

                  <div className="space-y-3 text-sm border-t border-ink/10 pt-6">
                    <div className="flex justify-between">
                      <span className="text-ink/50">Période</span>
                      <span className="font-semibold text-ink">{featuredProject.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/50">Budget</span>
                      <span className="font-semibold text-ink">{featuredProject.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/50">Financeur</span>
                      <span className="font-semibold text-ink">{featuredProject.funder}</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-8 text-brown font-semibold hover:text-brown-light transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => {
            const ProjectIcon = projectIcons[index + 1] || Sprout;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-cream border border-ink/5 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-earth/30 to-cream flex items-center justify-center relative">
                  <ProjectIcon className="w-16 h-16 text-earth/50" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-semibold ${getBadgeColor(project.badge)}`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs text-ink/50 uppercase tracking-wider font-medium">{project.category}</span>
                  <h3 className="text-lg font-bold text-ink mt-1 mb-2">{project.title}</h3>
                  <p className="text-sm text-ink/60 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex items-center justify-between text-xs text-ink/50">
                    <span>{project.date}</span>
                    <span className="font-medium">{project.budget}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
