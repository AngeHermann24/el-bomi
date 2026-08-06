'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const nav = [
  { label: 'Accueil', href: '/filiales/agriculture' },
  { label: 'Nos Activités', href: '/filiales/agriculture/activites' },
  { label: 'Nos Exploitations', href: '/filiales/agriculture/exploitations' },
  { label: 'Contact', href: '/filiales/agriculture/contact' },
];

export default function AgricultureHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'border-b border-[#2D7A3E]/12 bg-white/95 shadow-[0_4px_30px_rgba(45,122,62,0.08)] backdrop-blur-md'
        : 'bg-transparent'
    }`}>
      {/* Ruban sinueux décoratif */}
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-1 w-full opacity-40" viewBox="0 0 1440 4" preserveAspectRatio="none">
        <path d="M0 2 Q 180 0 360 2 T 720 2 T 1080 2 T 1440 2" stroke="#2D7A3E" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="mx-auto flex h-16 sm:h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/filiales/agriculture" className="group flex items-center gap-2 sm:gap-3">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#2D7A3E]/10 blur-md transition-all group-hover:bg-[#2D7A3E]/20 group-hover:blur-lg" />
            <Leaf className="relative h-5 w-5 text-[#2D7A3E]" strokeWidth={1.8} />
          </div>
          <div className="min-w-0">
            <span className="block font-heading text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#1B3A2B]">EL-BOMI</span>
            <span className="block font-heading text-[8px] sm:text-[10px] uppercase tracking-widest text-[#1B3A2B]/45">Agriculture & Ressources</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}
              className="group relative px-3.5 py-2 text-[13px] font-medium text-[#1B3A2B]/60 transition-colors hover:text-[#1B3A2B]"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-[#2D7A3E] to-[#D4A017] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/filiales/agriculture/contact"
            className="group ml-3 overflow-hidden rounded-full bg-gradient-to-r from-[#2D7A3E] to-[#3A8B4C] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(45,122,62,0.25)]"
          >
            <span className="flex items-center gap-1.5">
              Nous contacter
            </span>
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#1B3A2B]/10 text-[#1B3A2B]/55 md:hidden -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#2D7A3E]/10 bg-white/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4 max-h-[70vh] overflow-y-auto">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="border-b border-[#1B3A2B]/[0.06] py-3.5 text-[15px] font-medium text-[#1B3A2B]/60 hover:text-[#2D7A3E]"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/filiales/agriculture/contact" onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-gradient-to-r from-[#2D7A3E] to-[#3A8B4C] py-3.5 text-center text-[15px] font-semibold text-white"
              >
                Nous contacter
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
