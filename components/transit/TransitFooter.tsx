'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  { label: 'Transit international & Douane', href: '/filiales/transit-logistique/services' },
  { label: 'Transport multimodal & Affrètement', href: '/filiales/transit-logistique/services' },
  { label: 'Entreposage & Gestion des stocks', href: '/filiales/transit-logistique/services' },
  { label: 'Distribution dernier kilomètre', href: '/filiales/transit-logistique/services' },
  { label: 'Tracking & Géolocalisation', href: '/filiales/transit-logistique/suivi' },
  { label: 'Logistique 4PL', href: '/filiales/transit-logistique/services' },
];

const pages = [
  { label: 'Accueil', href: '/filiales/transit-logistique' },
  { label: 'Nos services', href: '/filiales/transit-logistique/services' },
  { label: 'Réseau & Couverture', href: '/filiales/transit-logistique/reseau' },
  { label: 'Suivi de cargaison', href: '/filiales/transit-logistique/suivi' },
  { label: 'Contact', href: '/filiales/transit-logistique/contact' },
];

export default function TransitFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-navy-900/8 bg-white">
      {/* Route ondulée décorative */}
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-10 w-full opacity-[0.15]" viewBox="0 0 1440 40" preserveAspectRatio="none">
        <path d="M0 20 Q 180 5 360 20 T 720 20 T 1080 20 T 1440 20" stroke="#E85D04" strokeWidth="1.5" fill="none" strokeDasharray="8 5" />
      </svg>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-[#E85D04]/10 blur-md" />
                <div className="relative flex h-10 w-10 items-center justify-center">
                  <Image src="/transite.png" alt="EL-BOMI Transit" width={40} height={40} className="h-full w-full object-contain" />
                </div>
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-navy-900/40">Transit & Logistique</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-900/45">
              Filiale logistique du groupe EL-BOMI — transit douanier, transport multimodal, entreposage et distribution en Afrique de l&apos;Ouest.
            </p>
            <div className="mt-6 space-y-3.5 sm:space-y-2.5">
              <a href="tel:+2252722201115" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-[#E85D04]">
                <Phone className="h-3.5 w-3.5 text-[#E85D04]/60" /> (225) 27 22 20 11 15
              </a>
              <a href="tel:+2250172955323" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-[#E85D04]">
                <Phone className="h-3.5 w-3.5 text-[#E85D04]/60" /> (225) 01 72 95 53 23
              </a>
              <a href="tel:+2250778191752" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-[#E85D04]">
                <Phone className="h-3.5 w-3.5 text-[#E85D04]/60" /> (225) 07 78 19 17 52
              </a>
              <a href="mailto:logistics@elbomigroup.com" className="flex items-center gap-2 text-xs text-navy-900/40 transition-colors hover:text-[#E85D04]">
                <Mail className="h-3.5 w-3.5 text-[#E85D04]/60" /> logistics@elbomigroup.com
              </a>
              <div className="flex items-start gap-2 text-xs text-navy-900/40">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E85D04]/60" /> 27 BP 399 Abj 27, Cocody - Angré 8ème Tranche, Abidjan
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-navy-900/50">Services</h4>
            <ul className="space-y-3.5 sm:space-y-2.5">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-navy-900/40 hover:text-[#E85D04] transition-colors">
                    <span className="h-px w-3 bg-[#E85D04]/25 transition-all group-hover:w-5 group-hover:bg-[#E85D04]" />
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
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-navy-900/40 hover:text-[#E85D04] transition-colors">
                    <span className="h-px w-3 bg-[#E85D04]/25 transition-all group-hover:w-5 group-hover:bg-[#E85D04]" />
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
              Groupe multisectoriel ivoirien combinant logistique, énergie, IT et construction pour des solutions intégrées.
            </p>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D7377] hover:text-[#0D7377]/80 transition-colors">
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-3 border-t border-navy-900/[0.06] pt-6 sm:flex-row">
          <p className="text-[11px] text-navy-900/30">© {new Date().getFullYear()} EL-BOMI Transit, Logistics & Transport — Tous droits réservés</p>
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-[#E85D04]/40">EL-BOMI HOLDING</span>
        </div>
      </div>
    </footer>
  );
}
