'use client';

import Link from 'next/link';
import { Cpu, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const solutions = [
  { label: 'Réseaux & Infrastructures IT', href: '/filiales/informatique-telecoms/solutions' },
  { label: 'Télécoms & Fibre optique', href: '/filiales/informatique-telecoms/solutions' },
  { label: 'Cybersécurité & Vidéosurveillance', href: '/filiales/informatique-telecoms/cybersecurite' },
  { label: 'Cloud & Data Centers', href: '/filiales/informatique-telecoms/solutions' },
  { label: 'Développement logiciel', href: '/filiales/informatique-telecoms/solutions' },
  { label: 'Smart Building & Domotique', href: '/filiales/informatique-telecoms/solutions' },
];

const pages = [
  { label: 'Accueil', href: '/filiales/informatique-telecoms' },
  { label: 'Solutions', href: '/filiales/informatique-telecoms/solutions' },
  { label: 'Cybersécurité', href: '/filiales/informatique-telecoms/cybersecurite' },
  { label: 'Projets', href: '/filiales/informatique-telecoms/projets' },
  { label: 'Contact', href: '/filiales/informatique-telecoms/contact' },
];

export default function InforFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-500/8 bg-[#060f1f]">
      {/* Grille de fond */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `linear-gradient(rgb(201 162 39) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}
      />

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/8">
                <div className="absolute inset-0 rounded-lg bg-gold-500/10 blur-md" />
                <Cpu className="relative h-4 w-4 text-gold-400" />
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-white/25">Informatique & Télécoms</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/30">
              Filiale IT du groupe EL-BOMI — réseaux, cybersécurité, cloud, télécoms et solutions digitales pour les entreprises et institutions.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="tel:+22527000000" className="flex items-center gap-2 text-xs text-white/25 transition-colors hover:text-gold-400">
                <Phone className="h-3.5 w-3.5 text-gold-500/40" /> +225 27 00 00 00
              </a>
              <a href="mailto:it@el-bomi.com" className="flex items-center gap-2 text-xs text-white/25 transition-colors hover:text-gold-400">
                <Mail className="h-3.5 w-3.5 text-gold-500/40" /> it@el-bomi.com
              </a>
              <div className="flex items-start gap-2 text-xs text-white/25">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500/40" /> Abidjan, Côte d&apos;Ivoire
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/25 transition-colors hover:text-gold-400">
                    <span className="h-px w-3 bg-gold-500/25 transition-all group-hover:w-5 group-hover:bg-gold-400" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Navigation</h4>
            <ul className="space-y-2.5">
              {pages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/25 transition-colors hover:text-gold-400">
                    <span className="h-px w-3 bg-gold-500/25 transition-all group-hover:w-5 group-hover:bg-gold-400" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupe */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">EL-BOMI GROUP</h4>
            <p className="mb-4 text-xs leading-relaxed text-white/25">
              Groupe multisectoriel ivoirien — énergie, construction, IT & télécoms, transit et agriculture.
            </p>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/60 transition-colors hover:text-gold-400">
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-6 sm:flex-row">
          <p className="text-[11px] text-white/15">© {new Date().getFullYear()} EL-BOMI Informatique & Télécoms — Tous droits réservés</p>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-white/12">Membre de</span>
            <span className="ml-1 font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-gold-500/30">EL-BOMI GROUP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
