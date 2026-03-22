"use client";

import { motion } from "framer-motion";
import { kpiData } from "@/lib/data";
import { ArrowRight, Sprout, Users, TrendingUp, Award } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout,
  Users,
  TrendingUp,
  Award,
};

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen pt-20 overflow-hidden bg-cream">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green/10 text-green-dark text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 bg-green animate-pulse" />
                CENTRE D&apos;EXCELLENCE AGRICOLE
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.1]"
            >
              Accompagnons l&apos;entrepreneuriat{" "}
              <span className="text-green">agricole</span>{" "}
              au Burkina Faso
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-ink/70 max-w-xl leading-relaxed"
            >
              CAEASA accompagne les entrepreneurs agricoles dans leurs projets de création, 
              développement et consolidation pour une agriculture durable et prospère.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-brown text-white font-semibold hover:bg-brown-light transition-all duration-200"
              >
                Démarrer votre projet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projets"
                className="inline-flex items-center px-8 py-4 border-2 border-ink text-ink font-semibold hover:bg-ink hover:text-white transition-all duration-200"
              >
                Voir nos projets
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #8B9A46 0%, #5A6B2F 50%, #3D4A1E 100%)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Sprout className="w-32 h-32 text-white/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
                <p className="text-sm text-ink/60 font-medium">Agriculture durable • Burkina Faso</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-20 bg-ink/10"
        >
          {kpiData.map((kpi, index) => {
            const IconComponent = iconMap[kpi.icon] || Sprout;
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="bg-cream p-6 sm:p-8"
              >
                <IconComponent className="w-6 h-6 text-green mb-4" />
                <p className="text-3xl sm:text-4xl font-extrabold text-ink">{kpi.value}</p>
                <p className="text-sm text-ink/60 mt-1 font-medium">{kpi.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
