'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Truck, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const nav = [
  { label: 'Accueil', href: '/filiales/transit-logistique' },
  { label: 'Services', href: '/filiales/transit-logistique/services' },
  { label: 'Réseau', href: '/filiales/transit-logistique/reseau' },
  { label: 'Suivi cargaison', href: '/filiales/transit-logistique/suivi' },
  { label: 'Contact', href: '/filiales/transit-logistique/contact' },
];

export default function TransitHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? 'border-b border-gold-500/10 bg-[#0B1E3D]/95 shadow-[0_4px_30px_rgba(11,30,61,0.5)] backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" />

      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/filiales/transit-logistique" className="group flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/8">
            <div className="absolute inset-0 rounded-lg bg-gold-500/10 blur-md transition-all group-hover:bg-gold-500/22 group-hover:blur-lg" />
            <Truck className="relative h-4.5 w-4.5 text-gold-400" />
          </div>
          <div>
            <span className="block font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400">EL-BOMI</span>
            <span className="block font-heading text-[10px] uppercase tracking-widest text-white/30">Transit & Logistique</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}
              className="group relative px-3.5 py-2 text-[13px] font-medium text-white/45 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/filiales/transit-logistique/suivi"
            className="group ml-3 overflow-hidden rounded-lg border border-gold-500/25 bg-gold-500/8 px-4 py-2 text-[13px] font-semibold text-gold-300 transition-all hover:bg-gold-500/15 hover:border-gold-400/40 hover:shadow-[0_0_15px_rgba(201,162,39,0.15)]"
          >
            <span className="flex items-center gap-1.5">
              Suivre ma cargaison <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/45 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold-500/10 bg-[#0B1E3D]/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="border-b border-white/[0.05] py-3 text-sm font-medium text-white/50 hover:text-gold-400"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/filiales/transit-logistique/suivi" onClick={() => setOpen(false)}
                className="mt-4 rounded-lg border border-gold-500/25 bg-gold-500/8 py-2.5 text-center text-sm font-semibold text-gold-300"
              >
                Suivre ma cargaison
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
