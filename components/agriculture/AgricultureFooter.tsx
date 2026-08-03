'use client';

import Link from 'next/link';
import { Leaf, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const services = [
  { label: 'Production agricole', href: '/filiales/agriculture/activites' },
  { label: 'Élevage & Aquaculture', href: '/filiales/agriculture/activites' },
  { label: 'Transformation & Commercialisation', href: '/filiales/agriculture/activites' },
  { label: 'Intrants agricoles', href: '/filiales/agriculture/activites' },
  { label: 'Hydraulique agricole', href: '/filiales/agriculture/activites' },
  { label: 'Conseil & Ingénierie', href: '/filiales/agriculture/activites' },
];

const pages = [
  { label: 'Accueil', href: '/filiales/agriculture' },
  { label: 'Nos Activités', href: '/filiales/agriculture/activites' },
  { label: 'Nos Exploitations', href: '/filiales/agriculture/exploitations' },
  { label: 'Contact', href: '/filiales/agriculture/contact' },
];

export default function AgricultureFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#C9A227]/8 bg-[#060f1f]">
      {/* Chemin de terre/rivière sinueux décoratif */}
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full opacity-[0.06]" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0 24 Q 180 8 360 24 T 720 24 T 1080 24 T 1440 24" stroke="#C9A227" strokeWidth="2" fill="none" strokeDasharray="6 8" />
      </svg>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[#C9A227]/8">
                <Leaf className="relative h-4 w-4 text-[#C9A227]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A227]">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-white/25">Agriculture & Ressources</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/30">
              Filiale agricole du groupe EL-BOMI — production, élevage, transformation et ingénierie agricole en Côte d&apos;Ivoire.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="tel:+2252722201115" className="flex items-center gap-2 text-xs text-white/25 hover:text-[#C9A227] transition-colors">
                <Phone className="h-3.5 w-3.5 text-[#C9A227]/40" /> (225) 27 22 20 11 15
              </a>
              <a href="mailto:agriculture@elbomigroup.com" className="flex items-center gap-2 text-xs text-white/25 hover:text-[#C9A227] transition-colors">
                <Mail className="h-3.5 w-3.5 text-[#C9A227]/40" /> agriculture@elbomigroup.com
              </a>
              <div className="flex items-start gap-2 text-xs text-white/25">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A227]/40" /> Abidjan, Cocody — Côte d&apos;Ivoire
              </div>
            </div>
          </div>

          {/* Activités */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">Nos activités</h4>
            <ul className="space-y-2.5">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/25 hover:text-[#C9A227] transition-colors">
                    <span className="h-px w-3 bg-[#C9A227]/25 transition-all group-hover:w-5 group-hover:bg-[#C9A227]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">Navigation</h4>
            <ul className="space-y-2.5">
              {pages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/25 hover:text-[#C9A227] transition-colors">
                    <span className="h-px w-3 bg-[#C9A227]/25 transition-all group-hover:w-5 group-hover:bg-[#C9A227]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupe */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">EL-BOMI GROUP</h4>
            <p className="mb-4 text-xs leading-relaxed text-white/25">
              Groupe multisectoriel ivoirien — construction, énergie, IT, logistique, médical et agriculture.
            </p>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A227]/60 hover:text-[#C9A227] transition-colors">
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-6 sm:flex-row">
          <p className="text-[11px] text-white/15">© {new Date().getFullYear()} EL-BOMI Agriculture & Ressources Naturelles — Tous droits réservés</p>
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A227]/25">EL-BOMI GROUP</span>
        </div>
      </div>
    </footer>
  );
}
