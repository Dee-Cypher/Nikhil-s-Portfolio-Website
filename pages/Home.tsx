import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Cpu, MousePointer2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { SkillsMarquee } from '../components/SkillsMarquee';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Legal Tech Automation');
  const categories = ['Legal Tech Automation', 'Workflow Systems', 'AI-Powered Tools', 'Personal Ventures'];
  
  const activeProject = PROJECTS.find(p => p.category === activeTab) || PROJECTS[0];

  // Parallax Setup
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black transition-colors duration-300" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 border-b-2 border-black dark:border-white">
        
        {/* Floating Background Elements (Parallax) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y: y2, rotate }}
            className="absolute top-20 right-[10%] opacity-20 dark:opacity-10 text-black dark:text-white"
          >
            <Cpu size={120} strokeWidth={1} />
          </motion.div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute bottom-40 left-[5%] opacity-20 dark:opacity-10 text-brand-teal"
          >
            <Bot size={140} strokeWidth={1} />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white bg-brand-amber text-black shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] mb-8 transform -rotate-2">
              <MousePointer2 size={16} />
              <span className="font-mono font-bold uppercase text-xs">Building Systems That Think</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black dark:text-white leading-[0.95] mb-8 uppercase">
              I Automate What<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-600 outline-text">Others Do</span><br/>
              Manually.
            </h1>
            
            <p className="text-xl md:text-2xl font-mono text-black dark:text-gray-300 max-w-3xl mb-12 border-l-8 border-black dark:border-white pl-6 py-2 bg-brand-gray/50 dark:bg-zinc-900/50">
              Legal tech professional by day. Automation architect always. I document every system I build—so you can steal my playbooks or hire me to build yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/knowledge"
                className="px-8 py-5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase text-lg border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3"
              >
                Steal My Playbooks <ArrowRight size={24} />
              </Link>
              <Link 
                to="/projects"
                className="px-8 py-5 bg-white dark:bg-black text-black dark:text-white font-bold uppercase text-lg border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center"
              >
                See What I've Shipped
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white">Systems That<br/>Actually Ship</h2>
            
            {/* Retro Tabs */}
            <div className="relative z-20 flex flex-col md:flex-row border-2 border-black dark:border-white bg-white dark:bg-black shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] w-full lg:w-auto">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`flex-1 px-6 py-3 font-bold uppercase text-sm md:text-base transition-all hover:bg-brand-teal hover:text-white border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-white last:border-b-0 md:last:border-r-0 ${
                    activeTab === cat 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'bg-white text-black dark:bg-black dark:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Window */}
          <div className="relative min-h-[500px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.3 }}
                 className="grid md:grid-cols-2 gap-8 items-center"
               >
                 {/* Left: Window Image */}
                 <div className="border-2 border-black dark:border-white bg-white dark:bg-zinc-800 shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff] p-2">
                   <div className="h-8 bg-brand-teal border-b-2 border-black dark:border-white flex items-center justify-between px-2 mb-2 text-white">
                      <span className="font-mono text-xs font-bold uppercase">{activeProject.title}.preview</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white border border-black"></div>
                        <div className="w-3 h-3 bg-white border border-black"></div>
                      </div>
                   </div>
                   <div className="aspect-[4/3] overflow-hidden border-2 border-black dark:border-white bg-gray-100 dark:bg-gray-900">
                     <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                   </div>
                 </div>

                 {/* Right: Description */}
                 <div className="md:pl-10 text-black dark:text-white">
                   <div className="inline-block bg-brand-amber border-2 border-black dark:border-white px-3 py-1 font-mono text-xs font-bold uppercase mb-4 shadow-brutal-sm dark:shadow-[2px_2px_0px_0px_#ffffff] text-black">
                     {activeProject.category}
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6">
                     {activeProject.title}
                   </h3>
                   <p className="font-mono text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
                     {activeProject.description}
                   </p>
                   
                   <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="border-2 border-black dark:border-white p-4 bg-white dark:bg-black">
                        <div className="text-xs font-bold uppercase text-gray-500 mb-1">Impact</div>
                        <div className="font-bold text-lg leading-tight">{activeProject.impact}</div>
                      </div>
                      <div className="border-2 border-black dark:border-white p-4 bg-white dark:bg-black">
                        <div className="text-xs font-bold uppercase text-gray-500 mb-1">Timeline</div>
                        <div className="font-bold text-lg leading-tight">{activeProject.timeline}</div>
                      </div>
                   </div>

                   <Link 
                     to="/projects"
                     className="inline-flex items-center gap-3 font-bold text-xl hover:text-brand-teal uppercase decoration-4 underline underline-offset-4"
                   >
                     View Case Study <ArrowRight size={24} />
                   </Link>
                 </div>
               </motion.div>
             </AnimatePresence>

             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-grid-pattern opacity-20 -z-10" />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 border-b-2 border-black dark:border-white bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-black dark:text-white mb-6 tracking-tighter">
            The Arsenal
          </h2>
          <p className="font-mono text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Every tool earns its place. No bloatware.
          </p>
        </div>
        
        <SkillsMarquee />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-black px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center border-2 border-black dark:border-white p-8 md:p-16 shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff] bg-brand-gray dark:bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-teal via-brand-amber to-red-500 border-b-2 border-black dark:border-white" />
          
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 text-black dark:text-white">Still Doing That<br/>Manually?</h2>
          <p className="font-mono text-lg mb-10 max-w-lg mx-auto text-black dark:text-gray-300">
            Most workflows I've seen have at least 10 hours of hidden waste per week. Let's find yours.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 bg-brand-teal text-white font-bold uppercase text-xl border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Get a Free Workflow Audit
          </Link>
        </div>
      </section>
    </div>
  );
};