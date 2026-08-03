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
    <div className="bg-[#0A1628] text-white">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
          alt="Contact EL-BOMI Énergie"
          fill priority className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/97 via-[#0A1628]/55 to-[#0A1628]/20" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgb(201 162 39) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Prenons contact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >
            Contactez-nous
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-white/50"
          >
            Devis gratuit sous 48h. Notre bureau d&apos;études est à votre disposition.
          </motion.p>
        </div>
      </section>

      {/* Séparateur circuit */}
      <div className="relative overflow-hidden bg-[#060e1c] py-4">
        <CircuitAnimation className="opacity-40 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060e1c] via-transparent to-[#060e1c]" />
      </div>

      {/* Contact grid */}
      <section className="bg-[#060e1c] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Formulaire (3/5) */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-gold-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Formulaire</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-white">Votre demande</h2>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-10 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 shadow-[0_0_25px_rgba(201,162,39,0.2)]">
                      <CheckCircle2 className="h-8 w-8 text-gold-400" />
                    </div>
                    <h3 className="font-heading text-xl font-bold uppercase text-white">Message envoyé !</h3>
                    <p className="mt-3 text-white/45">Notre équipe vous répondra sous 48h ouvrées.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Nom complet *</label>
                        <input
                          required
                          value={form.nom}
                          onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-gold-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(201,162,39,0.08)]"
                          placeholder="Jean Kouadio"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Email *</label>
                        <input
                          required type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-gold-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(201,162,39,0.08)]"
                          placeholder="jean@entreprise.ci"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Téléphone</label>
                        <input
                          value={form.tel}
                          onChange={(e) => setForm({ ...form, tel: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-gold-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(201,162,39,0.08)]"
                          placeholder="+225 07 00 00 00"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Service concerné</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-[#0A1628] px-4 py-3 text-sm text-white/60 outline-none transition-all focus:border-gold-500/40 focus:shadow-[0_0_15px_rgba(201,162,39,0.08)]"
                        >
                          <option value="">Choisir un service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Description du projet *</label>
                      <textarea
                        required rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-gold-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(201,162,39,0.08)]"
                        placeholder="Décrivez votre projet, la localisation, la puissance estimée..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 py-4 text-sm font-bold uppercase tracking-wider text-[#0A1628] transition-all hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
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
                    <span className="h-px w-8 bg-gold-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Coordonnées</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-white">Nous joindre</h2>
                </div>

                {[
                  { icon: Phone, label: 'Téléphone', value: '+225 27 00 00 00', sub: 'Lun-Ven 8h-18h' },
                  { icon: Mail, label: 'Email', value: 'energie@el-bomi.com', sub: 'Réponse sous 24h' },
                  { icon: MapPin, label: 'Adresse', value: 'Abidjan, Cocody', sub: 'Côte d\'Ivoire' },
                  { icon: Clock, label: 'Urgences', value: 'Astreinte 24h/24', sub: '7j/7 pour maintenance' },
                ].map((info) => (
                  <div key={info.label} className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-gold-500/15">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/8 transition-all group-hover:bg-gold-500/15 group-hover:shadow-[0_0_12px_rgba(201,162,39,0.15)]">
                      <info.icon className="h-4.5 w-4.5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">{info.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-white/75">{info.value}</p>
                      <p className="text-xs text-white/30">{info.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Badge groupe */}
                <div className="mt-6 rounded-xl border border-gold-500/10 bg-gold-500/[0.03] p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-gold-400/60" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-400/60">Membre de EL-BOMI HOLDING</span>
                  </div>
                  <p className="text-xs leading-relaxed text-white/30">
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
