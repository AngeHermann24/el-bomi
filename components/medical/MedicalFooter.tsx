'use client';

import Link from 'next/link';
import { HeartPulse, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const activites = [
  { label: 'Équipements & dispositifs médicaux', href: '/filiales/medical/activites' },
  { label: 'Centres d\'hémodialyse', href: '/filiales/medical/centres' },
  { label: 'Produits pharmaceutiques', href: '/filiales/medical/activites' },
  { label: 'Matériel biomédical / dentaire / labo', href: '/filiales/medical/activites' },
  { label: 'Construction de cliniques', href: '/filiales/medical/activites' },
];

const pages = [
  { label: 'Accueil', href: '/filiales/medical' },
  { label: 'Nos activités', href: '/filiales/medical/activites' },
  { label: 'Nos centres', href: '/filiales/medical/centres' },
  { label: 'Engagement qualité', href: '/filiales/medical/qualite' },
  { label: 'Contact', href: '/filiales/medical/contact' },
];

export default function MedicalFooter() {
  return (
    <footer className="border-t border-[#0B1E3D]/6 bg-[#F7F7F5]">
      {/* Accent marine top */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#0B1E3D]/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4A7C7C]/20 bg-[#4A7C7C]/8">
                <HeartPulse className="h-4 w-4 text-[#4A7C7C]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-[#0B1E3D]">EL-BOMI</p>
                <p className="font-heading text-[10px] uppercase tracking-widest text-[#0B1E3D]/30">Medical Distribution</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#0B1E3D]/45">
              Filiale santé du groupe EL-BOMI — équipements médicaux, hémodialyse, pharma et construction de cliniques en Côte d&apos;Ivoire.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="tel:+22527000000" className="flex items-center gap-2 text-xs text-[#0B1E3D]/38 hover:text-[#0B1E3D] transition-colors">
                <Phone className="h-3.5 w-3.5 text-[#C9A227]/60" /> +225 27 00 00 00
              </a>
              <a href="mailto:medical@el-bomi.com" className="flex items-center gap-2 text-xs text-[#0B1E3D]/38 hover:text-[#0B1E3D] transition-colors">
                <Mail className="h-3.5 w-3.5 text-[#C9A227]/60" /> medical@el-bomi.com
              </a>
              <div className="flex items-start gap-2 text-xs text-[#0B1E3D]/38">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A227]/60" /> Abidjan, Cocody — Côte d&apos;Ivoire
              </div>
            </div>
          </div>

          {/* Activités */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1E3D]/35">Activités</h4>
            <ul className="space-y-2.5">
              {activites.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-2 text-xs text-[#0B1E3D]/38 hover:text-[#0B1E3D] transition-colors">
                    <span className="h-px w-3 bg-[#C9A227]/35 transition-all group-hover:w-5 group-hover:bg-[#C9A227]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1E3D]/35">Navigation</h4>
            <ul className="space-y-2.5">
              {pages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-2 text-xs text-[#0B1E3D]/38 hover:text-[#0B1E3D] transition-colors">
                    <span className="h-px w-3 bg-[#C9A227]/35 transition-all group-hover:w-5 group-hover:bg-[#C9A227]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupe */}
          <div>
            <h4 className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1E3D]/35">EL-BOMI GROUP</h4>
            <p className="mb-4 text-xs leading-relaxed text-[#0B1E3D]/38">
              Groupe multisectoriel ivoirien engagé dans la santé, l&apos;énergie, la logistique, l&apos;IT et la construction.
            </p>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1E3D]/45 hover:text-[#0B1E3D] transition-colors">
              Voir le groupe <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            {/* Certification */}
            <div className="mt-5 rounded-xl border border-[#4A7C7C]/15 bg-[#4A7C7C]/[0.04] px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#4A7C7C]/60">Qualité certifiée</p>
              <p className="mt-1 text-xs text-[#0B1E3D]/38">ISO 9001 · Normes OMS · MSDS CI</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#0B1E3D]/6 pt-6 sm:flex-row">
          <p className="text-[11px] text-[#0B1E3D]/28">© {new Date().getFullYear()} EL-BOMI Medical Distribution — Tous droits réservés</p>
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-[#0B1E3D]/22">EL-BOMI GROUP</span>
        </div>
      </div>
    </footer>
  );
}
