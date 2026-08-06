'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const nav = [
  { label: 'Accueil', href: '/filiales/energie' },
  { label: 'Nos Solutions', href: '/filiales/energie/solutions' },
  { label: 'Impact', href: '/filiales/energie/impact' },
  { label: 'Projets', href: '/filiales/energie/projets' },
  { label: 'Contact', href: '/filiales/energie/contact' },
];

export default function EnergieHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-gold-500/15 bg-[#BFB499]/95 shadow-[0_4px_30px_rgba(11,30,61,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Ligne dorée décorative en haut */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </div>

      <div className="mx-auto flex h-16 sm:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/filiales/energie" className="group flex items-center gap-2 sm:gap-2.5">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-amber-accent/20 blur-md transition-all duration-500 group-hover:bg-amber-accent/30 group-hover:blur-lg" />
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-gold-500/30 bg-white shadow-sm">
              <Image
                src="/Energi.png"
                alt="EL-BOMI Énergie"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          </div>
          <div className="min-w-0">
            <span className="block font-heading text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900">
              EL-BOMI
            </span>
            <span className="block font-heading text-[8px] sm:text-[10px] uppercase tracking-[0.15em] text-navy-900/50">
              Énergie & Électricité
            </span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 text-[13px] font-medium text-navy-900/60 transition-colors hover:text-navy-900"
            >
              {item.label}
              {/* Underline ambre */}
              <span className="absolute inset-x-3 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-amber-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link
            href="/filiales/energie/contact"
            className="group relative ml-4 overflow-hidden rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-[13px] font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-500/20 hover:border-gold-400/50"
          >
            {/* Pulse ambre */}
            <span className="absolute inset-0 rounded-full opacity-0 ring-1 ring-amber-accent/30 transition-all duration-300 group-hover:opacity-100 group-hover:ring-4 group-hover:ring-amber-accent/10" />
            <span className="relative flex items-center gap-1.5">
              Devis <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy-900/10 text-navy-900/60 md:hidden -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold-500/15 bg-[#BFB499]/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4 max-h-[70vh] overflow-y-auto">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy-900/[0.05] py-3.5 text-[15px] font-medium text-navy-900/60 transition-colors hover:text-gold-600"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/filiales/energie/contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full border border-gold-500/30 bg-gold-500/10 py-3.5 text-center text-[15px] font-semibold text-navy-900"
              >
                Demander un devis
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
