'use client';

import Link from 'next/link';
import { Zap, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const links = {
  solutions: [
    { label: 'Électricité générale BT', href: '/filiales/energie/solutions' },
    { label: 'Réseaux BT/HTA', href: '/filiales/energie/solutions' },
    { label: 'Électrification rurale', href: '/filiales/energie/solutions' },
    { label: 'Solaire photovoltaïque', href: '/filiales/energie/solutions' },
    { label: 'Automatismes industriels', href: '/filiales/energie/solutions' },
  ],
  pages: [
    { label: 'Accueil', href: '/filiales/energie' },
    { label: 'Nos solutions', href: '/filiales/energie/solutions' },
    { label: 'Impact rural', href: '/filiales/energie/impact' },
    { label: 'Projets', href: '/filiales/energie/projets' },
    { label: 'Contact', href: '/filiales/energie/contact' },
  ],
};

export default function EnergieFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-500/10 bg-[#060e1c]">
      {/* Circuit décoratif en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1200 300" className="w-full h-full" fill="none">
          <path d="M0,150 L200,150 L200,80 L400,80 L400,200 L600,200 L600,60 L800,60 L800,180 L1000,180 L1000,100 L1200,100"
            stroke="#C9A227" strokeWidth="1" />
          <path d="M0,80 L150,80 L150,200 L350,200 L350,120 L550,120 L550,220 L750,220 L750,90 L950,90 L950,210 L1200,210"
            stroke="#E8C766" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10">
                <div className="absolute inset-0 rounded-full bg-gold-500/15 blur-md" />
                <Zap className="relative h-4 w-4 text-gold-400" fill="currentColor" />
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-white/30">Énergie & Électricité</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/35">
              Filiale énergie du groupe EL-BOMI, spécialisée dans l&apos;électricité, les réseaux HTA/BT et le solaire photovoltaïque.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="tel:+22527000000" className="flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-gold-400">
                <Phone className="h-3.5 w-3.5 text-gold-500/50" />
                +225 27 00 00 00
              </a>
              <a href="mailto:energie@el-bomi.com" className="flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-gold-400">
                <Mail className="h-3.5 w-3.5 text-gold-500/50" />
                energie@el-bomi.com
              </a>
              <div className="flex items-start gap-2 text-xs text-white/30">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500/50" />
                Abidjan, Côte d&apos;Ivoire
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              Nos solutions
            </h4>
            <ul className="space-y-2.5">
              {links.solutions.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-gold-400">
                    <span className="h-px w-3 bg-gold-500/30 transition-all group-hover:w-5 group-hover:bg-gold-400" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {links.pages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-gold-400">
                    <span className="h-px w-3 bg-gold-500/30 transition-all group-hover:w-5 group-hover:bg-gold-400" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupe */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              EL-BOMI GROUP
            </h4>
            <p className="mb-4 text-xs leading-relaxed text-white/30">
              Groupe multisectoriel ivoirien présent dans l&apos;énergie, la construction, le transit et l&apos;agriculture.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/70 transition-colors hover:text-gold-400"
            >
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 sm:flex-row">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} EL-BOMI Énergie — Tous droits réservés
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-white/15">Membre de</span>
            <span className="ml-1 font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-gold-500/40">
              EL-BOMI GROUP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
