import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import IconRenderer from '@/components/IconRenderer';

export const metadata: Metadata = {
  title: 'Contact & Devis',
  description:
    'Contactez EL-BOMI BTP pour votre projet de construction. Devis gratuit sous 48h. Gros œuvre, génie civil, rénovation, aménagement.',
};

const contactInfo = [
  {
    icon: 'MapPin',
    title: 'Adresse',
    lines: ['123 Avenue de la Construction', '75001 Paris, France'],
  },
  {
    icon: 'Phone',
    title: 'Téléphone',
    lines: ['+33 1 23 45 67 89', '+33 6 98 76 54 32'],
  },
  {
    icon: 'Mail',
    title: 'Email',
    lines: ['contact@ebomi-btp.com', 'devis@ebomi-btp.com'],
  },
  {
    icon: 'Clock',
    title: 'Horaires',
    lines: ['Lundi - Vendredi : 7h - 18h', 'Samedi : 8h - 12h'],
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
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=90"
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
                <div key={index} className="glass-card p-5 flex items-start gap-4 group hover:border-accent-500/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 group-hover:bg-accent-500/20 transition-colors">
                    <IconRenderer name={info.icon} className="w-5 h-5 text-accent-400" />
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

              {/* Urgence */}
              <div className="glass-card p-5 border-accent-500/20 bg-accent-500/[0.03]">
                <div className="text-accent-400 text-sm font-semibold mb-1">Urgence chantier ?</div>
                <p className="text-white/50 text-xs">Appelez directement notre ligne dédiée disponible 7j/7 pour les interventions urgentes.</p>
                <div className="mt-3 text-white font-bold text-lg">+33 6 00 00 00 00</div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container-max">
          <div className="rounded-2xl overflow-hidden h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4!2d2.3488!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzIzLjgiTiAywrAyMCc1NS43IkU!5e0!3m2!1sfr!2sfr!4v1"
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
