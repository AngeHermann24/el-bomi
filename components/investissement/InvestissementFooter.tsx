import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Landmark } from 'lucide-react';

const navLinks = [
  { href: '/filiales/investissement-assurance', label: 'Accueil' },
  { href: '/filiales/investissement-assurance/investissement', label: 'Investissement' },
  { href: '/filiales/investissement-assurance/assurance', label: 'Assurance' },
  { href: '/filiales/investissement-assurance/patrimoine', label: 'Patrimoine' },
  { href: '/filiales/investissement-assurance/simulateur', label: 'Simulateur' },
  { href: '/filiales/investissement-assurance/contact', label: 'Contact' },
];

export default function InvestissementFooter() {
  return (
    <footer className="border-t border-[#C9A227]/[0.08] bg-[#070F1C]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A227]/15 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#C9A227]/20 bg-[#C9A227]/[0.04]">
                <Landmark className="h-4 w-4 text-[#E8C766]" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block font-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
                  EL-BOMI GROUP
                </span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C9A227]/60">
                  Investissement &amp; Assurance
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              Conseil en investissement, gestion d&apos;actifs, produits d&apos;assurance et ingénierie patrimoniale. Protéger et faire fructifier votre capital en Côte d&apos;Ivoire.
            </p>

            {/* Mentions légales */}
            <div className="mt-6 rounded-xl border border-white/[0.05] bg-white/[0.01] p-4">
              <p className="text-[11px] leading-relaxed text-white/25">
                EL-BOMI Investissement &amp; Assurance est une filiale du groupe EL-BOMI GROUP,
                holding ivoirien. Les simulations présentées sont à titre indicatif et non contractuel.
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] text-white/30 transition-all hover:border-[#C9A227]/30 hover:text-[#E8C766]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A227]/50">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-white/40 transition-colors hover:text-[#E8C766]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A227]/50">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]/40" strokeWidth={1.5} />
                <span className="text-[13px] leading-relaxed text-white/40">
                  27 Bp 399 Abj 27<br />
                  Abidjan, Cocody - Angré 8ème Tranche
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#C9A227]/40" strokeWidth={1.5} />
                <a href="tel:+2252722201115" className="text-[13px] text-white/40 hover:text-[#E8C766] transition-colors">
                  +225 27 22 20 11 15
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#C9A227]/40" strokeWidth={1.5} />
                <a href="mailto:investissement@elbomigroup.com" className="text-[13px] text-white/40 hover:text-[#E8C766] transition-colors">
                  investissement@elbomigroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} EL-BOMI GROUP. Tous droits réservés.
          </p>
          <Link href="/" className="text-[11px] text-white/20 hover:text-[#E8C766]/60 transition-colors">
            ← Retour au site du Groupe
          </Link>
        </div>
      </div>
    </footer>
  );
}
