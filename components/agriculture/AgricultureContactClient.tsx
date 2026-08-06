'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Leaf } from 'lucide-react';

export default function AgricultureContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#F6F4ED] text-[#1B3A2B]">

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image src="/images/agri-contact.jpg" alt="Contact agriculture" fill priority
          className="object-cover object-center" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6F4ED]/96 via-[#1B3A2B]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A2B]/70 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#5BAE6B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5BAE6B]">Contact</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold text-white md:text-6xl"
          >
            Parlons de<br />
            <span className="bg-gradient-to-r from-[#5BAE6B] to-[#D4A017] bg-clip-text text-transparent">votre projet</span>
          </motion.h1>
        </div>
      </section>

      {/* Form + Coordonnées */}
      <section className="bg-[#F6F4ED] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-[#1B3A2B]">Envoyez-nous votre demande</h2>
              <p className="mt-3 text-[#1B3A2B]/50">Décrivez votre projet agricole : nous vous répondons sous 48h.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-[#2D7A3E]/20 bg-[#2D7A3E]/5 p-8 text-center">
                  <Leaf className="mx-auto h-10 w-10 text-[#2D7A3E]" strokeWidth={1.5} />
                  <p className="mt-4 font-heading text-lg font-bold text-[#1B3A2B]">Message envoyé !</p>
                  <p className="mt-2 text-sm text-[#1B3A2B]/50">Notre équipe vous recontactera sous 48h.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="mt-8 space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#1B3A2B]/40">Nom complet</label>
                      <input required type="text" placeholder="Votre nom"
                        className="w-full rounded-xl border border-[#1B3A2B]/10 bg-white px-4 py-3 text-sm text-[#1B3A2B] placeholder-[#1B3A2B]/25 outline-none transition-colors focus:border-[#2D7A3E]/40"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#1B3A2B]/40">Email</label>
                      <input required type="email" placeholder="vous@email.com"
                        className="w-full rounded-xl border border-[#1B3A2B]/10 bg-white px-4 py-3 text-sm text-[#1B3A2B] placeholder-[#1B3A2B]/25 outline-none transition-colors focus:border-[#2D7A3E]/40"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#1B3A2B]/40">Téléphone</label>
                      <input type="tel" placeholder="(225) ..."
                        className="w-full rounded-xl border border-[#1B3A2B]/10 bg-white px-4 py-3 text-sm text-[#1B3A2B] placeholder-[#1B3A2B]/25 outline-none transition-colors focus:border-[#2D7A3E]/40"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#1B3A2B]/40">Type de projet</label>
                      <select className="w-full rounded-xl border border-[#1B3A2B]/10 bg-white px-4 py-3 text-sm text-[#1B3A2B]/60 outline-none transition-colors focus:border-[#2D7A3E]/40">
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
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#1B3A2B]/40">Message</label>
                    <textarea required rows={4} placeholder="Décrivez votre projet..."
                      className="w-full rounded-xl border border-[#1B3A2B]/10 bg-white px-4 py-3 text-sm text-[#1B3A2B] placeholder-[#1B3A2B]/25 outline-none transition-colors focus:border-[#2D7A3E]/40"
                    />
                  </div>
                  <button type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2D7A3E] to-[#3A8B4C] px-7 py-3.5 text-sm font-bold text-white transition-all hover:shadow-[0_8px_30px_rgba(45,122,62,0.3)]"
                  >
                    Envoyer <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Coordonnées */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-[#1B3A2B]">Coordonnées</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2D7A3E]/20 bg-[#2D7A3E]/8">
                    <MapPin className="h-4 w-4 text-[#2D7A3E]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#1B3A2B]">Adresse</h3>
                    <p className="mt-1 text-sm text-[#1B3A2B]/50">27 BP 399 Abj 27<br />Abidjan, Cocody — Angré 8ème Tranche</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2D7A3E]/20 bg-[#2D7A3E]/8">
                    <Phone className="h-4 w-4 text-[#2D7A3E]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#1B3A2B]">Téléphone</h3>
                    <a href="tel:+2252722201115" className="mt-1 block text-sm text-[#1B3A2B]/50 hover:text-[#2D7A3E] transition-colors">(225) 27 22 20 11 15</a>
                    <a href="tel:+2250172955323" className="block text-sm text-[#1B3A2B]/50 hover:text-[#2D7A3E] transition-colors">(225) 01 72 95 53 23</a>
                    <a href="tel:+2250778191752" className="block text-sm text-[#1B3A2B]/50 hover:text-[#2D7A3E] transition-colors">(225) 07 78 19 17 52</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2D7A3E]/20 bg-[#2D7A3E]/8">
                    <Mail className="h-4 w-4 text-[#2D7A3E]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#1B3A2B]">Email</h3>
                    <a href="mailto:agriculture@elbomigroup.com" className="mt-1 block text-sm text-[#1B3A2B]/50 hover:text-[#2D7A3E] transition-colors">agriculture@elbomigroup.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2D7A3E]/20 bg-[#2D7A3E]/8">
                    <Clock className="h-4 w-4 text-[#2D7A3E]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#1B3A2B]">Horaires</h3>
                    <p className="mt-1 text-sm text-[#1B3A2B]/50">Lundi - Vendredi : 08h00 - 18h30<br />Samedi & Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#D4A017]/20 bg-[#D4A017]/5 p-6">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-[#D4A017]" strokeWidth={2} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D4A017]">Filière agricole ivoirienne</span>
                </div>
                <p className="mt-3 text-sm text-[#1B3A2B]/55">Membre actif de la filière agricole de Côte d&apos;Ivoire, en partenariat avec les coopératives locales et les institutions de recherche agronomique.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
