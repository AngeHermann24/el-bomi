'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HeartPulse, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const nav = [
  { label: 'Accueil',        href: '/filiales/medical' },
  { label: 'Nos activités',  href: '/filiales/medical/activites' },
  { label: 'Nos centres',    href: '/filiales/medical/centres' },
  { label: 'Qualité',        href: '/filiales/medical/qualite' },
  { label: 'Contact',        href: '/filiales/medical/contact' },
];

export default function MedicalHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'border-b border-[#0B1E3D]/8 bg-white/97 shadow-[0_2px_24px_rgba(11,30,61,0.06)] backdrop-blur-md'
        : 'bg-transparent'
    }`}>
      {/* Barre top accent marine */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#0B1E3D]/0 via-[#0B1E3D]/20 to-[#0B1E3D]/0" />

      <div className="mx-auto flex h-16 sm:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/filiales/medical" className="group flex items-center gap-2 sm:gap-3">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-[#4A7C7C]/20 bg-[#4A7C7C]/8 shadow-sm transition-all group-hover:bg-[#4A7C7C]/14">
            <HeartPulse className="h-4.5 w-4.5 text-[#4A7C7C]" strokeWidth={1.8} />
          </div>
          <div className="min-w-0">
            <span className="block font-heading text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#0B1E3D]">EL-BOMI</span>
            <span className="block font-heading text-[8px] sm:text-[10px] uppercase tracking-widest text-[#0B1E3D]/35">Medical Distribution</span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}
              className="group relative px-4 py-2 text-[13px] font-medium text-[#0B1E3D]/50 transition-colors hover:text-[#0B1E3D]"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 bg-[#C9A227] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <a href="tel:+22527000000"
            className="group ml-4 flex items-center gap-2 rounded-xl border border-[#0B1E3D]/10 bg-[#0B1E3D]/[0.03] px-4 py-2 text-[13px] font-semibold text-[#0B1E3D]/60 transition-all hover:bg-[#0B1E3D] hover:text-white hover:border-[#0B1E3D]"
          >
            <Phone className="h-3.5 w-3.5" /> Urgences
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} aria-label="Menu"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0B1E3D]/10 text-[#0B1E3D]/40 md:hidden -mr-2"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#0B1E3D]/6 bg-white/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4 max-h-[70vh] overflow-y-auto">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="border-b border-[#0B1E3D]/[0.05] py-3.5 text-[15px] font-medium text-[#0B1E3D]/50 hover:text-[#0B1E3D]"
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:+22527000000" onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0B1E3D] py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> Urgences médicales
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
