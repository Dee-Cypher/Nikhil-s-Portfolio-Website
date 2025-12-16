import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

interface ArticlePreviewCardProps {
  article: {
    id: string;
    category: string;
    title: string;
    summary: string;
    readTime: string;
    tags: string[];
    link: string;
  };
  index: number;
}

export const ArticlePreviewCard: React.FC<ArticlePreviewCardProps> = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-brutal-lg dark:hover:shadow-[8px_8px_0px_0px_#ffffff] transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
    >
      {/* Top color accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2 bg-brand-teal"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
      />

      {/* Category badge with pulse */}
      <div className="flex items-center justify-between mb-3">
        <motion.div
          className="inline-block px-2 py-1 bg-brand-teal text-white border border-black dark:border-white font-mono text-[10px] uppercase font-bold"
          whileHover={{ scale: 1.05 }}
        >
          {article.category}
        </motion.div>
        
        {/* Read time with icon */}
        <div className="flex items-center gap-1 font-mono text-xs text-gray-500 dark:text-gray-400">
          <Clock size={12} />
          {article.readTime}
        </div>
      </div>

      {/* Title with gradient text on hover */}
      <h4 className="text-xl font-black uppercase leading-tight mb-3 text-black dark:text-white group-hover:text-brand-teal transition-colors">
        {article.title}
      </h4>

      {/* Summary with reveal animation */}
      <motion.p 
        className="font-mono text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 border-l-2 border-gray-300 dark:border-gray-700 pl-3 flex-grow"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        {article.summary}
      </motion.p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag, i) => (
          <motion.span 
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 + (i * 0.05) }}
            className="font-mono text-[10px] uppercase text-gray-500 dark:text-gray-400 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 px-2 py-1"
          >
            #{tag}
          </motion.span>
        ))}
      </div>

      {/* Read more indicator */}
      <motion.div
        className="flex items-center gap-2 font-bold uppercase text-sm text-black dark:text-white group-hover:text-brand-teal transition-colors"
        whileHover={{ x: 5 }}
      >
        Read Entry <ArrowRight size={16} />
      </motion.div>

      {/* Animated corner decoration */}
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 bg-brand-teal/5"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05]
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