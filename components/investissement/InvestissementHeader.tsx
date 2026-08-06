'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/filiales/investissement-assurance', label: 'Accueil' },
  { href: '/filiales/investissement-assurance/investissement', label: 'Investissement' },
  { href: '/filiales/investissement-assurance/assurance', label: 'Assurance' },
  { href: '/filiales/investissement-assurance/patrimoine', label: 'Patrimoine' },
  { href: '/filiales/investissement-assurance/simulateur', label: 'Simulateur' },
];

export default function InvestissementHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'border-b border-[#B87333]/15 bg-[#0A1F17]/95 shadow-[0_4px_30px_rgba(10,31,23,0.4)] backdrop-blur-xl'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          <Link href="/filiales/investissement-assurance" className="flex items-center gap-2 sm:gap-3 group">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg overflow-hidden transition-all group-hover:opacity-90">
              <Image src="/Assurance.png" alt="Investissement & Assurance" width={36} height={36} className="object-contain" />
            </div>
            <div className="min-w-0">
              <span className="block font-heading text-[12px] sm:text-sm font-bold uppercase tracking-[0.15em] text-white">
                EL-BOMI HOLDING
              </span>
              <span className="block text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-[#B87333]/80">
                Investissement &amp; Assurance
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  pathname === l.href
                    ? 'text-[#D4B896]'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/investissement-assurance/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#B87333]/30 bg-[#B87333]/[0.06] px-5 py-2.5 text-[13px] font-semibold text-[#D4B896] transition-all hover:bg-[#B87333]/[0.12] hover:border-[#B87333]/50"
            >
              Prendre rendez-vous
            </Link>
          </nav>

          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden border-t border-[#B87333]/[0.06] py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-4 py-3.5 text-[15px] font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-[#B87333]/[0.08] text-[#D4B896]'
                    : 'text-white/55 hover:bg-white/[0.03] hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/investissement-assurance/contact"
              className="block mt-2 rounded-lg border border-[#B87333]/30 bg-[#B87333]/[0.06] px-4 py-3.5 text-center text-[15px] font-semibold text-[#D4B896]"
              onClick={() => setIsOpen(false)}
            >
              Prendre rendez-vous
            </Link>
          </nav>
        )}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#B87333]/15 to-transparent" />
    </header>
  );
}
