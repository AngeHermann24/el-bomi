'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      <div className="relative w-48 h-48 mx-auto mb-5 rounded-2xl overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="192px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-lg font-heading font-bold text-white mb-1">
        {member.name}
      </h3>
      <p className="text-accent-400 text-sm font-medium">
        {member.role}
      </p>
    </motion.div>
  );
}
