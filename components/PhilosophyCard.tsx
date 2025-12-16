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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] flex flex-col h-full group hover:-translate-y-2 transition-transform"
    >
      {/* Animated icon container */}
      <motion.div 
        className="w-16 h-16 bg-brand-teal border-2 border-black dark:border-white flex items-center justify-center text-white mb-6 shadow-brutal-sm relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Rotating background effect */}
        <motion.div
          className="absolute inset-0 bg-brand-amber"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 2, opacity: 0.3 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Icon with pulse */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          {icon}
        </motion.div>
      </motion.div>
      
      {/* Title with underline animation */}
      <h3 className="text-2xl font-black uppercase mb-4 text-black dark:text-white relative">
        {title}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-brand-teal"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
        />
      </h3>
      
      {/* Description with staggered reveal */}
      <motion.p 
        className="font-mono text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-grow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
      >
        {description}
      </motion.p>

      {/* Bottom accent bar */}
      <motion.div
        className="h-1 bg-brand-teal mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.7, duration: 0.4 }}
      />
    </motion.div>
  );
};