'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      rotateY: dir < 0 ? 15 : -15,
      scale: 0.9,
    }),
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative section-padding overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[5%] w-40 h-40 bg-accent-500/[0.03] rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-accent-600/[0.04] rounded-full blur-[60px]"
        />
      </div>

      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            La confiance de nos{' '}
            <span className="text-gradient">partenaires</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
          <div className="glass-card p-8 md:p-12 min-h-[280px] flex items-center" style={{ transformStyle: 'preserve-3d' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-accent-500/30 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-heading font-bold text-white">
                    {testimonials[current].name}
                  </div>
                  <div className="text-white/40 text-sm">
                    {testimonials[current].role} — {testimonials[current].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-accent-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
