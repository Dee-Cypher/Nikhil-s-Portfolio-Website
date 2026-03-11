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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-brand-surface border border-brand-text/5 rounded-2xl p-6 hover:bg-brand-text/5 transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
    >

      {/* Category & Time */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
          {article.category}
        </span>
        <div className="flex items-center gap-1 text-xs text-brand-muted">
          <Clock size={12} />
          {article.readTime}
        </div>
      </div>

      {/* Title */}
      <h4 className="text-xl font-bold leading-tight mb-3 text-brand-text group-hover:text-brand-blue transition-colors">
        {article.title}
      </h4>

      {/* Summary */}
      <p className="text-sm text-brand-muted/80 line-clamp-3 mb-6 flex-grow leading-relaxed">
        {article.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags.map((tag) => (
          <span key={tag} className="text-[10px] uppercase font-bold text-gray-400 border border-brand-text/10 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>

      {/* Read More */}
      <div className="flex items-center gap-2 text-sm font-bold text-brand-text group-hover:text-brand-blue transition-colors mt-auto">
        Read Entry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};