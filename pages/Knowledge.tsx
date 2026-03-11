import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Code, Gavel, Heart, Search, ArrowUpRight, Hash, Filter, Terminal } from 'lucide-react';
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
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-12 border-b border-brand-text/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-blue tracking-wider shadow-glass">
              Knowledge Base
            </div>
            <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.9] mb-8 tracking-tight">
              The Codex
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-3xl font-light leading-relaxed mb-4">
              Everything I know about automating legal work, building systems, and thinking clearly—documented so you don't have to figure it out the hard way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTROLS SECTION */}
      <section className="py-8 border-b border-brand-text/5 bg-brand-surface/30 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setFilter(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold uppercase text-xs transition-all border ${isActive
                      ? 'bg-brand-blue text-brand-surface border-brand-blue shadow-glow'
                      : 'bg-brand-text/5 text-brand-muted border-brand-text/10 hover:bg-brand-text/10 hover:text-brand-text'
                    }`}
                >
                  <Icon size={14} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto min-w-[300px] group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-brand-blue transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-brand-text/10 rounded-xl text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-blue/50 focus:bg-black/60 transition-all shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, i) => (
                <motion.div
                  layout
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-brand-surface border border-brand-text/5 p-8 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] hover:border-brand-text/10 hover:-translate-y-1 transition-all group cursor-pointer relative overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-[50px] transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none" />

                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block px-2 py-1 bg-brand-text/5 border border-brand-text/10 rounded text-[10px] font-bold uppercase text-brand-blue`}>
                        {article.category}
                      </span>
                      <span className="text-[10px] font-medium text-brand-muted/70">
                        {article.date} • {article.readTime}
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-brand-muted group-hover:text-brand-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text group-hover:text-brand-blue transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-sm text-brand-muted mb-6 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-brand-text/5">
                    {article.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase text-brand-muted/50 px-2 py-0.5 bg-black/20 rounded-full border border-brand-text/5">#{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 opacity-50">
              <Terminal size={48} className="mx-auto mb-4 text-brand-muted" />
              <h3 className="text-xl font-bold uppercase text-brand-text mb-2">No Results Found</h3>
              <p className="font-mono text-sm text-brand-muted">Try adjusting your search queries.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};