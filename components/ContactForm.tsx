'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  budget: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Nom requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!formData.message.trim()) newErrors.message = 'Message requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        </motion.div>
        <h3 className="text-2xl font-heading font-bold text-white mb-3">
          Demande envoyée avec succès !
        </h3>
        <p className="text-white/50 max-w-md mx-auto">
          Nous avons bien reçu votre demande de devis. Notre équipe vous contactera sous 24h ouvrées.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-white/60 text-sm font-medium mb-2">
            Nom complet *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jean Dupont"
              className={`w-full pl-11 pr-4 py-3 bg-white/5 border ${
                errors.name ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
              } rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all`}
            />
          </div>
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-white/60 text-sm font-medium mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jean@entreprise.com"
              className={`w-full pl-11 pr-4 py-3 bg-white/5 border ${
                errors.email ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
              } rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all`}
            />
          </div>
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-white/60 text-sm font-medium mb-2">
            Téléphone *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+33 6 12 34 56 78"
              className={`w-full pl-11 pr-4 py-3 bg-white/5 border ${
                errors.phone ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
              } rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all`}
            />
          </div>
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-white/60 text-sm font-medium mb-2">
            Entreprise
          </label>
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nom de votre entreprise"
              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 focus:border-accent-500 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-white/60 text-sm font-medium mb-2">
            Type de projet
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent-500 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all appearance-none"
          >
            <option value="" className="bg-anthracite-900">Sélectionnez un service</option>
            <option value="gros-oeuvre" className="bg-anthracite-900">Gros Œuvre</option>
            <option value="genie-civil" className="bg-anthracite-900">Génie Civil</option>
            <option value="renovation" className="bg-anthracite-900">Rénovation</option>
            <option value="amenagement" className="bg-anthracite-900">Aménagement</option>
            <option value="demolition" className="bg-anthracite-900">Démolition</option>
            <option value="construction-durable" className="bg-anthracite-900">Construction Durable</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-white/60 text-sm font-medium mb-2">
            Budget estimé
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-accent-500 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all appearance-none"
          >
            <option value="" className="bg-anthracite-900">Sélectionnez une fourchette</option>
            <option value="50-100k" className="bg-anthracite-900">50 000 € - 100 000 €</option>
            <option value="100-500k" className="bg-anthracite-900">100 000 € - 500 000 €</option>
            <option value="500k-1m" className="bg-anthracite-900">500 000 € - 1 000 000 €</option>
            <option value="1m+" className="bg-anthracite-900">+ de 1 000 000 €</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-white/60 text-sm font-medium mb-2">
          Description du projet *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/30" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet, vos besoins, vos contraintes..."
            rows={5}
            className={`w-full pl-11 pr-4 py-3 bg-white/5 border ${
              errors.message ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
            } rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all resize-none`}
          />
        </div>
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25"
      >
        <Send className="w-5 h-5" />
        Envoyer ma demande de devis
      </motion.button>
    </form>
  );
}
