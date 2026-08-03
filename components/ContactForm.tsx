'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card flex h-full flex-col items-center justify-center p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20">
          <Send className="h-8 w-8 text-gold-400" />
        </div>
        <h3 className="mb-2 font-heading text-xl font-bold text-white">Message envoyé</h3>
        <p className="text-sm text-white/50">
          Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
      <h2 className="mb-2 font-heading text-xl font-bold text-white">Envoyez-nous un message</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-white/60">Nom complet</label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-500/50"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/60">Email</label>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-500/50"
            placeholder="vous@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-white/60">Téléphone</label>
          <input
            type="tel"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-500/50"
            placeholder="+225 ..."
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/60">Filiale concernée</label>
          <select className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold-500/50">
            <option value="" className="bg-navy-900">Sélectionner (optionnel)</option>
            <option value="construction" className="bg-navy-900">Construction & Infrastructures</option>
            <option value="energie" className="bg-navy-900">Énergie & Électricité</option>
            <option value="informatique-telecoms" className="bg-navy-900">Informatique & Télécoms</option>
            <option value="transit-logistique" className="bg-navy-900">Transit & Logistique</option>
            <option value="medical" className="bg-navy-900">Distribution Médicale</option>
            <option value="agriculture" className="bg-navy-900">Agriculture & Ressources</option>
            <option value="immobilier" className="bg-navy-900">Immobilier & Patrimoine</option>
            <option value="investissement-assurance" className="bg-navy-900">Investissement & Assurance</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/60">Sujet</label>
        <input
          type="text"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-500/50"
          placeholder="Objet de votre demande"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/60">Message</label>
        <textarea
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-500/50"
          placeholder="Décrivez votre besoin..."
        />
      </div>

      <button type="submit" className="btn-gold w-full justify-center">
        Envoyer le message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
