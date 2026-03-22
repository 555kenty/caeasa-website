"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { team, values } from "@/lib/data";
import { Globe, Target, Lightbulb, Leaf, Users } from "lucide-react";

const valueIcons = [Target, Lightbulb, Leaf, Users];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-brown/10 text-brown text-sm font-semibold tracking-wide mb-6">
              À PROPOS DE NOUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-6">
              Une vision pour l\u0026apos;agriculture burkinabè
            </h2>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Le Centre d\u0026apos;Appui à l\u0026apos;Entrepreneuriat Agricole (CAEASA) est une organisation 
                créée en 2015 pour accompagner le développement de l\u0026apos;entrepreneuriat agricole au Burkina Faso.
              </p>
              <p>
                Notre mission est de contribuer à la sécurité alimentaire et à la création d\u0026apos;emplois 
                décents par le soutien aux initiatives entrepreneuriales dans le secteur agricole.
              </p>
              <p>
                Nous croyons en un agriculture moderne, durable et inclusive qui permet aux jeunes 
                et aux femmes de s\u0026apos;épanouir tout en contribuant au développement économique du pays.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-green via-earth to-brown flex items-center justify-center">
              <Globe className="w-32 h-32 sm:w-48 sm:h-48 text-white/30" />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight text-center mb-12">Nos Valeurs</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const ValueIcon = valueIcons[index] || Target;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 border border-ink/5"
                >
                  <div className="w-12 h-12 bg-brown/10 flex items-center justify-center mb-4">
                    <ValueIcon className="w-6 h-6 text-brown" />
                  </div>
                  <h4 className="text-lg font-bold text-ink mb-2">{value.title}</h4>
                  <p className="text-sm text-ink/60 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight text-center mb-12">Notre Équipe</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="bg-white overflow-hidden group border border-ink/5"
              >
                <div className={`aspect-square bg-gradient-to-br ${member.gradient} flex items-center justify-center relative`}>
                  <span className="text-3xl sm:text-4xl font-bold text-white">{member.initials}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-ink text-lg">{member.name}</h4>
                  <p className="text-sm text-brown font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-ink/60 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
