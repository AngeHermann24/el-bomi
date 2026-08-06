'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/filiales/immobilier', label: 'Accueil' },
  { href: '/filiales/immobilier/activites', label: 'Activités' },
  { href: '/filiales/immobilier/biens-terrains', label: 'Biens & Terrains' },
  { href: '/filiales/immobilier/technologie-gis-drone', label: 'Technologie' },
];

export default function ImmobilierHeader() {
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
        ? 'border-b border-[#C9A96E]/15 bg-[#1C1915]/95 shadow-[0_4px_30px_rgba(28,25,21,0.4)] backdrop-blur-xl'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          <Link href="/filiales/immobilier" className="flex items-center gap-2 sm:gap-3 group">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg overflow-hidden transition-all group-hover:opacity-90">
              <Image src="/immobilier.png" alt="Immobilier & Patrimoine" width={36} height={36} className="object-contain" />
            </div>
            <div className="min-w-0">
              <span className="block font-heading text-[12px] sm:text-sm font-bold uppercase tracking-[0.15em] text-white">
                EL-BOMI HOLDING
              </span>
              <span className="block text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C9A96E]/80">
                Immobilier &amp; Patrimoine
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium transition-colors ${
                  pathname === l.href
                    ? 'text-[#DEC391]'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/immobilier/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C9A96E]/30 bg-[#C9A96E]/[0.06] px-5 py-2.5 text-[13px] font-semibold text-[#DEC391] transition-all hover:bg-[#C9A96E]/[0.12] hover:border-[#C9A96E]/50"
            >
              Nous contacter
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
          <nav className="md:hidden border-t border-[#C9A96E]/[0.06] py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-4 py-3.5 text-[15px] font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-[#C9A96E]/[0.08] text-[#DEC391]'
                    : 'text-white/55 hover:bg-white/[0.03] hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/filiales/immobilier/contact"
              className="block mt-2 rounded-lg border border-[#C9A96E]/30 bg-[#C9A96E]/[0.06] px-4 py-3.5 text-center text-[15px] font-semibold text-[#DEC391]"
              onClick={() => setIsOpen(false)}
            >
              Nous contacter
            </Link>
          </nav>
        )}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/15 to-transparent" />
    </header>
  );
}
