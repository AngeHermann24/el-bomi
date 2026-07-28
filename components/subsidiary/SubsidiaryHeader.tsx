'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpLeft, Phone } from 'lucide-react';
import IconRenderer from '@/components/IconRenderer';
import type { Subsidiary } from '@/types';

interface SubsidiaryHeaderProps {
  subsidiary: Subsidiary;
}

export default function SubsidiaryHeader({ subsidiary }: SubsidiaryHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const base = `/filiales/${subsidiary.slug}`;
  const nav = [
    { label: 'Accueil', href: base },
    { label: 'Activités', href: `${base}/activites` },
    { label: 'Réalisations', href: `${base}/realisations` },
    { label: 'Contact', href: `${base}/contact` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Bandeau groupe */}
      <div className="relative z-50 hidden border-b border-surface-line/10 bg-surface-alt lg:block">
        <div className="container-max flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-medium text-ink-muted transition-colors hover:text-brand-500"
          >
            <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
            Une filiale d&apos;
            <span className="font-bold text-ink">EL-BOMI GROUP</span>
          </Link>
          <a
            href={`tel:${subsidiary.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-ink-muted transition-colors hover:text-brand-500"
          >
            <Phone className="h-3.5 w-3.5 text-brand-500" />
            {subsidiary.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-surface-line/10 bg-surface/90 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-6">
            {/* Logo filiale */}
            <Link href={base} className="group flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-brand-contrast transition-transform duration-300 group-hover:scale-105">
                <IconRenderer name={subsidiary.icon} className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block font-heading text-base font-bold text-ink">EL-BOMI</span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500">
                  {subsidiary.shortName}
                </span>
              </span>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const active =
                  item.href === base ? pathname === base : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active
                        ? 'text-brand-500'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link href={`${base}/contact`} className="btn-brand !px-5 !py-2.5 text-sm">
                Demander un devis
              </Link>
            </div>

            {/* Burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-line/15 text-ink lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Nav mobile */}
        {open && (
          <div className="border-t border-surface-line/10 bg-surface lg:hidden">
            <nav className="container-max flex flex-col gap-1 px-4 py-4 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-500/10 hover:text-brand-500"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/"
                className="mt-2 flex items-center gap-2 rounded-lg border-t border-surface-line/10 px-4 py-3 pt-4 text-sm text-ink-faint"
              >
                <ArrowUpLeft className="h-4 w-4" />
                Retour à EL-BOMI GROUP
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
