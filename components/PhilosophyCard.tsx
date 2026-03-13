import React from 'react';
import { motion } from 'framer-motion';

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
  icon, title, description, index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass-card bg-brand-surface border border-brand-text/10 rounded-2xl p-8 hover:border-brand-orange/40 hover:shadow-glow transition-all group relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <motion.div
        className="w-16 h-16 bg-brand-text/5 rounded-2xl flex items-center justify-center text-brand-orange mb-8 relative z-10"
        whileHover={{ rotate: 10, scale: 1.05 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brand-muted leading-relaxed flex-grow relative z-10 text-sm">
        {description}
      </p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-orange w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};