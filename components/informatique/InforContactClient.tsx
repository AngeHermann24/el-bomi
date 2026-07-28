'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Cpu, Send, CheckCircle2 } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

const services = [
  'Réseaux & Infrastructures IT', 'Télécoms & Fibre optique',
  'Cybersécurité & Vidéosurveillance', 'Cloud & Data Centers',
  'Développement logiciel', 'Smart Building & Domotique',
];

export default function InforContactClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', tel: '', service: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[48vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#060f1f]">
          <NetworkCanvas className="opacity-45" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060f1f]/97 via-[#060f1f]/40 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Prenons contact</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >
            Contactez-nous
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-white/45"
          >
            Audit gratuit, devis sous 48h. Notre équipe d&apos;ingénieurs est à votre disposition.
          </motion.p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#060f1f] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-gold-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Formulaire</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-white">Votre projet IT</h2>
                </div>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border border-gold-500/18 bg-gold-500/[0.04] p-10 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/8 shadow-[0_0_25px_rgba(201,162,39,0.15)]">
                      <CheckCircle2 className="h-8 w-8 text-gold-400" />
                    </div>
                    <h3 className="font-heading text-xl font-bold uppercase text-white">Demande envoyée !</h3>
                    <p className="mt-3 text-white/40">Notre équipe vous répondra sous 48h ouvrées.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/35">Nom complet *</label>
                        <input required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white placeholder-white/15 outline-none transition-all focus:border-gold-500/35 focus:bg-white/[0.04] focus:shadow-[0_0_12px_rgba(201,162,39,0.07)]"
                          placeholder="Jean Kouadio"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/35">Email *</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white placeholder-white/15 outline-none transition-all focus:border-gold-500/35 focus:bg-white/[0.04] focus:shadow-[0_0_12px_rgba(201,162,39,0.07)]"
                          placeholder="jean@entreprise.ci"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/35">Téléphone</label>
                        <input value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white placeholder-white/15 outline-none transition-all focus:border-gold-500/35 focus:bg-white/[0.04]"
                          placeholder="+225 07 00 00 00"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/35">Service concerné</label>
                        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-lg border border-white/8 bg-[#0B1E3D] px-4 py-3 text-sm text-white/50 outline-none transition-all focus:border-gold-500/35"
                        >
                          <option value="">Choisir un service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/35">Description du projet *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-lg border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white placeholder-white/15 outline-none transition-all focus:border-gold-500/35 focus:bg-white/[0.04] focus:shadow-[0_0_12px_rgba(201,162,39,0.07)]"
                        placeholder="Décrivez votre projet, vos besoins, vos contraintes..."
                      />
                    </div>
                    <button type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_28px_rgba(201,162,39,0.35)]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Envoyer ma demande <Send className="h-4 w-4" />
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
                    <span className="h-px w-8 bg-gold-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Coordonnées</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase text-white">Nous joindre</h2>
                </div>

                {[
                  { icon: Phone, label: 'Téléphone', value: '+225 27 00 00 00', sub: 'Lun-Ven 8h-18h' },
                  { icon: Mail, label: 'Email', value: 'it@el-bomi.com', sub: 'Réponse sous 24h' },
                  { icon: MapPin, label: 'Adresse', value: 'Abidjan, Cocody', sub: 'Côte d\'Ivoire' },
                  { icon: Clock, label: 'Support NOC', value: '24h/24 — 7j/7', sub: 'Pour les contrats de maintenance' },
                ].map((info) => (
                  <div key={info.label} className="group flex items-start gap-4 rounded-xl border border-white/[0.05] bg-white/[0.018] p-5 transition-all hover:border-gold-500/12">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-500/15 bg-gold-500/8 transition-all group-hover:bg-gold-500/12">
                      <info.icon className="h-4 w-4 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/25">{info.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-white/65">{info.value}</p>
                      <p className="text-xs text-white/25">{info.sub}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-6 rounded-xl border border-gold-500/8 bg-gold-500/[0.02] p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-gold-400/50" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-400/50">Membre de EL-BOMI GROUP</span>
                  </div>
                  <p className="text-xs leading-relaxed text-white/25">
                    Combinez IT, énergie et construction pour vos projets d&apos;infrastructure complexes grâce à la synergie du groupe EL-BOMI.
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
