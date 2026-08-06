import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Mail, Phone, ArrowLeft } from 'lucide-react';
import IconRenderer from './IconRenderer';
import GoldRibbon from './GoldRibbon';
import type { Subsidiary } from '@/types';

interface SubsidiaryPageProps {
  subsidiary: Subsidiary;
  children?: React.ReactNode;
}

export default function SubsidiaryPage({ subsidiary, children }: SubsidiaryPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-900">
        <Image
          src={subsidiary.image}
          alt={subsidiary.shortName}
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/50" />
        <div className="absolute inset-x-0 bottom-0 h-52">
          <GoldRibbon variant="wave" opacity={0.3} className="h-52" />
        </div>

        <div className="container-max relative z-10 px-4 pb-20 pt-40 sm:px-6 lg:px-8">
          <Link
            href="/#filiales"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les filiales
          </Link>

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/10 backdrop-blur-md">
            <IconRenderer name={subsidiary.icon} className="h-8 w-8 text-gold-400" />
          </div>

          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {subsidiary.tagline}
          </span>
          <h1 className="max-w-4xl font-heading text-4xl font-black uppercase leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {subsidiary.name}
          </h1>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-light py-12 sm:py-20 lg:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                Présentation
              </span>
              <h2 className="font-heading text-3xl font-black uppercase leading-tight text-navy-900 md:text-4xl">
                {subsidiary.shortName}
              </h2>
              <div className="gold-rule mt-6 max-w-[120px]" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-navy-900/70">{subsidiary.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="section-padding relative overflow-hidden bg-navy-900">
        <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-gold-500/[0.05] blur-[120px]" />

        <div className="container-max relative">
          <div className="mb-14 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Nos activités
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Ce que nous <span className="text-gradient">réalisons</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {subsidiary.activities.map((activity) => (
              <div
                key={activity}
                className="group flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-gold-500/40 hover:bg-white/[0.04]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gold-500/30 bg-gold-500/10 transition-colors duration-300 group-hover:bg-gold-500">
                  <Check className="h-3.5 w-3.5 text-gold-400 transition-colors duration-300 group-hover:text-navy-900" />
                </span>
                <span className="text-sm leading-relaxed text-white/70">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}

      {/* Contact filiale */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-navy-900 p-10 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/[0.07] blur-[100px]" />

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                  Un projet pour cette <span className="text-gradient">filiale</span> ?
                </h2>
                <p className="leading-relaxed text-white/60">
                  Contactez directement l&apos;équipe {subsidiary.shortName} pour échanger sur
                  votre besoin et obtenir une proposition.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${subsidiary.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-gold-500/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10">
                    <Mail className="h-5 w-5 text-gold-400" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-white transition-colors group-hover:text-gold-300">
                      {subsidiary.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${subsidiary.phone.replace(/[^0-9+]/g, '')}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-gold-500/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10">
                    <Phone className="h-5 w-5 text-gold-400" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      Téléphone
                    </span>
                    <span className="text-sm font-semibold text-white transition-colors group-hover:text-gold-300">
                      {subsidiary.phone}
                    </span>
                  </span>
                </a>

                <Link href="/contact" className="btn-gold group w-full justify-center">
                  Formulaire de contact
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
