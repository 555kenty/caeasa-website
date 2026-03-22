"use client";

import { motion, Variants } from "framer-motion";
import { kpiData } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-earth-xl/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-xl/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-xl text-green-dark text-sm font-medium ">
                <span className="w-2 h-2 bg-green  animate-pulse" />
                Centre d&apos;Excellence Agricole
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink font-serif leading-tight"
            >
              Accompagnons l&apos;entrepreneuriat agricole au Burkina Faso
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-ink-2 max-w-lg"
            >
              CAEASA accompagne les entrepreneurs agricoles dans leurs projets de création, développement et consolidation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-brown text-white font-medium  hover:bg-brown-light transition-colors"
              >
                Démarrer votre projet
              </a>
              <a
                href="#projets"
                className="inline-flex items-center px-8 py-4 border-2 border-brown text-brown font-medium  hover:bg-brown hover:text-white transition-colors"
              >
                Voir nos projets
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative aspect-square  overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-earth-400 to-brown-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">🌾</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm  p-4">
                <p className="text-sm text-ink font-medium">TODO: replace with real photo</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green  flex items-center justify-center shadow-lg">
              <span className="text-4xl">🚜</span>
            </div>
          </motion.div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {kpiData.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              className="bg-white  p-6 shadow-sm"
            >
              <p className="text-3xl sm:text-4xl font-bold text-brown font-serif">{kpi.value}</p>
              <p className="text-sm text-muted mt-1">{kpi.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
