import React from 'react';
import { motion } from 'framer-motion';

interface ConnectionProps {
  icon: React.ReactNode;
  title: string;
  lawApps: string[];
  techApps: string[];
  takeaway: string;
  index: number;
}

export const ConnectionCard: React.FC<ConnectionProps> = ({
  icon, title, lawApps, techApps, takeaway, index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-brand-surface/50 border border-brand-text/5 rounded-2xl p-8 hover:bg-brand-surface hover:border-brand-text/10 transition-all relative overflow-hidden group backdrop-blur-sm"
    >

      {/* Icon */}
      <motion.div
        className="flex items-center gap-4 mb-6 relative z-10"
        whileHover={{ x: 5 }}
      >
        <div className="p-3 bg-brand-text/5 rounded-xl text-brand-text group-hover:text-brand-orange transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold uppercase text-brand-text tracking-wide">{title}</h3>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 relative z-10">
        {/* Law Applications */}
        <div className="mb-4">
          <div className="text-xs font-bold uppercase text-brand-blue mb-3 tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> In Law
          </div>
          <div className="space-y-2 text-sm text-brand-muted">
            {lawApps.map((app, i) => (
              <div key={i} className="leading-relaxed">
                {app}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Applications */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase text-brand-orange mb-3 tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> In Tech
          </div>
          <div className="space-y-2 text-sm text-brand-muted">
            {techApps.map((app, i) => (
              <div key={i} className="leading-relaxed">
                {app}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Takeaway */}
      <div className="pt-6 border-t border-brand-text/5 mt-2">
        <p className="text-sm font-medium text-brand-text/90 italic">
          "{takeaway}"
        </p>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};