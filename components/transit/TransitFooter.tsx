'use client';

import Link from 'next/link';
import { Truck, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

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
    <footer className="relative overflow-hidden border-t border-gold-500/8 bg-[#060f1f]">
      {/* Route ondulée décorative */}
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-10 w-full opacity-[0.07]" viewBox="0 0 1440 40" preserveAspectRatio="none">
        <path d="M0 20 Q 180 5 360 20 T 720 20 T 1080 20 T 1440 20" stroke="#C9A227" strokeWidth="1.5" fill="none" strokeDasharray="8 5" />
      </svg>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/8">
                <div className="absolute inset-0 rounded-lg bg-gold-500/10 blur-md" />
                <Truck className="relative h-4 w-4 text-gold-400" />
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-white/25">Transit & Logistique</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/28">
              Filiale logistique du groupe EL-BOMI — transit douanier, transport multimodal, entreposage et distribution en Afrique de l&apos;Ouest.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="tel:+22527000000" className="flex items-center gap-2 text-xs text-white/22 hover:text-gold-400 transition-colors">
                <Phone className="h-3.5 w-3.5 text-gold-500/35" /> +225 27 00 00 00
              </a>
              <a href="mailto:transit@el-bomi.com" className="flex items-center gap-2 text-xs text-white/22 hover:text-gold-400 transition-colors">
                <Mail className="h-3.5 w-3.5 text-gold-500/35" /> transit@el-bomi.com
              </a>
              <div className="flex items-start gap-2 text-xs text-white/22">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500/35" /> Abidjan, Port de Vridi — Côte d&apos;Ivoire
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">Services</h4>
            <ul className="space-y-2.5">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/22 hover:text-gold-400 transition-colors">
                    <span className="h-px w-3 bg-gold-500/25 transition-all group-hover:w-5 group-hover:bg-gold-400" />
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
                  <Link href={l.href} className="group flex items-center gap-1.5 text-xs text-white/22 hover:text-gold-400 transition-colors">
                    <span className="h-px w-3 bg-gold-500/25 transition-all group-hover:w-5 group-hover:bg-gold-400" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupe */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">EL-BOMI GROUP</h4>
            <p className="mb-4 text-xs leading-relaxed text-white/22">
              Groupe multisectoriel ivoirien combinant logistique, énergie, IT et construction pour des solutions intégrées.
            </p>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/55 hover:text-gold-400 transition-colors">
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-6 sm:flex-row">
          <p className="text-[11px] text-white/14">© {new Date().getFullYear()} EL-BOMI Transit, Logistics & Transport — Tous droits réservés</p>
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-gold-500/25">EL-BOMI GROUP</span>
        </div>
      </div>
    </footer>
  );
}
