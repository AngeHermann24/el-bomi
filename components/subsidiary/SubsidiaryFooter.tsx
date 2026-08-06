import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import IconRenderer from '@/components/IconRenderer';
import { subsidiaries, groupInfo } from '@/lib/group';
import type { Subsidiary } from '@/types';

interface SubsidiaryFooterProps {
  subsidiary: Subsidiary;
}

export default function SubsidiaryFooter({ subsidiary }: SubsidiaryFooterProps) {
  const base = `/filiales/${subsidiary.slug}`;
  const siblings = subsidiaries.filter((s) => s.slug !== subsidiary.slug);

  return (
    <footer className="border-t border-surface-line/10 bg-surface-alt">
      <div className="container-max px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Identité filiale */}
          <div>
            <Link href={base} className="mb-5 inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-brand-contrast">
                <IconRenderer name={subsidiary.icon} className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block font-heading text-base font-bold text-ink">EL-BOMI</span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500">
                  {subsidiary.shortName}
                </span>
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-ink-muted">{subsidiary.summary}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-500 transition-opacity hover:opacity-70"
            >
              Voir EL-BOMI HOLDING
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-ink">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: base },
                { label: 'Activités', href: `${base}/activites` },
                { label: 'Réalisations', href: `${base}/realisations` },
                { label: 'Contact', href: `${base}/contact` },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-brand-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Autres filiales */}
          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-ink">
              Autres filiales
            </h4>
            <ul className="space-y-3">
              {siblings.map((sib) => (
                <li key={sib.slug}>
                  <Link
                    href={`/filiales/${sib.slug}`}
                    className="text-sm text-ink-muted transition-colors hover:text-brand-500"
                  >
                    {sib.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-ink">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-sm text-ink-muted">
                  {groupInfo.address}
                  <br />
                  {groupInfo.addressDetail}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={`tel:${subsidiary.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm text-ink-muted transition-colors hover:text-brand-500"
                >
                  {subsidiary.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${subsidiary.email}`}
                  className="text-sm text-ink-muted transition-colors hover:text-brand-500"
                >
                  {subsidiary.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-line/10 pt-8 md:flex-row">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} {subsidiary.name} — EL-BOMI HOLDING.
          </p>
          <p className="text-sm text-ink-faint">{groupInfo.hours}</p>
        </div>
      </div>
    </footer>
  );
}
