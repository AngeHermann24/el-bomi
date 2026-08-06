'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Zap, Send, CheckCircle2 } from 'lucide-react';
import CircuitAnimation from './CircuitAnimation';

const services = [
  'Électricité générale BT',
  'Réseaux BT/HTA',
  'Électrification rurale',
  'Solaire photovoltaïque',
  'Automatismes & SCADA',
  'Maintenance HTB/HTA',
];

export default function EnergieContactClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', tel: '', service: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-gradient-to-b from-[#BFB499] via-[#C9BFA8] to-[#BFB499] text-navy-900">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="/images/energie-contact.jpg"
          alt="Contact EL-BOMI Énergie"
          fill priority className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#BFB499]/97 via-[#BFB499]/50 to-[#BFB499]/20" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: `linear-gradient(rgb(201 162 39) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Prenons contact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-navy-900 md:text-6xl lg:text-7xl"
          >
            Contactez-nous
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-navy-900/60"
          >
            Devis gratuit sous 48h. Notre bureau d&apos;études est à votre disposition.
          </motion.p>
        </div>
      </section>

      {/* Séparateur circuit */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#B5AB94] via-[#BFB499] to-[#B5AB94] py-4">
        <CircuitAnimation className="opacity-80 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#BFB499] via-transparent to-[#BFB499]" />
      </div>

      {/* Contact grid */}
      <section className="bg-gradient-to-b from-[#C9BFA8] to-[#B5AB94] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Formulaire (3/5) */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-gold-600" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Formulaire</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Votre demande</h2>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-gold-500/25 bg-white/50 p-10 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-accent/30 bg-amber-accent/10 shadow-[0_0_25px_rgba(242,169,59,0.2)]">
                      <CheckCircle2 className="h-8 w-8 text-amber-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-bold uppercase text-navy-900">Message envoyé !</h3>
                    <p className="mt-3 text-navy-900/50">Notre équipe vous répondra sous 48h ouvrées.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/50">Nom complet *</label>
                        <input
                          required
                          value={form.nom}
                          onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          className="w-full rounded-xl border border-navy-900/10 bg-white/50 px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none transition-all focus:border-amber-accent/50 focus:bg-white/70 focus:shadow-[0_0_15px_rgba(242,169,59,0.1)]"
                          placeholder="Jean Kouadio"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/50">Email *</label>
                        <input
                          required type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-navy-900/10 bg-white/50 px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none transition-all focus:border-amber-accent/50 focus:bg-white/70 focus:shadow-[0_0_15px_rgba(242,169,59,0.1)]"
                          placeholder="jean@entreprise.ci"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/50">Téléphone</label>
                        <input
                          value={form.tel}
                          onChange={(e) => setForm({ ...form, tel: e.target.value })}
                          className="w-full rounded-xl border border-navy-900/10 bg-white/50 px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none transition-all focus:border-amber-accent/50 focus:bg-white/70 focus:shadow-[0_0_15px_rgba(242,169,59,0.1)]"
                          placeholder="+225 07 00 00 00"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/50">Service concerné</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-xl border border-navy-900/10 bg-white/50 px-4 py-3 text-sm text-navy-900/60 outline-none transition-all focus:border-amber-accent/50 focus:shadow-[0_0_15px_rgba(242,169,59,0.1)]"
                        >
                          <option value="">Choisir un service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy-900/50">Description du projet *</label>
                      <textarea
                        required rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-navy-900/10 bg-white/50 px-4 py-3 text-sm text-navy-900 placeholder-navy-900/25 outline-none transition-all focus:border-amber-accent/50 focus:bg-white/70 focus:shadow-[0_0_15px_rgba(242,169,59,0.1)]"
                        placeholder="Décrivez votre projet, la localisation, la puissance estimée..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-gold-600 to-amber-accent py-4 text-sm font-bold uppercase tracking-wider text-navy-900 transition-all hover:shadow-[0_0_30px_rgba(242,169,59,0.3)]"
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        Envoyer ma demande <Send className="h-4 w-4" />
                      </span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Infos contact (2/5) */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-5">
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-gold-600" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Coordonnées</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Nous joindre</h2>
                </div>

                {[
                  { icon: Phone, label: 'Téléphone', value: '+225 27 00 00 00', sub: 'Lun-Ven 8h-18h' },
                  { icon: Mail, label: 'Email', value: 'energie@el-bomi.com', sub: 'Réponse sous 24h' },
                  { icon: MapPin, label: 'Adresse', value: 'Abidjan, Cocody', sub: 'Côte d\'Ivoire' },
                  { icon: Clock, label: 'Urgences', value: 'Astreinte 24h/24', sub: '7j/7 pour maintenance' },
                ].map((info) => (
                  <div key={info.label} className="group flex items-start gap-4 rounded-xl border border-navy-900/8 bg-white/40 p-5 transition-all hover:border-amber-accent/30 hover:shadow-[0_0_15px_rgba(242,169,59,0.08)]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/10 transition-all group-hover:bg-amber-accent/15 group-hover:shadow-[0_0_12px_rgba(242,169,59,0.15)]">
                      <info.icon className="h-4.5 w-4.5 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-navy-900/40">{info.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-navy-900/80">{info.value}</p>
                      <p className="text-xs text-navy-900/40">{info.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Badge groupe */}
                <div className="mt-6 rounded-xl border border-gold-500/15 bg-white/30 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-accent/70" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600/70">Membre de EL-BOMI HOLDING</span>
                  </div>
                  <p className="text-xs leading-relaxed text-navy-900/40">
                    Bénéficiez de la force d&apos;un groupe multisectoriel pour vos projets d&apos;envergure combinant énergie, construction et logistique.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
