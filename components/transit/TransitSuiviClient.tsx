'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, Truck, Ship, Plane, CheckCircle2, Clock, MapPin, AlertCircle } from 'lucide-react';

type StepStatus = 'done' | 'active' | 'pending';

interface Step {
  label: string;
  location: string;
  date: string;
  status: StepStatus;
  icon: React.ElementType;
}

const MOCK_DATA: Record<string, { ref: string; mode: string; origin: string; dest: string; eta: string; steps: Step[] }> = {
  'TL-2024-001': {
    ref: 'TL-2024-001', mode: 'Maritime', origin: 'Port de Marseille', dest: 'Port d\'Abidjan', eta: '12 Jan 2025',
    steps: [
      { label: 'Enlèvement expéditeur', location: 'Lyon, France', date: '02 Jan 2025 09:15', status: 'done', icon: Package },
      { label: 'Arrivée terminal maritime', location: 'Marseille, France', date: '03 Jan 2025 14:30', status: 'done', icon: Ship },
      { label: 'Embarquement conteneur', location: 'Port de Marseille', date: '05 Jan 2025 08:00', status: 'done', icon: Ship },
      { label: 'En transit — Mer Méditerranée', location: 'Position GPS : 32°N 12°E', date: '07 Jan 2025 — en cours', status: 'active', icon: Ship },
      { label: 'Arrivée port d\'Abidjan', location: 'Port d\'Abidjan, Vridi', date: 'Prévu 12 Jan 2025', status: 'pending', icon: Ship },
      { label: 'Dédouanement', location: 'Douane Abidjan', date: 'Prévu 13 Jan 2025', status: 'pending', icon: Package },
      { label: 'Livraison destinataire', location: 'Abidjan, Zone Ind.', date: 'Prévu 14 Jan 2025', status: 'pending', icon: Truck },
    ],
  },
  'TL-2024-002': {
    ref: 'TL-2024-002', mode: 'Aérien Express', origin: 'Paris CDG', dest: 'Abidjan FHB', eta: '09 Jan 2025',
    steps: [
      { label: 'Prise en charge fret', location: 'Paris CDG', date: '08 Jan 2025 06:00', status: 'done', icon: Plane },
      { label: 'Vol en cours', location: 'AF 526 — Paris→Abidjan', date: '08 Jan 2025 22:45', status: 'active', icon: Plane },
      { label: 'Arrivée Abidjan FHB', location: 'Aéroport FHB', date: 'Prévu 09 Jan 2025 04:30', status: 'pending', icon: Plane },
      { label: 'Dédouanement aérien', location: 'Douane aéroport FHB', date: 'Prévu 09 Jan 2025 07:00', status: 'pending', icon: Package },
      { label: 'Livraison J+1', location: 'Destination finale', date: 'Prévu 09 Jan 2025', status: 'pending', icon: Truck },
    ],
  },
};

const STATUS_COLORS: Record<StepStatus, string> = {
  done: 'bg-green-400 border-green-400',
  active: 'bg-gold-400 border-gold-400 animate-pulse',
  pending: 'bg-transparent border-white/15',
};
const STATUS_LABEL: Record<StepStatus, string> = {
  done: 'Effectué',
  active: 'En cours',
  pending: 'En attente',
};

const MODE_ICON: Record<string, React.ElementType> = {
  'Maritime': Ship,
  'Aérien Express': Plane,
  'Routier': Truck,
};

