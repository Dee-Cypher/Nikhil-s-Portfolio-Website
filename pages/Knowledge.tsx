import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Code, Gavel, Heart, Search, ArrowUpRight, Hash } from 'lucide-react';
import { ARTICLES } from '../constants';

export const Knowledge: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', icon: Hash },
    { name: 'Legal Tech Insights', icon: Gavel },
    { name: 'Automation Tutorials', icon: Code },
    { name: 'No-Code Tips', icon: Heart },
    { name: 'Productivity & Systems', icon: Book },
  ];

  const filteredArticles = ARTICLES.filter(article => {
    const matchesFilter = filter === 'All' || article.category === filter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-black dark:text-white">
      {/* Header */}
      <div className="border-b-4 border-black dark:border-white pb-8 mb-12">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
          The Codex
        </h1>
        <p className="font-mono text-xl max-w-2xl text-gray-700 dark:text-gray-300">
          Everything I know about automating legal work, building systems, and thinking clearly—documented so you don't have to figure it out the hard way.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 items-start md:items-center justify-between">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white font-bold uppercase text-sm shadow-brutal dark:shadow-[2px_2px_0px_0px_#ffffff] hover:translate-y-[1px] hover:shadow-none transition-all ${
                  filter === cat.name
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white text-black dark:bg-black dark:text-white hover:bg-brand-teal hover:text-white'
                }`}
              >
                <Icon size={14} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search: automation, legal tech..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 pl-10 pr-4 py-2 border-2 border-black dark:border-white bg-white dark:bg-black focus:outline-none focus:shadow-brutal dark:focus:shadow-[2px_2px_0px_0px_#ffffff] font-mono text-sm"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredArticles.map((article) => (
            <motion.div
              layout
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-brutal-lg dark:hover:shadow-[8px_8px_0px_0px_#ffffff] hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-2 py-1 bg-brand-teal text-white border border-black dark:border-white text-xs font-bold uppercase">
                  {article.category}
                </span>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                  {article.date} • {article.readTime}
                </span>
              </div>
              
              <h3 className="text-2xl font-black uppercase mb-3 leading-tight group-hover:text-brand-teal transition-colors">
                {article.title}
              </h3>
              
              <p className="font-mono text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                {article.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map(tag => (
                   <span key={tag} className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">#{tag}</span>
                ))}
              </div>

              <div className="flex items-center font-bold uppercase text-sm group-hover:underline decoration-2 underline-offset-4">
                Read Entry <ArrowUpRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-black dark:border-white opacity-50">
          <p className="font-mono text-lg">Nothing here yet. Try a different search.</p>
        </div>
      )}
    </div>
  );
};