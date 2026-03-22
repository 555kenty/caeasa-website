"use client";

import { Facebook, Twitter, Linkedin, Youtube, Heart } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projets", href: "#projets" },
    { label: "Actualités", href: "#actualites" },
  ],
  services: [
    { label: "Accompagnement", href: "#" },
    { label: "Formation", href: "#" },
    { label: "Financement", href: "#" },
    { label: "Accès aux marchés", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Conditions d\u0026apos;utilisation", href: "#" },
  ],
};

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">C</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold">CAEASA</span>
                <span className="block text-xs text-cream/60">Centre d\u0026apos;Appui Agricole</span>
              </div>
            </div>

            <p className="text-cream/70 mb-6 max-w-sm leading-relaxed">
              Accompagner les entrepreneurs agricoles pour un développement durable 
              et inclusif de l\u0026apos;agriculture au Burkina Faso.
            </p>

            <div className="flex gap-3">
              {Object.entries(socialIcons).map(([social, Icon]) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-cream/10 flex items-center justify-center hover:bg-brown transition-colors"
                  aria-label={social}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/60">
            © {new Date().getFullYear()} CAEASA. Tous droits réservés.
          </p>
          <p className="text-sm text-cream/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-brown fill-brown" /> au Burkina Faso
          </p>
        </div>
      </div>
    </footer>
  );
}
