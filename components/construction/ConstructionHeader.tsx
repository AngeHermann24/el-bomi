'use client';

import Link from 'next/link';
import { Menu, X, HardHat } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/filiales/construction', label: 'Accueil' },
  { href: '/filiales/construction/expertises', label: 'Expertises' },
  { href: '/filiales/construction/realisations', label: 'Réalisations' },
  { href: '/filiales/construction/methodologie', label: 'Méthodologie' },
];

export default function ConstructionHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-navy-900/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/filiales/construction" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 border border-gold-500/30 transition-colors group-hover:bg-gold-500/20">
              <HardHat className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <span className="block font-heading text-sm font-bold uppercase tracking-widest text-white">
                EL-BOMI GROUP
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-400/80">
                Construction & Infrastructures
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? 'text-gold-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/construction/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gold-500/40 bg-gold-500/10 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-all hover:bg-gold-500/20 hover:border-gold-500/70"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Burger */}
          <button
            className="md:hidden rounded-lg border border-white/10 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Nav mobile */}
        {isOpen && (
          <nav className="md:hidden border-t border-white/[0.06] py-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-gold-500/10 text-gold-400'
                    : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/construction/contact"
              className="block mt-2 rounded-lg border border-gold-500/40 bg-gold-500/10 px-4 py-2.5 text-center text-sm font-semibold text-gold-300"
              onClick={() => setIsOpen(false)}
            >
              Demander un devis
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
