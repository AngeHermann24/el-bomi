'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
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
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-anthracite-900/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/filiales/construction" className="flex items-center gap-2 sm:gap-3 group">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg overflow-hidden border border-rust-500/30 transition-colors group-hover:border-rust-500/50">
              <Image src="/construction.jpeg" alt="EL-BOMI Construction" width={36} height={36} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <span className="block font-heading text-[12px] sm:text-sm font-bold uppercase tracking-widest text-white">
                EL-BOMI HOLDING
              </span>
              <span className="block text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-rust-400/80">
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
                    ? 'text-rust-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/construction/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-rust-500/40 bg-rust-500/10 px-5 py-2.5 text-sm font-semibold text-rust-300 transition-all hover:bg-rust-500/20 hover:border-rust-500/70"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Burger */}
          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Nav mobile */}
        {isOpen && (
          <nav className="md:hidden border-t border-white/[0.06] py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-4 py-3.5 text-[15px] font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-rust-500/10 text-rust-400'
                    : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/construction/contact"
              className="block mt-2 rounded-lg border border-rust-500/40 bg-rust-500/10 px-4 py-3.5 text-center text-[15px] font-semibold text-rust-300"
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
