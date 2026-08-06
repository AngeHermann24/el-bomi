'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, HeartPulse, Send, CheckCircle2 } from 'lucide-react';

const serviceTypes = [
  'Équipements médicaux',
  'Hémodialyse — prise en charge patient',
  'Produits pharmaceutiques',
  'Matériel de laboratoire',
  'Matériel dentaire',
  'Construction / équipement de clinique',
  'Maintenance & SAV',
  'Autre demande',
];

export default function MedicalContactClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', tel: '', etablissement: '', service: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image src="/images/medical-qualite.jpg" alt="Contact médical" fill priority className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/97 via-white/55 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Parlons de votre projet</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold text-[#0B1E3D] md:text-6xl lg:text-7xl"
          >Contactez-nous</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-[#0B1E3D]/50"
          >Notre équipe de spécialistes vous répond dans les 24h pour tout projet médical.</motion.p>
        </div>
      </section>

      {/* Formulaire + infos */}
      <section className="bg-[#F7F7F5] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C9A227]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Formulaire</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-[#0B1E3D]">Votre demande</h2>
                </div>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-[#4A7C7C]/15 bg-[#4A7C7C]/[0.04] p-10 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#4A7C7C]/25 bg-[#4A7C7C]/8 shadow-[0_8px_30px_rgba(74,124,124,0.12)]">
                      <HeartPulse className="h-8 w-8 text-[#4A7C7C]" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#0B1E3D]">Message envoyé !</h3>
                    <p className="mt-3 text-[#0B1E3D]/45">Notre équipe vous rappelle sous 24h avec une proposition adaptée.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]/35">Nom / Prénom *</label>
                        <input required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          className="w-full rounded-xl border border-[#0B1E3D]/8 bg-white px-4 py-3 text-sm text-[#0B1E3D] placeholder-[#0B1E3D]/22 outline-none transition-all focus:border-[#4A7C7C]/35 focus:shadow-[0_0_0_3px_rgba(74,124,124,0.07)]"
                          placeholder="Dr. Kouamé Assi"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]/35">Email *</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-[#0B1E3D]/8 bg-white px-4 py-3 text-sm text-[#0B1E3D] placeholder-[#0B1E3D]/22 outline-none transition-all focus:border-[#4A7C7C]/35 focus:shadow-[0_0_0_3px_rgba(74,124,124,0.07)]"
                          placeholder="contact@clinique.ci"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]/35">Téléphone</label>
                        <input value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })}
                          className="w-full rounded-xl border border-[#0B1E3D]/8 bg-white px-4 py-3 text-sm text-[#0B1E3D] placeholder-[#0B1E3D]/22 outline-none focus:border-[#4A7C7C]/35"
                          placeholder="+225 07 00 00 00"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]/35">Établissement</label>
                        <input value={form.etablissement} onChange={(e) => setForm({ ...form, etablissement: e.target.value })}
                          className="w-full rounded-xl border border-[#0B1E3D]/8 bg-white px-4 py-3 text-sm text-[#0B1E3D] placeholder-[#0B1E3D]/22 outline-none focus:border-[#4A7C7C]/35"
                          placeholder="Clinique Saint-Paul"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]/35">Type de demande</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-xl border border-[#0B1E3D]/8 bg-white px-4 py-3 text-sm text-[#0B1E3D]/55 outline-none focus:border-[#4A7C7C]/35"
                      >
                        <option value="">Sélectionner un domaine</option>
                        {serviceTypes.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]/35">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-[#0B1E3D]/8 bg-white px-4 py-3 text-sm text-[#0B1E3D] placeholder-[#0B1E3D]/22 outline-none focus:border-[#4A7C7C]/35 focus:shadow-[0_0_0_3px_rgba(74,124,124,0.07)]"
                        placeholder="Décrivez votre projet, vos besoins en équipement, vos délais..."
                      />
                    </div>
                    <button type="submit"
                      className="w-full rounded-xl bg-[#0B1E3D] py-4 text-sm font-semibold text-white transition-all hover:bg-[#0B1E3D]/85 hover:shadow-[0_8px_30px_rgba(11,30,61,0.2)]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Envoyer la demande <Send className="h-4 w-4" />
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
                    <span className="h-px w-8 bg-[#C9A227]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Coordonnées</span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-[#0B1E3D]">Nous joindre</h2>
                </div>

                {[
                  { icon: Phone, label: 'Téléphone', value: '+225 27 00 00 00', sub: 'Lun-Ven 7h30-18h' },
                  { icon: Mail,  label: 'Email', value: 'medical@el-bomi.com', sub: 'Réponse sous 24h' },
                  { icon: MapPin,label: 'Adresse', value: 'Abidjan, Cocody — Angré', sub: '27 BP 399 Abj 27' },
                  { icon: Clock, label: 'SAV Urgences', value: '24h/24 — 7j/7', sub: 'Intervention sous 4h garantie' },
                ].map((info) => (
                  <div key={info.label} className="group flex items-start gap-4 rounded-2xl border border-[#0B1E3D]/6 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#4A7C7C]/15 bg-[#4A7C7C]/7">
                      <info.icon className="h-4 w-4 text-[#4A7C7C]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0B1E3D]/30">{info.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-[#0B1E3D]">{info.value}</p>
                      <p className="text-xs text-[#0B1E3D]/38">{info.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Certification */}
                <div className="rounded-2xl border border-[#C9A227]/15 bg-[#C9A227]/[0.03] p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C9A227]/70" strokeWidth={2} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227]/70">Agrément</span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#0B1E3D]/42">
                    EL-BOMI Medical est agréé par le Ministère de la Santé et de l&apos;Hygiène Publique de Côte d&apos;Ivoire (MSDS).
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
