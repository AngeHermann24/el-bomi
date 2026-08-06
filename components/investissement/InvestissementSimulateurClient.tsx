'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, PiggyBank } from 'lucide-react';

export default function InvestissementSimulateurClient() {
  const [capital, setCapital] = useState(1000000);
  const [versement, setVersement] = useState(50000);
  const [duree, setDuree] = useState(10);
  const [taux, setTaux] = useState(5);

  const result = useMemo(() => {
    const r = taux / 100 / 12;
    const n = duree * 12;
    const capitalFinal = capital * Math.pow(1 + r, n);
    const versementsFutur = versement * ((Math.pow(1 + r, n) - 1) / r);
    const total = capitalFinal + versementsFutur;
    const totalVerse = capital + versement * n;
    const gains = total - totalVerse;
    return { total, totalVerse, gains };
  }, [capital, versement, duree, taux]);

  const fmt = (v: number) =>
    new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(Math.round(v));

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
            Outil
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl"
          >
            Simulateur <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B87333] via-[#D4B896] to-[#B87333]">d&apos;épargne</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Sliders */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8">
              <div className="mb-8 flex items-center gap-3">
                <Calculator className="h-6 w-6 text-[#D4B896]" />
                <h2 className="font-heading text-xl font-bold text-white">Paramètres</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="mb-2 flex items-center justify-between text-sm text-white/70">
                    <span>Capital initial</span>
                    <span className="font-semibold text-[#D4B896]">{fmt(capital)} FCFA</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={10000000}
                    step={100000}
                    value={capital}
                    onChange={(e) => setCapital(Number(e.target.value))}
                    className="w-full accent-[#B87333]"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center justify-between text-sm text-white/70">
                    <span>Verserment mensuel</span>
                    <span className="font-semibold text-[#D4B896]">{fmt(versement)} FCFA</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={500000}
                    step={5000}
                    value={versement}
                    onChange={(e) => setVersement(Number(e.target.value))}
                    className="w-full accent-[#B87333]"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center justify-between text-sm text-white/70">
                    <span>Durée</span>
                    <span className="font-semibold text-[#D4B896]">{duree} ans</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={duree}
                    onChange={(e) => setDuree(Number(e.target.value))}
                    className="w-full accent-[#B87333]"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center justify-between text-sm text-white/70">
                    <span>Taux annuel</span>
                    <span className="font-semibold text-[#D4B896]">{taux} %</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={0.5}
                    value={taux}
                    onChange={(e) => setTaux(Number(e.target.value))}
                    className="w-full accent-[#B87333]"
                  />
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[#B87333]/30 bg-[#B87333]/5 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-[#D4B896]" />
                  <h2 className="font-heading text-xl font-bold text-white">Capital final estimé</h2>
                </div>
                <div className="mb-2 font-heading text-4xl font-black text-[#D4B896] lg:text-5xl">
                  {fmt(result.total)} <span className="text-2xl text-[#D4B896]">FCFA</span>
                </div>
                <p className="text-sm text-white/50">Après {duree} ans avec un taux de {taux}% par an.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <PiggyBank className="h-5 w-5 text-[#D4B896]" />
                    <span className="text-xs uppercase tracking-wider text-white/50">Total versé</span>
                  </div>
                  <div className="font-heading text-2xl font-bold text-white">{fmt(result.totalVerse)}</div>
                  <div className="text-xs text-white/40">FCFA</div>
                </div>

                <div className="rounded-2xl border border-[#B87333]/20 bg-[#B87333]/[0.03] p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#D4B896]" />
                    <span className="text-xs uppercase tracking-wider text-white/50">Gains estimés</span>
                  </div>
                  <div className="font-heading text-2xl font-bold text-[#D4B896]">+{fmt(result.gains)}</div>
                  <div className="text-xs text-white/40">FCFA</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#0A1F17] p-6">
                <p className="text-xs leading-relaxed text-white/40">
                  Simulation à titre indicatif, basée sur un taux de rendement annuel constant.
                  Les performances passées ne préjugent pas des performances futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
