'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className="group relative overflow-hidden rounded-2xl h-full">
        <Link href={`/projets/${project.slug}`} className="block relative h-full">
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? 'h-[500px]' : 'h-[300px]'}`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-full bg-accent-500/10 backdrop-blur-md border border-accent-500/20 text-accent-400 text-xs font-semibold">
                {project.category}
              </span>
            </div>

            {/* Arrow on hover */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className={`font-heading font-bold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300 ${featured ? 'text-2xl' : 'text-lg'}`}>
              {project.title}
            </h3>
            <p className="text-white/50 text-sm mb-3 line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex items-center gap-4 text-white/30 text-xs">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
