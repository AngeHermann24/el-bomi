'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function InvestissementContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071610] via-[#0A1F17]/90 to-[#0A1F17]" />
        <div className="container relative z-10 mx-auto px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4B896]"
          >
            Échangeons
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl"
          >
            Nous <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B87333] via-[#D4B896] to-[#B87333]">contacter</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Infos */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8">
                <h2 className="mb-6 font-heading text-xl font-bold text-white">Coordonnées</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4B896]" />
                    <div>
                      <div className="text-sm font-semibold text-white">Adresse</div>
                      <div className="text-sm text-white/50">27 Bp 399 Abj 27, Abidjan</div>
                      <div className="text-sm text-white/50">Cocody - Angré 8ème Tranche</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0 text-[#D4B896]" />
                    <div>
                      <div className="text-sm font-semibold text-white">Téléphone</div>
                      <a href="tel:+2252722201115" className="text-sm text-white/50 hover:text-[#D4B896] transition-colors">
                        +225 27 22 20 11 15
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 shrink-0 text-[#D4B896]" />
                    <div>
                      <div className="text-sm font-semibold text-white">Email</div>
                      <a href="mailto:investissement@elbomigroup.com" className="text-sm text-white/50 hover:text-[#D4B896] transition-colors">
                        investissement@elbomigroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 shrink-0 text-[#D4B896]" />
                    <div>
                      <div className="text-sm font-semibold text-white">Horaires</div>
                      <div className="text-sm text-white/50">Lundi - Vendredi : 08h00 - 18h30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#B87333]/20">
                    <Send className="h-8 w-8 text-[#D4B896]" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-white">Message envoyé</h3>
                  <p className="text-sm text-white/50">Nous vous recontacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="mb-2 font-heading text-xl font-bold text-white">Écrivez-nous</h2>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/70">Nom complet</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#B87333]/50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-white/70">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#B87333]/50"
                        placeholder="vous@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/70">Téléphone</label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#B87333]/50"
                        placeholder="+225 ..."
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-white/70">Budget estimé</label>
                      <select className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#B87333]/50">
                        <option value="" className="bg-[#0A1F17]">Sélectionner</option>
                        <option value="0-5M" className="bg-[#0A1F17]">0 - 5M FCFA</option>
                        <option value="5-20M" className="bg-[#0A1F17]">5M - 20M FCFA</option>
                        <option value="20-100M" className="bg-[#0A1F17]">20M - 100M FCFA</option>
                        <option value="100M+" className="bg-[#0A1F17]">100M+ FCFA</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Sujet</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#B87333]/50"
                      placeholder="Objet de votre demande"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#B87333]/50"
                      placeholder="Décrivez votre besoin..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B87333] to-[#D4B896] px-6 py-3.5 text-sm font-semibold text-[#0A1F17] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#B87333]/30"
                  >
                    Envoyer le message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
