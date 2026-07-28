import { agricultureSite } from '@/lib/sites';
import { getSubsidiary } from '@/lib/group';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact | Agriculture | EL-BOMI GROUP',
  description: 'Contactez EL-BOMI Agriculture pour vos projets agricoles et agroalimentaires.',
};

export default function AgricultureContactPage() {
  const site = agricultureSite;
  const subsidiary = getSubsidiary('agriculture');

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Contact"
        description={site.contactIntro}
        image={site.heroImage}
      />

      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
                Envoyez-nous votre demande
              </h2>
              <p className="mt-4 text-ink-muted">
                Décrivez votre projet agricole ou agroalimentaire. Nous vous proposons une solution
                adaptée et un devis détaillé.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
                Coordonnées
              </h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">Adresse</h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      27 Bp 399 Abj 27
                      <br />
                      Abidjan, Cocody - Angré 8ème Tranche
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">Téléphone</h3>
                    <a
                      href={`tel:${subsidiary?.phone.replace(/[^0-9+]/g, '')}`}
                      className="mt-1 block text-sm text-ink-muted transition-colors hover:text-brand-500"
                    >
                      {subsidiary?.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">Email</h3>
                    <a
                      href={`mailto:${subsidiary?.email}`}
                      className="mt-1 block text-sm text-ink-muted transition-colors hover:text-brand-500"
                    >
                      {subsidiary?.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 surface-card p-6">
                <h3 className="font-semibold text-ink">Horaires</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Lundi - Vendredi : 08h00 - 18h30
                  <br />
                  Samedi & Dimanche : Fermé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
