'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-anthracite-950 border-t border-white/5 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      {/* Ambient background effects */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-56 h-56 bg-accent-600/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="container-max section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-heading font-black text-white">EL-BOMI</span>
              <span className="block text-[9px] font-semibold tracking-[0.3em] text-accent-400 uppercase -mt-0.5">
                Construction
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Entreprise de construction et travaux publics d&apos;excellence. Nous bâtissons l&apos;avenir avec passion, expertise et innovation depuis plus de 15 ans.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-500/20 border border-white/10 hover:border-accent-500/30 flex items-center justify-center text-white/50 hover:text-accent-400 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'À Propos', href: '/a-propos' },
                { label: 'Services', href: '/services' },
                { label: 'Projets', href: '/projets' },
                { label: 'Équipe', href: '/equipe' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/50 hover:text-accent-400 text-sm transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {['Gros Œuvre', 'Génie Civil', 'Rénovation', 'Aménagement', 'Démolition', 'Construction Durable'].map(
                (service) => (
                  <li key={service}>
                    <span className="text-white/50 text-sm">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  123 Avenue de la Construction<br />75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <a href="tel:+33123456789" className="text-white/50 hover:text-accent-400 text-sm transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                <a href="mailto:contact@ebomi-btp.com" className="text-white/50 hover:text-accent-400 text-sm transition-colors">
                  contact@ebomi-btp.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent-500 shrink-0" />
                <span className="text-white/50 text-sm">Lun-Ven : 7h - 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} EL-BOMI BTP. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
