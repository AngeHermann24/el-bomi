'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

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
    <footer className="relative overflow-hidden border-t border-navy-900/10 bg-white">
      {/* Grille de fond */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `linear-gradient(rgb(11 30 61) 1px, transparent 1px), linear-gradient(90deg, rgb(11 30 61) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}
      />

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-lg bg-cyan-accent/8 blur-md" />
                <Image src="/info.png" alt="EL-BOMI IT" fill className="relative object-contain" />
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-navy-900/40">Informatique & Télécoms</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-900/45">
              Filiale IT du groupe EL-BOMI — réseaux, cybersécurité, cloud, télécoms et solutions digitales pour les entreprises et institutions.
            </p>
            <div className="mt-6 space-y-3.5 sm:space-y-2.5">
              <a href="tel:+2252722201115" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-gold-600">
                <Phone className="h-3.5 w-3.5 text-gold-500/60" /> (225) 27 22 20 11 15
              </a>
              <a href="tel:+2250172955323" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-gold-600">
                <Phone className="h-3.5 w-3.5 text-gold-500/60" /> (225) 01 72 95 53 23
              </a>
              <a href="tel:+2250778191752" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-gold-600">
                <Phone className="h-3.5 w-3.5 text-gold-500/60" /> (225) 07 78 19 17 52
              </a>
              <a href="mailto:it@elbomigroup.com" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-gold-600">
                <Mail className="h-3.5 w-3.5 text-gold-500/60" /> it@elbomigroup.com
              </a>
              <div className="flex items-start gap-2 text-xs text-navy-900/40">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500/60" /> 27 BP 399 Abj 27, Cocody - Angré 8ème Tranche, Abidjan
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-navy-900/50">Solutions</h4>
            <ul className="space-y-3.5 sm:space-y-2.5">
              {solutions.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-navy-900/40 transition-colors hover:text-gold-600">
                    <span className="h-px w-3 bg-gold-500/40 transition-all group-hover:w-5 group-hover:bg-gold-600" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-navy-900/50">Navigation</h4>
            <ul className="space-y-3.5 sm:space-y-2.5">
              {pages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-navy-900/40 transition-colors hover:text-gold-600">
                    <span className="h-px w-3 bg-gold-500/40 transition-all group-hover:w-5 group-hover:bg-gold-600" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupe */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-navy-900/50">EL-BOMI HOLDING</h4>
            <p className="mb-4 text-xs leading-relaxed text-navy-900/40">
              Groupe multisectoriel ivoirien — énergie, construction, IT & télécoms, transit et agriculture.
            </p>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600/70 transition-colors hover:text-gold-600">
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-3 border-t border-navy-900/[0.06] pt-6 sm:flex-row">
          <p className="text-[11px] text-navy-900/30">© {new Date().getFullYear()} EL-BOMI Informatique & Télécoms — Tous droits réservés</p>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-navy-900/25">Membre de</span>
            <span className="ml-1 font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-gold-500/50">EL-BOMI HOLDING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
