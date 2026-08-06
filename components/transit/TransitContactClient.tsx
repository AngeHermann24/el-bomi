'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Truck, Send, CheckCircle2, Ship } from 'lucide-react';
import MapRoutes from './MapRoutes';

const serviceTypes = [
  'Transit international & Douane',
  'Transport maritime',
  'Transport aérien',
  'Transport routier CEDEAO',
  'Entreposage & stockage',
  'Distribution dernier kilomètre',
  'Tracking & Suivi',
  'Logistique 4PL',
];

export default function TransitContactClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', tel: '', service: '', origine: '', destination: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-[#F7F5F0] text-navy-900">

      {/* Hero */}
      <section className="relative min-h-[48vh] flex items-end overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-50">
          <MapRoutes className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/20" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#E85D04]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Parlons de votre fret</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-navy-900 md:text-6xl lg:text-7xl"
          >
            Contactez-nous
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-navy-900/50"
          >
            Devis gratuit sous 24h. Disponible 24/7 pour vos urgences logistiques.
          </motion.p>
        </div>
      </section>

      {/* Formulaire + infos */}
      <section className="bg-[#F7F5F0] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#E85D04]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Votre demande</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Demande de devis</h2>
                </div>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border border-[#0D7377]/20 bg-[#0D7377]/5 p-10 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#0D7377]/25 bg-[#0D7377]/8 shadow-[0_0_25px_rgba(13,115,119,0.15)]">
                      <CheckCircle2 className="h-8 w-8 text-[#0D7377]" />
                    </div>
                    <h3 className="font-heading text-xl font-bold uppercase text-navy-900">Demande envoyée !</h3>
                    <p className="mt-3 text-navy-900/50">Notre équipe vous rappelle sous 24h avec un devis personnalisé.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/40">Nom / Société *</label>
                        <input required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          className="w-full rounded-lg border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none transition-all focus:border-[#E85D04]/40"
                          placeholder="EL-BOMI SARL"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/40">Email *</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none transition-all focus:border-[#E85D04]/40"
                          placeholder="contact@entreprise.ci"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/40">Téléphone</label>
                        <input value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })}
                          className="w-full rounded-lg border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none transition-all focus:border-[#E85D04]/40"
                          placeholder="(225) 07 78 19 17 52"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/40">Type de service</label>
                        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-lg border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900/60 outline-none focus:border-[#E85D04]/40"
                        >
                          <option value="">Choisir un service</option>
                          {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/40">Origine</label>
                        <input value={form.origine} onChange={(e) => setForm({ ...form, origine: e.target.value })}
                          className="w-full rounded-lg border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none focus:border-[#E85D04]/40"
                          placeholder="Paris, France"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/40">Destination</label>
                        <input value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })}
                          className="w-full rounded-lg border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none focus:border-[#E85D04]/40"
                          placeholder="Abidjan, Côte d'Ivoire"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/40">Description de la marchandise *</label>
                      <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-lg border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none focus:border-[#E85D04]/40"
                        placeholder="Nature de la marchandise, volume/poids, délais souhaités..."
                      />
                    </div>
                    <button type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-[#E85D04] to-[#F77F00] py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_28px_rgba(232,93,4,0.3)]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Demander un devis <Send className="h-4 w-4" />
                      </span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Infos */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-4">
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#E85D04]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Coordonnées</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Nous joindre</h2>
                </div>

                {[
                  { icon: Phone, label: 'Téléphone', value: '(225) 27 22 20 11 15', sub: '(225) 01 72 95 53 23 / (225) 07 78 19 17 52' },
                  { icon: Mail,  label: 'Email', value: 'logistics@elbomigroup.com', sub: 'Réponse sous 24h' },
                  { icon: MapPin,label: 'Adresse', value: '27 BP 399 Abj 27', sub: 'Cocody - Angré 8ème Tranche, Abidjan' },
                  { icon: Clock, label: 'Astreinte', value: '24h/24 — 7j/7', sub: 'Pour les urgences logistiques' },
                ].map((info) => (
                  <div key={info.label} className="group flex items-start gap-4 rounded-xl border border-navy-900/8 bg-white p-5 shadow-sm transition-all hover:border-[#E85D04]/20 hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E85D04]/20 bg-[#E85D04]/8">
                      <info.icon className="h-4 w-4 text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-navy-900/35">{info.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-navy-900/80">{info.value}</p>
                      <p className="text-xs text-navy-900/40">{info.sub}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-6 rounded-xl border border-[#0D7377]/15 bg-[#0D7377]/5 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Ship className="h-4 w-4 text-[#0D7377]/60" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7377]/70">Port d&apos;Abidjan</span>
                  </div>
                  <p className="text-xs leading-relaxed text-navy-900/45">
                    Notre équipe douanière est présente en permanence sur le port d&apos;Abidjan pour le suivi de vos dossiers.
                  </p>
                </div>

                {/* Modes acceptés */}
                <div className="rounded-xl border border-navy-900/8 bg-white p-5 shadow-sm">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-900/40">Modes de transport</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Ship, label: 'Maritime' },
                      { icon: Truck, label: 'Routier' },
                    ].map((m) => (
                      <div key={m.label} className="flex items-center gap-1.5 rounded-lg border border-[#E85D04]/15 bg-[#E85D04]/5 px-3 py-1.5">
                        <m.icon className="h-3.5 w-3.5 text-[#E85D04]/60" />
                        <span className="text-xs text-navy-900/50">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
