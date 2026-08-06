'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
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
      scrolled ? 'border-b border-navy-900/8 bg-white/95 shadow-[0_4px_30px_rgba(11,30,61,0.08)] backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E85D04]/40 to-transparent" />

      <div className="mx-auto flex h-16 sm:h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/filiales/transit-logistique" className="group flex items-center gap-2 sm:gap-3">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-[#E85D04]/10 blur-md transition-all group-hover:bg-[#E85D04]/20 group-hover:blur-lg" />
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center">
              <Image src="/transite.png" alt="EL-BOMI Transit" width={36} height={36} className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="min-w-0">
            <span className="block font-heading text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900">EL-BOMI</span>
            <span className="block font-heading text-[8px] sm:text-[10px] uppercase tracking-widest text-navy-900/40">Transit & Logistique</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}
              className="group relative px-3.5 py-2 text-[13px] font-medium text-navy-900/55 transition-colors hover:text-navy-900"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-[#E85D04] to-[#0D7377] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/filiales/transit-logistique/suivi"
            className="group ml-3 overflow-hidden rounded-lg bg-gradient-to-r from-[#E85D04] to-[#F77F00] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(232,93,4,0.25)]"
          >
            <span className="flex items-center gap-1.5">
              Suivre ma cargaison <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy-900/10 text-navy-900/55 md:hidden -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy-900/8 bg-white/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4 max-h-[70vh] overflow-y-auto">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="border-b border-navy-900/[0.06] py-3.5 text-[15px] font-medium text-navy-900/55 hover:text-[#E85D04]"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/filiales/transit-logistique/suivi" onClick={() => setOpen(false)}
                className="mt-4 rounded-lg bg-gradient-to-r from-[#E85D04] to-[#F77F00] py-3.5 text-center text-[15px] font-semibold text-white"
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
