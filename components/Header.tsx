'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { subsidiaries } from '@/lib/group';
import { groupInfo } from '@/lib/group';
import IconRenderer from './IconRenderer';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/carrieres', label: 'Carrières' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilialesOpen, setIsFilialesOpen] = useState(false);
  const pathname = usePathname();
  const isFilialeActive = pathname.startsWith('/filiales');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsFilialesOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-navy-950/40 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 sm:gap-3">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-lg transition-opacity group-hover:opacity-85">
            <Image src="/EL.png" alt="EL-BOMI HOLDING" fill className="object-contain" sizes="40px" />
          </div>
          <div>
            <span className="block font-heading text-[13px] sm:text-[15px] font-black uppercase tracking-[0.15em] text-white transition-colors group-hover:text-gold-300">
              EL-BOMI
            </span>
            <span className="-mt-1 block text-[7px] sm:text-[8px] font-medium uppercase tracking-[0.4em] text-gold-400/80">
              Holding
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-gold-300'
                  : 'text-white/65 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {/* Filiales dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsFilialesOpen(true)}
            onMouseLeave={() => setIsFilialesOpen(false)}
          >
            <button
              onClick={() => setIsFilialesOpen((v) => !v)}
              className={`relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                isFilialeActive
                  ? 'text-gold-300'
                  : 'text-white/65 hover:bg-white/5 hover:text-white'
              }`}
              aria-expanded={isFilialesOpen}
              aria-haspopup="true"
            >
              Filiales
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  isFilialesOpen ? 'rotate-180' : ''
                }`}
              />
              {isFilialeActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <AnimatePresence>
              {isFilialesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-navy-900/98 p-3 shadow-2xl shadow-navy-950/50 backdrop-blur-xl">
                    {subsidiaries.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/filiales/${sub.slug}`}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-gold-500/10"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/10 transition-colors group-hover:border-gold-500/60">
                          <IconRenderer name={sub.icon} className="h-4 w-4 text-gold-400" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13px] font-semibold tracking-wide text-white transition-colors group-hover:text-gold-300">
                            {sub.shortName}
                          </span>
                          <span className="mt-0.5 block text-[11px] leading-snug tracking-normal text-white/45">
                            {sub.tagline}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-gold-300'
                  : 'text-white/65 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Phone + CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2.5 xl:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/5">
              <Phone className="h-4 w-4 text-gold-400" />
            </span>
            <div className="flex flex-col leading-tight">
              <a href={`tel:${groupInfo.phoneRaw}`} className="text-[12px] font-semibold tracking-wide text-white/80 transition-colors hover:text-gold-300">
                {groupInfo.phone}
              </a>
              <div className="flex items-center gap-1.5">
                <a href={`tel:${groupInfo.phone2Raw}`} className="text-[11px] font-medium tracking-wide text-white/50 transition-colors hover:text-gold-300">
                  {groupInfo.phone2}
                </a>
                <span className="text-white/15">·</span>
                <a href={`tel:${groupInfo.phone3Raw}`} className="text-[11px] font-medium tracking-wide text-white/50 transition-colors hover:text-gold-300">
                  {groupInfo.phone3}
                </a>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-gold-gradient px-5 py-2.5 text-[13px] font-semibold tracking-wide text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/30 md:flex"
          >
            Nous contacter
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center text-white -mr-2"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-navy-900/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-max max-h-[80vh] space-y-1 overflow-y-auto px-4 py-5">
              {navLinks.slice(0, 2).map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium tracking-wide transition-colors ${
                      pathname === link.href
                        ? 'bg-gold-500/10 text-gold-300'
                        : 'text-white/65 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="pt-2"
              >
                <span className="px-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                  Nos filiales
                </span>
                <div className="mt-2 space-y-1">
                  {subsidiaries.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/filiales/${sub.slug}`}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium tracking-wide transition-colors ${
                        pathname === `/filiales/${sub.slug}`
                          ? 'bg-gold-500/10 text-gold-300'
                          : 'text-white/65 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <IconRenderer name={sub.icon} className="h-4 w-4 shrink-0 text-gold-400" />
                      {sub.shortName}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {navLinks.slice(2).map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3.5 text-[15px] font-medium tracking-wide transition-colors ${
                      pathname === link.href
                        ? 'bg-gold-500/10 text-gold-300'
                        : 'text-white/65 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <span className="px-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                  Appelez-nous
                </span>
                <div className="mt-3 space-y-2">
                  <a
                    href={`tel:${groupInfo.phoneRaw}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 text-[15px] font-semibold tracking-wide text-navy-900"
                  >
                    <Phone className="h-5 w-5" />
                    {groupInfo.phone}
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${groupInfo.phone2Raw}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-gold-500/30 px-4 py-2.5 text-[12px] font-medium tracking-wide text-gold-300 transition-colors hover:bg-gold-500/10"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {groupInfo.phone2}
                    </a>
                    <a
                      href={`tel:${groupInfo.phone3Raw}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-gold-500/30 px-4 py-2.5 text-[12px] font-medium tracking-wide text-gold-300 transition-colors hover:bg-gold-500/10"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {groupInfo.phone3}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
