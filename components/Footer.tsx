'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Linkedin, Facebook, Instagram } from 'lucide-react';
import { subsidiaries, groupInfo } from '@/lib/group';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-navy-950">
      {/* Decorative gradient */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Ambient background effects */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold-500/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-56 w-56 rounded-full bg-gold-400/[0.04] blur-[80px]" />

      <div className="container-max section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image src="/EL.png" alt="EL-BOMI HOLDING" fill className="object-contain" sizes="40px" />
              </div>
              <div>
                <span className="block font-heading text-[13px] font-black uppercase tracking-[0.2em] text-white">EL-BOMI</span>
                <span className="-mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                  Group
                </span>
              </div>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              Holding structuré en huit filiales sectorielles. {groupInfo.baseline}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-gold-500/30 hover:bg-gold-500/20 hover:text-gold-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'À Propos', href: '/a-propos' },
                { label: 'Actualités', href: '/actualites' },
                { label: 'Carrières', href: '/carrieres' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
                  >
                    <ArrowUpRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Filiales */}
          <div>
            <h4 className="mb-6 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Nos filiales
            </h4>
            <ul className="space-y-3">
              {subsidiaries.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={`/filiales/${sub.slug}`}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-gold-300"
                  >
                    <ArrowUpRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    <span>{sub.shortName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span className="text-sm text-white/50">
                  {groupInfo.address}
                  <br />
                  {groupInfo.addressDetail}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={`tel:${groupInfo.phoneRaw}`}
                  className="text-sm text-white/50 transition-colors hover:text-gold-300"
                >
                  {groupInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={`mailto:${groupInfo.email}`}
                  className="text-sm text-white/50 transition-colors hover:text-gold-300"
                >
                  {groupInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-500" />
                <span className="text-sm text-white/50">{groupInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} EL-BOMI HOLDING. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
