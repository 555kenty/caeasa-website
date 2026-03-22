"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { antennes } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-cream-2" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green/10 text-green-dark text-sm font-medium  mb-4">
            Contactez-nous
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink font-serif mb-4">
            Restons en contact
          </h2>
          <p className="text-lg text-muted">
            Vous avez un projet ? Une question ? N&apos;hésitez pas à nous contacter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-white  p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3  border border-cream-2 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3  border border-cream-2 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3  border border-cream-2 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="project">Projet agricole</option>
                    <option value="formation">Demande de formation</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3  border border-cream-2 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre question..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brown text-white font-medium  hover:bg-brown-light transition-colors"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Map & Antennes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white  p-6 shadow-sm">
              <h3 className="text-lg font-bold text-ink font-serif mb-4">Nos Antennes</h3>
              
              <div className="relative aspect-[4/3] bg-earth-xl  overflow-hidden">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ background: "#f7ede2" }}
                >
                  <path
                    d="M20,30 L35,25 L50,20 L70,25 L85,30 L90,50 L80,70 L60,85 L40,80 L25,70 L15,50 Z"
                    fill="#e8c4a0"
                    stroke="#c47a45"
                    strokeWidth="0.5"
                  />

                  {antennes.map((antenne) => (
                    <g key={antenne.id}>
                      <circle
                        cx={antenne.position.x}
                        cy={antenne.position.y}
                        r="3"
                        fill="#7a3b1e"
                        className="animate-pulse"
                      />
                      <circle
                        cx={antenne.position.x}
                        cy={antenne.position.y}
                        r="5"
                        fill="none"
                        stroke="#7a3b1e"
                        strokeWidth="0.5"
                        opacity="0.5"
                      />
                    </g>
                  ))}
                </svg>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {antennes.map((antenne) => (
                    <div key={antenne.id} className="bg-white/90 backdrop-blur-sm  px-3 py-1.5 text-xs">
                      <span className="font-medium text-ink">{antenne.name}</span>
                      <span className="text-muted ml-1">({antenne.type})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white  p-6 shadow-sm">
              <h3 className="text-lg font-bold text-ink font-serif mb-4">Coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium text-ink">Siège social</p>
                    <p className="text-sm text-muted">Ouagadougou, Burkina Faso</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium text-ink">Téléphone</p>
                    <p className="text-sm text-muted">+226 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-medium text-ink">Email</p>
                    <p className="text-sm text-muted">contact@caeasa.bf</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
