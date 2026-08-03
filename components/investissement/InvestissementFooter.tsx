import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

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
    <footer className="border-t border-white/[0.08] bg-navy-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="mb-3">
              <span className="block font-heading text-base font-bold uppercase tracking-widest text-white">
                EL-BOMI GROUP
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-gold-400/80 mt-0.5">
                Investissement &amp; Assurance
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              Conseil en investissement, gestion d&apos;actifs, produits d&apos;assurance et ingénierie patrimoniale en Côte d&apos;Ivoire.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-gold-500/40 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/70">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/70">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold-400/60 mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">
                  27 Bp 399 Abj 27<br />
                  Abidjan, Cocody - Angré 8ème Tranche
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-400/60 shrink-0" />
                <a href="tel:+2252722201115" className="text-sm text-white/50 hover:text-white transition-colors">
                  +225 27 22 20 11 15
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold-400/60 shrink-0" />
                <a href="mailto:investissement@elbomigroup.com" className="text-sm text-white/50 hover:text-white transition-colors">
                  investissement@elbomigroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} EL-BOMI GROUP. Tous droits réservés.
          </p>
          <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            ← Retour au Groupe
          </Link>
        </div>
      </div>
    </footer>
  );
}
