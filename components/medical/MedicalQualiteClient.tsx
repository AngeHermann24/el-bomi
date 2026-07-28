'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle2, ArrowRight, Globe, Microscope, HeartPulse, Users, Star, FileCheck } from 'lucide-react';

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Système de management de la qualité — processus de distribution médicale.', icon: Award },
  { name: 'Normes OMS', desc: 'Conformité aux bonnes pratiques de distribution de l\'OMS.', icon: Globe },
  { name: 'MSDS Côte d\'Ivoire', desc: 'Agrément du Ministère de la Santé et de l\'Hygiène Publique.', icon: Shield },
  { name: 'Marquage CE', desc: 'Tous nos équipements respectent les directives européennes 93/42/CEE.', icon: FileCheck },
  { name: 'Pharmacovigilance', desc: 'Système de surveillance et de traçabilité des produits pharmaceutiques.', icon: Microscope },
  { name: 'Accréditation HAS', desc: 'Procédure d\'évaluation de la qualité des centres de dialyse.', icon: Star },
];

const processus = [
  { step: '01', title: 'Sélection rigoureuse', desc: 'Seuls les fournisseurs certifiés CE/ISO sont référencés. Audit technique avant tout partenariat.' },
  { step: '02', title: 'Contrôle à réception', desc: 'Vérification de chaque livraison : conditionnement, températures, dates de péremption, traçabilité.' },
  { step: '03', title: 'Stockage conforme', desc: 'Entrepôts à température contrôlée, accès sécurisé, FIFO systématique, inventaire mensuel.' },
  { step: '04', title: 'Installation certifiée', desc: 'Techniciens biomédicaux certifiés par les fabricants pour chaque installation et mise en service.' },
  { step: '05', title: 'Formation & support', desc: 'Formation du personnel soignant incluse. Hotline SAV 24h/24, technicien sur site sous 4h.' },
  { step: '06', title: 'Amélioration continue', desc: 'Indicateurs qualité mensuels, revues de direction trimestrielles, audits internes et externes.' },
];

const engagements = [
  { icon: HeartPulse, title: 'Sécurité patient', value: '100%', sub: 'des matériels tracés et certifiés' },
  { icon: CheckCircle2, title: 'SAV réactif', value: '4h', sub: 'délai d\'intervention garanti' },
  { icon: Users, title: 'Équipe formée', value: '50+', sub: 'techniciens biomédicaux certifiés' },
  { icon: Shield, title: 'Satisfaction', value: '98%', sub: 'taux de satisfaction clients' },
];

export default function MedicalQualiteClient() {
  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* Hero */}
      <section className="relative min-h-[54vh] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=85" alt="Qualité médicale" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/96 via-white/55 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Notre engagement</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold text-[#0B1E3D] md:text-6xl lg:text-7xl"
          >
            Engagement<br />
            <span className="text-[#4A7C7C]">qualité</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-[#0B1E3D]/50"
          >La qualité n&apos;est pas une option — c&apos;est le fondement de chacune de nos actions pour la santé des Ivoiriens.</motion.p>
        </div>
      </section>

      {/* KPIs qualité */}
      <section className="bg-[#0B1E3D] py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {engagements.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-2 py-4 text-center"
              >
                <e.icon className="h-6 w-6 text-[#4A7C7C]" strokeWidth={1.8} />
                <p className="font-heading text-3xl font-bold text-[#C9A227]">{e.value}</p>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-white/60">{e.title}</p>
                <p className="text-xs text-white/30">{e.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F7F7F5] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Certifications</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#0B1E3D]">Agréments & certifications</h2>
            <p className="mx-auto mt-3 max-w-lg text-[#0B1E3D]/45">Chaque activité est encadrée par des normes internationales et nationales strictes.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group flex gap-4 rounded-2xl border border-[#0B1E3D]/6 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4A7C7C]/15 bg-[#4A7C7C]/7 transition-all group-hover:bg-[#4A7C7C]/12">
                  <c.icon className="h-5 w-5 text-[#4A7C7C]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="mb-1 inline-flex items-center gap-1.5 rounded-md border border-[#C9A227]/20 bg-[#C9A227]/6 px-2 py-0.5">
                    <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-[#C9A227]">{c.name}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#0B1E3D]/50">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus qualité */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Notre méthode</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#0B1E3D]">Processus qualité de A à Z</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processus.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl border border-[#0B1E3D]/6 bg-[#F7F7F5] p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 font-heading text-4xl font-bold text-[#0B1E3D]/[0.06] group-hover:text-[#C9A227]/20 transition-colors">{p.step}</div>
                <h3 className="font-heading text-base font-bold text-[#0B1E3D]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0B1E3D]/48">{p.desc}</p>
                <div className="absolute bottom-0 inset-x-0 h-px rounded-b-2xl bg-gradient-to-r from-transparent via-[#4A7C7C]/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section humaine */}
      <section className="relative overflow-hidden py-24">
        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&q=80" alt="Équipe médicale" fill className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/80 to-white/20" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-lg">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Notre équipe</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#0B1E3D] md:text-5xl">Des femmes et des hommes au service de la santé</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#0B1E3D]/50">
              Plus de 200 collaborateurs — ingénieurs biomédicaux, pharmaciens, techniciens et infirmiers — s&apos;engagent chaque jour pour que chaque patient reçoive les meilleurs soins possibles.
            </p>
            <Link href="/filiales/medical/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B1E3D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0B1E3D]/85 hover:shadow-[0_8px_30px_rgba(11,30,61,0.18)]"
            >
              Nous rejoindre <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
