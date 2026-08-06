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
    <footer className="relative overflow-hidden border-t border-[#2D7A3E]/10 bg-white">
      {/* Chemin de terre/rivière sinueux décoratif */}
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full opacity-[0.15]" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0 24 Q 180 8 360 24 T 720 24 T 1080 24 T 1440 24" stroke="#2D7A3E" strokeWidth="2" fill="none" strokeDasharray="6 8" />
      </svg>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#2D7A3E]/10 blur-md" />
                <Leaf className="relative h-5 w-5 text-[#2D7A3E]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-[#1B3A2B]">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-[#1B3A2B]/40">Agriculture & Ressources</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#1B3A2B]/45">
              Filiale agricole du groupe EL-BOMI — production, élevage, transformation et ingénierie agricole en Côte d&apos;Ivoire.
            </p>
            <div className="mt-6 space-y-3.5 sm:space-y-2.5">
              <a href="tel:+2252722201115" className="flex items-center gap-2 text-xs text-[#1B3A2B]/40 transition-colors hover:text-[#2D7A3E]">
                <Phone className="h-3.5 w-3.5 text-[#2D7A3E]/60" /> (225) 27 22 20 11 15
              </a>
              <a href="tel:+2250172955323" className="flex items-center gap-2 text-xs text-[#1B3A2B]/40 transition-colors hover:text-[#2D7A3E]">
                <Phone className="h-3.5 w-3.5 text-[#2D7A3E]/60" /> (225) 01 72 95 53 23
              </a>
              <a href="tel:+2250778191752" className="flex items-center gap-2 text-xs text-[#1B3A2B]/40 transition-colors hover:text-[#2D7A3E]">
                <Phone className="h-3.5 w-3.5 text-[#2D7A3E]/60" /> (225) 07 78 19 17 52
              </a>
              <a href="mailto:agriculture@elbomigroup.com" className="flex items-center gap-2 text-xs text-[#1B3A2B]/40 transition-colors hover:text-[#2D7A3E]">
                <Mail className="h-3.5 w-3.5 text-[#2D7A3E]/60" /> agriculture@elbomigroup.com
              </a>
              <div className="flex items-start gap-2 text-xs text-[#1B3A2B]/40">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2D7A3E]/60" /> 27 BP 399 Abj 27, Cocody — Angré 8ème Tranche, Abidjan
              </div>
            </div>
          </div>

          {/* Activités */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B3A2B]/50">Nos activités</h4>
            <ul className="space-y-3.5 sm:space-y-2.5">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-[#1B3A2B]/40 hover:text-[#2D7A3E] transition-colors">
                    <span className="h-px w-3 bg-[#2D7A3E]/25 transition-all group-hover:w-5 group-hover:bg-[#2D7A3E]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B3A2B]/50">Navigation</h4>
            <ul className="space-y-3.5 sm:space-y-2.5">
              {pages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-[#1B3A2B]/40 hover:text-[#2D7A3E] transition-colors">
                    <span className="h-px w-3 bg-[#2D7A3E]/25 transition-all group-hover:w-5 group-hover:bg-[#2D7A3E]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupe */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B3A2B]/50">EL-BOMI HOLDING</h4>
            <p className="mb-4 text-xs leading-relaxed text-[#1B3A2B]/40">
              Groupe multisectoriel ivoirien — construction, énergie, IT, logistique, médical et agriculture.
            </p>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A017] hover:text-[#D4A017]/80 transition-colors">
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-3 border-t border-[#1B3A2B]/[0.06] pt-6 sm:flex-row">
          <p className="text-[11px] text-[#1B3A2B]/30">© {new Date().getFullYear()} EL-BOMI Agriculture & Ressources Naturelles — Tous droits réservés</p>
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-[#2D7A3E]/40">EL-BOMI HOLDING</span>
        </div>
      </div>
    </footer>
  );
}
