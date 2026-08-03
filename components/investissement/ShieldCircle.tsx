'use client';

import { motion } from 'framer-motion';

interface ShieldCircleProps {
  className?: string;
  size?: number;
}

export default function ShieldCircle({ className = '', size = 200 }: ShieldCircleProps) {
  return (
    <div className={`pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <linearGradient id="shield-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#E8C766" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A227" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#shield-gold)"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Inner ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="url(#shield-gold)"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          strokeDasharray="3 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
        />

        {/* Shield shape */}
        <motion.path
          d="M100 55 L130 70 L130 100 Q130 130 100 145 Q70 130 70 100 L70 70 Z"
          fill="none"
          stroke="url(#shield-gold)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
        />

        {/* Checkmark inside shield */}
        <motion.path
          d="M88 100 L96 108 L114 90"
          fill="none"
          stroke="#E8C766"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3, ease: 'easeInOut' }}
        />

        {/* Rotating accent */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#E8C766"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          strokeDasharray="2 30"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        />
      </svg>
    </div>
  );
}
