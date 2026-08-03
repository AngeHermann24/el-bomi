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
    <header className="sticky top-0 z-50 border-b border-[#C9A227]/[0.08] bg-[#0A1628]/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          <Link href="/filiales/investissement-assurance" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C9A227]/25 bg-[#C9A227]/[0.04] transition-all group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/[0.08]">
              <Landmark className="h-5 w-5 text-[#E8C766]" strokeWidth={1.5} />
            </div>
            <div>
              <span className="block font-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
                EL-BOMI GROUP
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C9A227]/70">
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
                    ? 'text-[#E8C766]'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/investissement-assurance/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C9A227]/30 bg-[#C9A227]/[0.06] px-5 py-2.5 text-[13px] font-semibold text-[#E8C766] transition-all hover:bg-[#C9A227]/[0.12] hover:border-[#C9A227]/50"
            >
              Prendre rendez-vous
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
          <nav className="md:hidden border-t border-[#C9A227]/[0.06] py-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-[#C9A227]/[0.08] text-[#E8C766]'
                    : 'text-white/55 hover:bg-white/[0.03] hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/investissement-assurance/contact"
              className="block mt-2 rounded-lg border border-[#C9A227]/30 bg-[#C9A227]/[0.06] px-4 py-2.5 text-center text-sm font-semibold text-[#E8C766]"
              onClick={() => setIsOpen(false)}
            >
              Prendre rendez-vous
            </Link>
          </nav>
        )}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A227]/15 to-transparent" />
    </header>
  );
}
