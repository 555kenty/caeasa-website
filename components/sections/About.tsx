"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { team, values } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream-2" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-brown/10 text-brown text-sm font-medium rounded-full mb-4">
              À propos de nous
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink font-serif mb-6">
              Une vision pour l&apos;agriculture burkinabè
            </h2>
            <div className="space-y-4 text-ink-2">
              <p>
                Le Centre d&apos;Appui à l&apos;Entrepreneuriat Agricole (CAEASA) est une organisation 
                créée en 2015 pour accompagner le développement de l&apos;entrepreneuriat agricole au Burkina Faso.
              </p>
              <p>
                Notre mission est de contribuer à la sécurité alimentaire et à la création d&apos;emplois 
                décents par le soutien aux initiatives entrepreneuriales dans le secteur agricole.
              </p>
              <p>
                Nous croyons en un agriculture moderne, durable et inclusive qui permet aux jeunes 
                et aux femmes de s&apos;épanouir tout en contribuant au développement économique du pays.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green via-earth to-brown flex items-center justify-center">
                <span className="text-9xl">🌍</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-ink font-medium">TODO: replace with real photo</p>
              </div>
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
          <h3 className="text-2xl font-bold text-ink font-serif text-center mb-12">Nos Valeurs</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <h4 className="text-lg font-bold text-brown font-serif mb-2">{value.title}</h4>
                <p className="text-sm text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-ink font-serif text-center mb-12">Notre Équipe</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden group"
              >
                <div className={`aspect-square bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-white font-serif">{member.initials}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-ink font-serif">{member.name}</h4>
                  <p className="text-sm text-brown mb-2">{member.role}</p>
                  <p className="text-sm text-muted">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
