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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-8 shadow-brutal-lg hover:-translate-y-1 transition-transform relative overflow-hidden group"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      {/* Icon */}
      <motion.div
        className="flex items-center gap-3 mb-6 text-black dark:text-white relative z-10"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-black uppercase">{title}</h3>
      </motion.div>

      {/* Law Applications */}
      <div className="mb-4 relative z-10">
        <div className="font-mono text-xs font-bold uppercase text-brand-teal mb-2">
          In Law:
        </div>
        <div className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-brand-teal">
          {lawApps.map((app, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              • {app}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Applications */}
      <div className="mb-6 relative z-10">
        <div className="font-mono text-xs font-bold uppercase text-brand-amber mb-2">
          In Automation:
        </div>
        <div className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-brand-amber">
          {techApps.map((app, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              • {app}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Takeaway */}
      <motion.div 
        className="pt-4 border-t-2 border-black dark:border-white font-mono text-sm font-bold text-black dark:text-white relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        → {takeaway}
      </motion.div>

      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-brand-teal opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};