export default function TransitSuiviClient() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<typeof MOCK_DATA['TL-2024-001'] | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setNotFound(false);
    setResult(null);
    setTimeout(() => {
      const found = MOCK_DATA[query.trim().toUpperCase()];
      if (found) { setResult(found); }
      else { setNotFound(true); }
      setLoading(false);
    }, 900);
  }

  const ModeIcon = result ? (MODE_ICON[result.mode] ?? Package) : Package;

  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#060f1f]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(rgba(201,162,39,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.8) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}
        />
        {/* Route SVG animée */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <motion.path
            d="M0 200 Q360 80 720 200 T1440 200"
            stroke="#C9A227" strokeWidth="1.5" fill="none" strokeDasharray="12 8"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: 'easeOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
          />
        </svg>
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Localisation en temps réel</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-heading text-5xl font-bold uppercase text-white md:text-6xl"
            >
              Suivi de<br />
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">cargaison</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="mt-5 max-w-lg text-lg text-white/42"
            >
              Entrez votre numéro de tracking ou de BL pour localiser votre marchandise à chaque étape.
            </motion.p>

            {/* Formulaire de recherche */}
            <motion.form initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              onSubmit={handleSearch} className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: TL-2024-001 ou TL-2024-002"
                className="flex-1 rounded-lg border border-gold-500/18 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-gold-500/35 focus:shadow-[0_0_15px_rgba(201,162,39,0.08)]"
              />
              <button type="submit" disabled={loading || !query.trim()}
                className="flex-shrink-0 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_28px_rgba(201,162,39,0.4)] disabled:opacity-50"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0B1E3D] border-t-transparent" />
                ) : (
                  <><Search className="h-4 w-4" /> Rechercher</>
                )}
              </button>
            </motion.form>
            <p className="mt-3 text-xs text-white/22">Numéros test : TL-2024-001 (maritime) · TL-2024-002 (aérien)</p>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="bg-[#060f1f] min-h-[40vh] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">

            {/* Not found */}
            {notFound && !result && (
              <motion.div key="notfound" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mx-auto max-w-lg rounded-xl border border-red-500/15 bg-red-500/[0.04] p-8 text-center"
              >
                <AlertCircle className="mx-auto mb-3 h-10 w-10 text-red-400/60" />
                <h3 className="font-heading text-lg font-bold uppercase text-white">Numéro non trouvé</h3>
                <p className="mt-2 text-sm text-white/35">Vérifiez votre numéro de tracking ou contactez notre équipe.</p>
              </motion.div>
            )}

            {/* Résultat */}
            {result && (
              <motion.div key="result" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mx-auto max-w-2xl"
              >
                {/* En-tête cargaison */}
                <div className="mb-8 rounded-xl border border-gold-500/15 bg-white/[0.02] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-400/60">Référence</span>
                        <span className="font-heading text-sm font-bold text-gold-400">{result.ref}</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        <div>
                          <span className="text-xs text-white/28">Origine</span>
                          <p className="font-medium text-white/65">{result.origin}</p>
                        </div>
                        <div>
                          <span className="text-xs text-white/28">Destination</span>
                          <p className="font-medium text-white/65">{result.dest}</p>
                        </div>
                        <div>
                          <span className="text-xs text-white/28">Mode</span>
                          <p className="font-medium text-white/65">{result.mode}</p>
                        </div>
                        <div>
                          <span className="text-xs text-white/28">ETA</span>
                          <p className="font-medium text-gold-400">{result.eta}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10 shadow-[0_0_20px_rgba(201,162,39,0.12)]">
                      <ModeIcon className="h-7 w-7 text-gold-400" />
                    </div>
                  </div>
                </div>

                {/* Timeline étapes */}
                <div className="relative">
                  {/* Ligne verticale */}
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/15 to-transparent" />

                  <div className="space-y-4">
                    {result.steps.map((step, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                        className={`relative flex gap-5 rounded-xl border p-4 transition-all ${
                          step.status === 'active'
                            ? 'border-gold-500/25 bg-gold-500/[0.04]'
                            : step.status === 'done'
                            ? 'border-white/[0.05] bg-white/[0.015]'
                            : 'border-white/[0.03] bg-white/[0.008]'
                        }`}
                      >
                        {/* Dot */}
                        <div className={`relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${STATUS_COLORS[step.status]}`}>
                          {step.status === 'done' && <span className="h-1.5 w-1.5 rounded-full bg-green-400" />}
                          {step.status === 'active' && <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <step.icon className="h-3.5 w-3.5 text-gold-400/50" />
                              <span className={`font-heading text-sm font-bold uppercase ${step.status === 'pending' ? 'text-white/30' : 'text-white'}`}>
                                {step.label}
                              </span>
                            </div>
                            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              step.status === 'done' ? 'border-green-500/25 text-green-400/70 bg-green-500/5'
                              : step.status === 'active' ? 'border-gold-500/30 text-gold-400/80 bg-gold-500/8'
                              : 'border-white/8 text-white/20'
                            }`}>
                              {STATUS_LABEL[step.status]}
                            </span>
                          </div>
                          <div className="mt-1.5 flex flex-wrap gap-4">
                            <span className="flex items-center gap-1 text-xs text-white/28">
                              <MapPin className="h-3 w-3 text-gold-400/35" /> {step.location}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-white/28">
                              <Clock className="h-3 w-3 text-gold-400/35" /> {step.date}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-gold-500/10 bg-gold-500/[0.03] p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/50" />
                  <p className="text-xs text-white/30 leading-relaxed">
                    Alertes SMS et email automatiques à chaque changement de statut. Contactez notre équipe pour toute question : <span className="text-gold-400/55">transit@el-bomi.com</span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* État initial */}
            {!result && !notFound && !loading && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="mx-auto max-w-lg text-center"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-500/12 bg-white/[0.02]">
                  <Package className="h-10 w-10 text-gold-400/25" />
                </div>
                <p className="text-white/25">Entrez votre numéro de tracking ci-dessus pour localiser votre cargaison.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact pour support */}
      <section className="bg-[#0B1E3D] py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/28 text-sm">Besoin d&apos;assistance ? <a href="mailto:transit@el-bomi.com" className="text-gold-400/70 hover:text-gold-400 transition-colors">transit@el-bomi.com</a> · <a href="tel:+22527000000" className="text-gold-400/70 hover:text-gold-400 transition-colors">+225 27 00 00 00</a></p>
        </div>
      </section>
    </div>
  );
}
