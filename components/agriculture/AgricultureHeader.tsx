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
        ? 'border-b border-[#C9A227]/15 bg-[#0B1E3D]/95 shadow-[0_4px_30px_rgba(11,30,61,0.4)] backdrop-blur-md'
        : 'bg-transparent'
    }`}>
      {/* Ruban sinueux décoratif */}
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-1 w-full opacity-30" viewBox="0 0 1440 4" preserveAspectRatio="none">
        <path d="M0 2 Q 180 0 360 2 T 720 2 T 1080 2 T 1440 2" stroke="#C9A227" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/filiales/agriculture" className="group flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/8">
            <div className="absolute inset-0 rounded-full bg-[#C9A227]/10 blur-md transition-all group-hover:bg-[#C9A227]/20 group-hover:blur-lg" />
            <Leaf className="relative h-4.5 w-4.5 text-[#C9A227]" strokeWidth={1.8} />
          </div>
          <div>
            <span className="block font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A227]">EL-BOMI</span>
            <span className="block font-heading text-[10px] uppercase tracking-widest text-white/35">Agriculture & Ressources</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}
              className="group relative px-3.5 py-2 text-[13px] font-medium text-white/50 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-[#C9A227] to-[#E8C766] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/filiales/agriculture/contact"
            className="group ml-3 overflow-hidden rounded-full border border-[#C9A227]/25 bg-[#C9A227]/8 px-4 py-2 text-[13px] font-semibold text-[#C9A227] transition-all hover:bg-[#C9A227]/15 hover:border-[#E8C766]/40 hover:shadow-[0_0_15px_rgba(201,162,39,0.12)]"
          >
            <span className="flex items-center gap-1.5">
              Nous contacter
            </span>
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#C9A227]/10 bg-[#0B1E3D]/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="border-b border-white/[0.05] py-3 text-sm font-medium text-white/55 hover:text-[#C9A227]"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/filiales/agriculture/contact" onClick={() => setOpen(false)}
                className="mt-4 rounded-full border border-[#C9A227]/25 bg-[#C9A227]/8 py-2.5 text-center text-sm font-semibold text-[#C9A227]"
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
