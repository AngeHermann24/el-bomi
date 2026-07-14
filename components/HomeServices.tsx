'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Hammer, Building2, Landmark } from 'lucide-react';
import Tilt3D from './Tilt3D';
import ScrollReveal3D from './ScrollReveal3D';

const servicesData = [
  { icon: Building2, title: 'Gros Œuvre', desc: 'Fondations, structures béton armé, élévations', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { icon: Landmark, title: 'Génie Civil', desc: 'Ouvrages d\'art, ponts, infrastructures', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80' },
  { icon: Hammer, title: 'Rénovation', desc: 'Transformation, réhabilitation, extension', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80' },
];

export default function HomeServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {servicesData.map((item, i) => (
        <ScrollReveal3D key={i} delay={i * 0.15} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
          <Tilt3D intensity={10} className="group relative h-[400px] rounded-3xl overflow-hidden">
            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8" style={{ transform: 'translateZ(30px)' }}>
              <item.icon className="w-10 h-10 text-accent-400 mb-3 drop-shadow-lg" />
              <h3 className="text-2xl font-heading font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-500/30 rounded-3xl transition-all duration-500" />
            {/* 3D shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
          </Tilt3D>
        </ScrollReveal3D>
      ))}
    </div>
  );
}
