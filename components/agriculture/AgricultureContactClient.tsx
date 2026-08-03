'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Leaf } from 'lucide-react';

export default function AgricultureContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1464226184884-fa280c87e644?w=1920&q=85" alt="Contact Agriculture" fill priority
          className="object-cover object-center" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/96 via-[#0B1E3D]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3D]/80 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">Contact</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold md:text-6xl"
          >
            Parlons de<br />
            <span className="text-[#C9A227]">votre projet</span>
          </motion.h1>
        </div>
      </section>

      {/* Form + Coordonnées */}
      <section className="bg-[#0B1E3D] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold">Envoyez-nous votre demande</h2>
              <p className="mt-3 text-white/45">Décrivez votre projet agricole : nous vous répondons sous 48h.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-[#C9A227]/20 bg-[#C9A227]/5 p-8 text-center">
                  <Leaf className="mx-auto h-10 w-10 text-[#C9A227]" strokeWidth={1.5} />
                  <p className="mt-4 font-heading text-lg font-bold">Message envoyé !</p>
                  <p className="mt-2 text-sm text-white/50">Notre équipe vous recontactera sous 48h.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="mt-8 space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Nom complet</label>
                      <input required type="text" placeholder="Votre nom"
                        className="w-full rounded-xl border border-white/10 bg-[#060f1f] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[#C9A227]/40"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Email</label>
                      <input required type="email" placeholder="vous@email.com"
                        className="w-full rounded-xl border border-white/10 bg-[#060f1f] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[#C9A227]/40"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Téléphone</label>
                      <input type="tel" placeholder="+225 ..."
                        className="w-full rounded-xl border border-white/10 bg-[#060f1f] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[#C9A227]/40"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Type de projet</label>
                      <select className="w-full rounded-xl border border-white/10 bg-[#060f1f] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A227]/40">
                        <option value="">Sélectionner...</option>
                        <option>Production agricole</option>
                        <option>Élevage / Aquaculture</option>
                        <option>Transformation</option>
                        <option>Intrants</option>
                        <option>Hydraulique</option>
                        <option>Conseil / Ingénierie</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Message</label>
                    <textarea required rows={4} placeholder="Décrivez votre projet..."
                      className="w-full rounded-xl border border-white/10 bg-[#060f1f] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[#C9A227]/40"
                    />
                  </div>
                  <button type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#0B1E3D] transition-all hover:bg-[#E8C766] hover:shadow-[0_8px_30px_rgba(201,162,39,0.2)]"
                  >
                    Envoyer <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Coordonnées */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold">Coordonnées</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5">
                    <MapPin className="h-4 w-4 text-[#C9A227]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-white/90">Adresse</h3>
                    <p className="mt-1 text-sm text-white/40">27 Bp 399 Abj 27<br />Abidjan, Cocody — Angré 8ème Tranche</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5">
                    <Phone className="h-4 w-4 text-[#C9A227]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-white/90">Téléphone</h3>
                    <a href="tel:+2252722201115" className="mt-1 block text-sm text-white/40 hover:text-[#C9A227] transition-colors">(225) 27 22 20 11 15</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5">
                    <Mail className="h-4 w-4 text-[#C9A227]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-white/90">Email</h3>
                    <a href="mailto:agriculture@elbomigroup.com" className="mt-1 block text-sm text-white/40 hover:text-[#C9A227] transition-colors">agriculture@elbomigroup.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5">
                    <Clock className="h-4 w-4 text-[#C9A227]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-white/90">Horaires</h3>
                    <p className="mt-1 text-sm text-white/40">Lundi - Vendredi : 08h00 - 18h30<br />Samedi & Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#C9A227]/10 bg-[#C9A227]/5 p-6">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-[#C9A227]" strokeWidth={2} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">Filière agricole ivoirienne</span>
                </div>
                <p className="mt-3 text-sm text-white/50">Membre actif de la filière agricole de Côte d&apos;Ivoire, en partenariat avec les coopératives locales et les institutions de recherche agronomique.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
