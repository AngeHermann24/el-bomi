'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const expertises = [
  'Bâtiment & Génie Civil',
  'Travaux Publics & Voiries',
  'Terrassement & SIG',
  'Matériaux & Béton préfabriqué',
  'Hydraulique & Assainissement',
  'Électricité & Éclairage public',
  'Aménagement Urbain & VRD',
  'Autre',
];

const inputClass =
  'w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 transition-all focus:border-rust-500/50 focus:bg-white/[0.05] focus:outline-none';

const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50';

export default function ConstructionContactClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: '', email: '', tel: '', expertise: '', budget: '', message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthracite-950 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400"
          >
            Devis gratuit
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl font-bold uppercase text-white md:text-5xl"
          >
            Parlons de votre projet
          </motion.h1>
          <div className="mt-3 h-0.5 w-16 bg-rust-500/50" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-white/55"
          >
            Décrivez votre projet et nous vous revenons sous 48h avec une première estimation.
          </motion.p>
        </div>
      </section>

      {/* Formulaire + coordonnées */}
      <section className="bg-anthracite-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]">

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-rust-500/20 bg-rust-500/5 py-12 sm:py-20 text-center">
                  <CheckCircle className="mb-5 h-14 w-14 text-rust-400" />
                  <h2 className="font-heading text-2xl font-bold uppercase text-white">
                    Demande reçue !
                  </h2>
                  <p className="mt-3 max-w-sm text-white/50">
                    Merci pour votre message. Notre équipe vous contactera sous 48h ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Nom complet *</label>
                      <input
                        name="nom" required value={form.nom} onChange={handleChange}
                        type="text" placeholder="Jean Kouassi"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input
                        name="email" required value={form.email} onChange={handleChange}
                        type="email" placeholder="jean@exemple.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Téléphone</label>
                      <input
                        name="tel" value={form.tel} onChange={handleChange}
                        type="tel" placeholder="+225 07 XX XX XX XX"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Budget estimé</label>
                      <input
                        name="budget" value={form.budget} onChange={handleChange}
                        type="text" placeholder="Ex : 50 millions FCFA"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Type d&apos;expertise *</label>
                    <select
                      name="expertise" required value={form.expertise} onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>Sélectionnez un corps de métier</option>
                      {expertises.map((e) => (
                        <option key={e} value={e} className="bg-anthracite-900">{e}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Description du projet *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange}
                      rows={5}
                      placeholder="Décrivez votre projet : localisation, superficie, délais souhaités, contraintes particulières..."
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rust-500 py-4 font-semibold text-anthracite-900 transition-all hover:-translate-y-0.5 hover:bg-rust-400 hover:shadow-xl hover:shadow-rust-500/25"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer ma demande de devis
                  </button>
                  <p className="text-center text-xs text-white/25">Réponse garantie sous 48h ouvrées</p>
                </form>
              )}
            </motion.div>

            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
                <h3 className="mb-6 font-heading text-base font-bold uppercase text-white">
                  Nos coordonnées
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: 'Adresse',
                      value: '27 Bp 399 Abj 27\nAbidjan, Cocody – Angré 8ème Tranche',
                    },
                    {
                      icon: Phone,
                      label: 'Téléphone',
                      value: '+225 27 22 20 11 15',
                      href: 'tel:+2252722201115',
                    },
                    {
                      icon: Phone,
                      label: 'Téléphone 2',
                      value: '+225 01 72 95 53 23',
                      href: 'tel:+2250172955323',
                    },
                    {
                      icon: Phone,
                      label: 'Téléphone 3',
                      value: '+225 07 78 19 17 52',
                      href: 'tel:+2250778191752',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'contact@elbomigroup.com',
                      href: 'mailto:contact@elbomigroup.com',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-rust-500/20 bg-rust-500/10">
                        <item.icon className="h-4 w-4 text-rust-400" />
                      </span>
                      <div>
                        <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="whitespace-pre-line text-sm text-white/60">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
                <Clock className="mb-3 h-5 w-5 text-rust-400/60" />
                <h3 className="mb-3 font-heading text-base font-bold uppercase text-white">Horaires</h3>
                <div className="space-y-1.5 text-sm text-white/50">
                  <div className="flex justify-between">
                    <span>Lundi – Vendredi</span>
                    <span className="text-white/70">08h00 – 18h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-white/70">08h00 – 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-white/35">Fermé</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
