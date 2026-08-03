'use client';

import Link from 'next/link';
import { Menu, X, Landmark } from 'lucide-react';
import { useState } from 'react';
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-navy-900/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          <Link href="/filiales/investissement-assurance" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 border border-gold-500/30 transition-colors group-hover:bg-gold-500/20">
              <Landmark className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <span className="block font-heading text-sm font-bold uppercase tracking-widest text-white">
                EL-BOMI GROUP
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-400/80">
                Investissement &amp; Assurance
              </span>
            </div>
          </Link>

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
              href="/filiales/investissement-assurance/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gold-500/40 bg-gold-500/10 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-all hover:bg-gold-500/20 hover:border-gold-500/70"
            >
              Nous contacter
            </Link>
          </nav>

          <button
            className="md:hidden rounded-lg border border-white/10 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

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
              href="/filiales/investissement-assurance/contact"
              className="block mt-2 rounded-lg border border-gold-500/40 bg-gold-500/10 px-4 py-2.5 text-center text-sm font-semibold text-gold-300"
              onClick={() => setIsOpen(false)}
            >
              Nous contacter
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
