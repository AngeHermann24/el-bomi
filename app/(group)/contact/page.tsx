import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import IconRenderer from '@/components/IconRenderer';
import { subsidiaries, groupInfo } from '@/lib/group';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez EL-BOMI HOLDING à Abidjan. Un interlocuteur par filiale : construction, énergie, télécoms, logistique, médical, agriculture, immobilier et investissement & assurance.',
};

const contactInfo = [
  {
    icon: 'MapPin',
    title: 'Adresse',
    lines: ['27 Bp 399 Abj 27', 'Abidjan, Cocody - Angré 8ème Tranche'],
  },
  {
    icon: 'Phone',
    title: 'Téléphone',
    lines: ['(225) 27 22 20 11 15', '(225) 01 72 95 53 23', '(225) 07 78 19 17 52'],
  },
  {
    icon: 'Mail',
    title: 'Email',
    lines: ['contact@elbomigroup.com'],
  },
  {
    icon: 'Clock',
    title: 'Horaires',
    lines: ['Lundi - Vendredi : 08h00 - 18h30', 'Samedi & Dimanche : Fermé'],
  },
];

const faqs = [
  {
    question: 'Comment obtenir un devis ?',
    answer: 'Remplissez le formulaire ci-dessus ou appelez-nous. Nous vous recontactons sous 24h avec une première estimation.',
  },
  {
    question: 'Quels sont vos délais d\'intervention ?',
    answer: 'En fonction de la complexité du projet, nous mobilisons nos équipes entre 2 et 4 semaines après validation du devis.',
  },
  {
    question: 'Intervenez-vous en dehors de Paris ?',
    answer: 'Oui, nous intervenons dans toute la France métropolitaine. Notre réseau couvre 12 régions.',
  },
  {
    question: 'Proposez-vous des garanties ?',
    answer: 'Tous nos ouvrages sont couverts par la garantie décennale, la garantie de parfait achèvement et une assurance RC Pro.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Parlons de votre projet"
        title="Contactez-nous"
        image="/images/construction-hero.jpg"
      />

      <section className="section-padding" id="contact-form">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                  Nos coordonnées
                </h2>
                <p className="text-white/50">
                  N&apos;hésitez pas à nous contacter par le moyen qui vous convient le mieux.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card group flex items-start gap-4 p-5 transition-colors hover:border-gold-500/25">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
                    <IconRenderer name={info.icon} className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-sm mb-1">
                      {info.title}
                    </h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-white/50 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Devis */}
              <div className="glass-card border-gold-500/20 bg-gold-500/[0.04] p-5">
                <div className="mb-1 text-sm font-semibold text-gold-300">Besoin d&apos;un devis ?</div>
                <p className="text-xs text-white/50">
                  Appelez-nous directement pour discuter de votre projet.
                </p>
                <a
                  href={`tel:${groupInfo.phoneRaw}`}
                  className="mt-3 block text-lg font-bold text-white transition-colors hover:text-gold-300"
                >
                  {groupInfo.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts par filiale */}
      <section className="section-light py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Interlocuteurs
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-navy-900 md:text-4xl">
              Contacter une filiale
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((sub) => (
              <Link
                key={sub.slug}
                href={`/filiales/${sub.slug}`}
                className="group rounded-xl border border-navy-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/10">
                  <IconRenderer name={sub.icon} className="h-5 w-5 text-gold-600" />
                </div>
                <h3 className="mb-2 font-heading text-base font-bold text-navy-900 transition-colors group-hover:text-gold-600">
                  {sub.shortName}
                </h3>
                <p className="text-sm text-navy-900/50">{sub.email}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="container-max">
          <div className="rounded-2xl overflow-hidden h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-3.9627!3d5.3599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnMzUuNiJOIDPCsDU3JzQ1LjciVw!5e0!3m2!1sfr!2sci!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation EL-BOMI"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-anthracite-900/30">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white">
              Questions <span className="text-gradient">fréquentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6 hover:border-white/20 transition-colors">
                <h3 className="font-heading font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
