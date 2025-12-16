import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, Gavel, ArrowRight, Download, Scale, 
  Terminal, Check, GraduationCap, Building2, Target, Shield, 
  Zap, MessageSquare, BookOpen, Cog, Users, Mail, Wrench
} from 'lucide-react';
import { PHILOSOPHY, STATS, LAW_ARTICLES_PREVIEW, TECH_ARTICLES_PREVIEW } from '../constants';
import { StatsGrid } from '../components/AnimatedCounter';
import { InteractivePillarCard } from '../components/InteractivePillarCard';
import { ConnectionCard } from '../components/ConnectionDiagram';
import { PhilosophyCard } from '../components/PhilosophyCard';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';

// Data specifically for Home Page projects based on prompt
const HOME_PROJECTS = [
  {
    id: 'law-1',
    category: 'Law Projects',
    title: '200+ Trademark Applications Filed',
    summary: 'Complete trademark prosecution experience across diverse industries. From initial filing to office action responses to successful registration. 80% success rate in opposition proceedings.',
    stats: '200+ Applications • 80% Success Rate',
    linkText: 'View Case Studies',
    link: '#'
  },
  {
    id: 'law-2',
    category: 'Law Projects',
    title: '500+ Licensing Agreements Negotiated',
    summary: 'Trademark licensing, franchise agreements, co-branding partnerships, JV contracts. Expertise in structuring deals that protect both parties while enabling business growth.',
    stats: '500+ Agreements • Zero Disputes',
    linkText: 'View Templates',
    link: '#'
  },
  {
    id: 'law-3',
    category: 'Law Projects',
    title: 'High-Volume PI Demand Letter Drafting',
    summary: 'Currently at EvenUp drafting personal injury demand letters at scale. Medical record analysis, liability assessment, settlement valuation. Maintaining quality while working at volume.',
    stats: 'Multiple Cases Daily • AI-Assisted',
    linkText: 'Learn My Process',
    link: '#'
  },
  {
    id: 'tech-1',
    category: 'Tech Projects',
    title: 'Automated Trademark Filing System',
    summary: 'Google Sheets + Apps Script tool that auto-generates trademark application drafts from client intake forms. Reduces filing prep time from 45 minutes to 5 minutes.',
    stats: 'Live • In Use',
    tags: ['Google Apps Script', 'Google Sheets'],
    linkText: 'View Tutorial + Code',
    link: '#'
  },
  {
    id: 'tech-2',
    category: 'Tech Projects',
    title: '10-Point Automated QA for PI Demand Letters',
    summary: 'Quality assurance system that catches common errors in personal injury demand letters: missing exhibits, inconsistent dates, calculation mistakes. Built to maintain quality at scale.',
    stats: 'In Development',
    tags: ['Google Apps Script', 'Custom Checklist'],
    linkText: 'Read Build Log',
    link: '#'
  },
  {
    id: 'tech-3',
    category: 'Tech Projects',
    title: 'Searchable Contract Clause Database',
    summary: 'Notion-based searchable library of pre-approved contract clauses. Tagged by contract type, risk level, jurisdiction. Turns contract drafting from "start from scratch" to "assemble from library."',
    stats: 'Beta',
    tags: ['Notion', 'Custom Properties'],
    linkText: 'View Structure',
    link: '#'
  },
  {
    id: 'tech-4',
    category: 'Tech Projects',
    title: 'Case Law Research Scraper',
    summary: 'Tool to automate case law research by scraping legal databases for relevant precedents. Organizes by issue, jurisdiction, outcome. Early stage—documenting the learning process.',
    stats: 'Planning',
    tags: ['Python (Learning)', 'Web Scraping'],
    linkText: 'Follow the Journey',
    link: '#'
  }
];

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Cog, Users
};

export const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 100]);
  
  const [projectFilter, setProjectFilter] = useState('All');

  const displayedProjects = projectFilter === 'All' 
    ? HOME_PROJECTS 
    : HOME_PROJECTS.filter(p => p.category === projectFilter);

  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 border-b-2 border-black dark:border-white">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div style={{ y: y2 }} className="absolute top-20 right-[10%] opacity-10 dark:opacity-5 text-black dark:text-white">
            <Scale size={120} strokeWidth={1} />
          </motion.div>
          <motion.div style={{ y: y1 }} className="absolute bottom-40 left-[5%] opacity-10 dark:opacity-5 text-brand-teal">
            <Gavel size={140} strokeWidth={1} />
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute top-40 left-[15%] opacity-10 dark:opacity-5 text-brand-amber">
            <Terminal size={130} strokeWidth={1} />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white bg-brand-amber text-black shadow-brutal-sm mb-8 transform -rotate-2">
              <Award size={16} />
              <span className="font-mono font-bold uppercase text-xs">Registered Trademark Attorney • Bar Council of Delhi</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black dark:text-white leading-[0.95] mb-8 uppercase">
              Lawyer Building <br/>
              <span className="text-brand-teal">Legal Automation</span>
            </h1>
            
            <div className="border-l-8 border-black dark:border-white pl-6 py-2 bg-brand-gray/50 dark:bg-zinc-900/50 max-w-3xl mb-12">
              <p className="text-lg md:text-xl font-mono text-black dark:text-gray-300 leading-relaxed">
                Registered Trademark Attorney (Bar Council of Delhi) • Personal Injury Demand Letter Specialist • Automation Enthusiast
              </p>
              <p className="text-sm md:text-base font-mono font-bold text-black dark:text-white mt-4 border-t-2 border-dashed border-black dark:border-white/20 pt-2">
                Currently at EvenUp drafting PI demand letters | 2.5+ years in IP law | Sharing everything I learn—completely free
              </p>
            </div>

            {/* NEW: Animated Stats Grid */}
            <StatsGrid />
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/projects"
                className="px-8 py-5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase text-lg border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3"
              >
                View My Work <ArrowRight size={24} />
              </Link>
              <button 
                className="px-8 py-5 bg-white dark:bg-black text-black dark:text-white font-bold uppercase text-lg border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3"
              >
                Download Full Profile <Download size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="py-12 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-mono text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Qualified & Registered With
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Check size={20} className="text-brand-teal" strokeWidth={4} />, primary: "Bar Council", secondary: "D/2371/2023" },
              { icon: <Check size={20} className="text-brand-teal" strokeWidth={4} />, primary: "All India", secondary: "Bar Exam" },
              { icon: <Check size={20} className="text-brand-teal" strokeWidth={4} />, primary: "Trademark", secondary: "Attorney 54191" },
              { icon: <GraduationCap size={20} />, primary: "Symbiosis", secondary: "Law School" },
              { icon: <Building2 size={20} />, primary: "EvenUp", secondary: "Current" },
              { icon: <Building2 size={20} />, primary: "DSPIN", secondary: "2 Years" },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-black border border-black dark:border-white p-4 text-center hover:scale-105 transition-transform"
              >
                <div className="mb-1 flex justify-center text-black dark:text-white">{badge.icon}</div>
                <div className="font-mono text-xs font-bold text-black dark:text-white">{badge.primary}</div>
                <div className="font-mono text-[10px] text-gray-500 dark:text-gray-400">{badge.secondary}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6 font-mono text-xs text-gray-500 dark:text-gray-400">
            Verified credentials ensuring professional excellence in IP law, personal injury, and legal automation
          </div>
        </div>
      </section>

      {/* SECTION 3: TWO PILLARS */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tighter mb-6">
              Two Domains, One System
            </h2>
            <p className="font-mono text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Most lawyers specialize in one area. I practice two and automate both.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-6 border-l-8 border-black dark:border-white border-y-2 border-r-2 bg-brand-gray dark:bg-zinc-900 mb-12">
            <p className="font-mono text-lg italic text-black dark:text-white text-center">
              "IP law taught me precision and frameworks. <br/>
              Personal injury taught me storytelling and persuasion. <br/>
              Automation taught me leverage and systems thinking."
            </p>
          </div>

          {/* NEW: Interactive Pillar Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <InteractivePillarCard
              icon={<Scale size={32} />}
              title="Law & Legal Practice"
              subtitle="IP Law + Personal Injury"
              description="Real legal experience from 200+ trademark applications, 500+ licensing agreements, and daily demand letter drafting."
              bulletPoints={[
                "Trademark registration strategies and opposition proceedings",
                "Personal injury demand letter structure and medical analysis",
                "Contract drafting frameworks (licensing, franchise, partnership)",
                "Case law research and legal argument construction",
                "Office action responses and examiner objections"
              ]}
              idealFor="Law students, IP practitioners, personal injury attorneys, business owners"
              accentColor="brand-teal"
              index={0}
            />
            
            <InteractivePillarCard
              icon={<Terminal size={32} />}
              title="Technology & Automation"
              subtitle="Learning & Building"
              description="Self-taught automation expert documenting the journey from manual work to systematic efficiency."
              bulletPoints={[
                "Google Apps Script for legal workflows",
                "Automation for trademark applications and contract generation",
                "n8n workflow automation (no-code solutions)",
                "AI tools for legal analysis (Claude, ChatGPT, Gemini)",
                "Quality assurance systems for demand letters"
              ]}
              idealFor="Legal professionals drowning in manual work, automation beginners"
              accentColor="brand-amber"
              index={1}
            />
          </div>

          <div className="mt-16 text-center">
            <p className="font-mono text-lg mb-6 text-black dark:text-white">Ready to explore? Choose your starting point:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/law" className="px-8 py-4 border-2 border-black dark:border-white font-bold uppercase shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-white dark:bg-black text-black dark:text-white flex items-center gap-2">
                <Scale size={20} /> Explore Law <ArrowRight size={20} />
              </Link>
              <Link to="/tech" className="px-8 py-4 border-2 border-black dark:border-white font-bold uppercase shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-white dark:bg-black text-black dark:text-white flex items-center gap-2">
                <Terminal size={20} /> Explore Tech <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATION ADVANTAGE */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-teal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">Why Combine Law & Tech?</h2>
            <p className="font-mono text-lg max-w-3xl mx-auto opacity-90">
               Most legal professionals talk in jargon and do everything manually.<br/>
               <span className="font-bold">I believe in clarity, systems thinking, and building tools that scale.</span>
            </p>
          </div>

          <div className="border-l-4 border-white pl-6 mb-12 max-w-2xl mx-auto">
             <p className="font-mono text-xl italic text-white">"Each domain teaches lessons that transfer to the other"</p>
          </div>

          {/* NEW: Animated Connection Diagram */}
          <div className="grid md:grid-cols-2 gap-8">
            <ConnectionCard
              icon={<Target size={32} className="text-brand-teal" />}
              title="Pattern Recognition"
              lawApps={[
                "Case precedents, contract patterns",
                "Medical record patterns"
              ]}
              techApps={[
                "Code patterns, workflow bottlenecks",
                "System architecture patterns"
              ]}
              takeaway="All work involves recognizing structures and replicating success"
              index={0}
            />
            
            <ConnectionCard
              icon={<Shield size={32} className="text-brand-teal" />}
              title="Risk Management"
              lawApps={[
                "Due diligence, liability protection",
                "Litigation risk assessment"
              ]}
              techApps={[
                "Error handling, backup systems",
                "Data validation, security"
              ]}
              takeaway="Managing downside is universal—in contracts, cases, and code"
              index={1}
            />
            
            <ConnectionCard
              icon={<Zap size={32} className="text-brand-teal" />}
              title="Leverage & Efficiency"
              lawApps={[
                "Clause libraries, legal precedents",
                "Medical chronology systems"
              ]}
              techApps={[
                "Automation scripts, reusable workflows",
                "Template systems"
              ]}
              takeaway="Build once, benefit forever—the power of systems thinking"
              index={2}
            />
            
            <ConnectionCard
              icon={<MessageSquare size={32} className="text-brand-teal" />}
              title="Clear Communication"
              lawApps={[
                "Persuasive legal arguments",
                "Compelling demand narratives"
              ]}
              techApps={[
                "Clean code, documentation",
                "User-friendly interfaces"
              ]}
              takeaway="Clarity compounds trust in every domain"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: PROJECTS & TOOLS */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-5xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tighter mb-4">Projects & Tools</h2>
               <p className="font-mono text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Everything I build, I document and share. Not as an expert—as a learner building in public.
               </p>
            </div>

            {/* Filters */}
            <div className="flex justify-center gap-4 mb-12">
               {['All', 'Law Projects', 'Tech Projects'].map(filter => (
                  <button
                     key={filter}
                     onClick={() => setProjectFilter(filter)}
                     className={`px-6 py-2 border-2 border-black dark:border-white font-bold uppercase text-sm shadow-brutal dark:shadow-[2px_2px_0px_0px_#ffffff] hover:translate-y-[2px] hover:shadow-none transition-all ${
                        projectFilter === filter 
                        ? 'bg-black text-white dark:bg-white dark:text-black' 
                        : 'bg-white text-black dark:bg-black dark:text-white'
                     }`}
                  >
                     {filter}
                  </button>
               ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid md:grid-cols-2 gap-8 mb-12">
               <AnimatePresence>
                  {displayedProjects.map((project) => (
                     <motion.div
                        layout
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-brutal-lg hover:-translate-y-1 transition-all"
                     >
                        <div className="flex justify-between items-start mb-4">
                           <span className="inline-block px-2 py-1 bg-brand-teal text-white border border-black dark:border-white text-[10px] font-bold uppercase">
                              {project.category}
                           </span>
                           {project.stats && (
                              <span className="font-mono text-xs font-bold text-brand-amber bg-black px-2 py-1">
                                 {project.stats}
                              </span>
                           )}
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-3 leading-none text-black dark:text-white">{project.title}</h3>
                        <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                           {project.summary}
                        </p>
                        {project.tags && (
                           <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map(tag => (
                                 <span key={tag} className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 px-1">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        )}
                        <a href={project.link} className="inline-flex items-center font-bold uppercase text-sm text-black dark:text-white hover:text-brand-teal transition-colors border-b-2 border-black dark:border-white hover:border-brand-teal pb-1">
                           {project.linkText} <ArrowRight size={14} className="ml-1" />
                        </a>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </motion.div>

            <div className="text-center bg-brand-amber p-8 border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
               <h3 className="text-2xl font-black uppercase mb-4 text-black">Want to build your own legal automation tools?</h3>
               <Link to="/tech" className="inline-block px-8 py-3 bg-black text-white font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors">
                  Start Learning Automation &rarr;
               </Link>
            </div>
         </div>
      </section>

      {/* SECTION 6: PHILOSOPHY */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-center mb-16 text-black dark:text-white tracking-tighter">Core Beliefs</h2>
          {/* NEW: Animated Philosophy Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((card, idx) => {
              const IconComponent = iconMap[card.icon];
              return (
                <PhilosophyCard
                  key={card.id}
                  icon={<IconComponent size={32} />}
                  title={card.title}
                  description={card.description}
                  index={idx}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: STATS */}
      <section className="py-20 border-b-2 border-white bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 tracking-tighter">By The Numbers</h2>
          {/* NEW: Staggered Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.05,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.2 }
                }}
                className="border-2 border-white p-6 text-center hover:bg-white/5 transition-all duration-300 bg-black relative overflow-hidden group"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                
                {/* Number with count-up */}
                <motion.div 
                  className="text-4xl md:text-5xl font-black text-brand-teal mb-2 relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 + 0.2, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                
                {/* Labels */}
                <div className="font-mono text-sm font-bold uppercase mb-1 relative z-10">
                  {stat.label}
                </div>
                <div className="font-mono text-xs text-gray-400 italic relative z-10">
                  {stat.sublabel}
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-teal/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center font-mono text-sm text-gray-400 leading-relaxed">
            Registered Attorney: Bar Council of Delhi (D/2371/2023) • Qualified: All India Bar Exam • Trademark Attorney (Code 54191)<br/>
            Education: B.B.A. LL.B., Symbiosis Law School, Noida • Current: Legal Operations Analyst at EvenUp
          </div>
        </div>
      </section>

      {/* SECTION 8: KNOWLEDGE PREVIEW */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tighter mb-4">
              What You'll Find Here
            </h2>
            <p className="font-mono text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The complete knowledge base. Everything I learn about law and automation—documented and shared completely free.
            </p>
          </div>

          {[
            { id: 'law', title: 'In the Law Section', icon: Scale, previews: LAW_ARTICLES_PREVIEW, categories: ['Trademark law guides', 'Personal injury insights', 'Contract templates'] },
            { id: 'tech', title: 'In the Tech Section', icon: Terminal, previews: TECH_ARTICLES_PREVIEW, categories: ['Google Apps Script tutorials', 'Automation projects', 'n8n workflow automation'] }
          ].map((block) => (
            <div key={block.id} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-6">
                <block.icon size={40} className="text-brand-teal" />
                <h3 className="text-4xl font-black uppercase text-black dark:text-white">{block.title}</h3>
              </div>
              <ul className="mb-8 font-mono text-base text-gray-700 dark:text-gray-300 list-none pl-6 border-l-4 border-brand-teal">
                {block.categories.map((cat, i) => (
                  <li key={i} className="mb-1">• {cat}</li>
                ))}
              </ul>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* NEW: Animated Preview Cards */}
                {block.previews.map((article, i) => (
                  <ArticlePreviewCard
                    key={article.id}
                    article={article}
                    index={i}
                  />
                ))}
              </div>
              
              <div className="mt-8 text-center">
                 <Link to={`/${block.id}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black dark:border-white font-bold uppercase text-black dark:text-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    View All {block.id} Content <ArrowRight size={20} />
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'linear-gradient(45deg, #319795 0%, #FFC107 100%)',
              'linear-gradient(90deg, #FFC107 0%, #319795 100%)',
              'linear-gradient(135deg, #319795 0%, #FFC107 100%)',
              'linear-gradient(45deg, #319795 0%, #FFC107 100%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Decorative Top Bar with animation */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="h-full"
            animate={{
              background: [
                'linear-gradient(to right, #319795, #FFC107, #EF4444)',
                'linear-gradient(to right, #FFC107, #EF4444, #319795)',
                'linear-gradient(to right, #EF4444, #319795, #FFC107)',
                'linear-gradient(to right, #319795, #FFC107, #EF4444)',
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            
            <motion.h2 
              className="text-5xl md:text-7xl font-black uppercase mb-4 text-black dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Learn<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-amber">Legal Automation?</span>
            </motion.h2>
            <p className="font-mono text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Choose your starting point, or explore both and see how they connect.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
              <Link to="/law" className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group">
                 <div className="mb-6 flex justify-center text-brand-teal"><Scale size={56} /></div>
                 <h3 className="text-2xl font-black uppercase mb-2 text-black dark:text-white">Start with Law</h3>
                 <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">Trademark strategies, PI insights, contract templates</p>
                 <span className="inline-block w-full py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase">
                   Explore Law &rarr;
                 </span>
              </Link>
              <Link to="/tech" className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group">
                 <div className="mb-6 flex justify-center text-brand-amber"><Terminal size={56} /></div>
                 <h3 className="text-2xl font-black uppercase mb-2 text-black dark:text-white">Start with Tech</h3>
                 <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">Automation tutorials, tool walkthroughs, code snippets</p>
                 <span className="inline-block w-full py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase">
                   Explore Tech &rarr;
                 </span>
              </Link>
            </div>

            <div className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-8 max-w-xl mx-auto mb-12 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
               <h4 className="font-black text-xl uppercase mb-2 text-black dark:text-white">Get Monthly Insights</h4>
               <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mb-6">
                 Best insights across law and automation. Delivered once a month. No spam.
               </p>
               <div className="flex gap-2">
                 <input type="email" placeholder="your.email@example.com" className="flex-1 p-3 border-2 border-black bg-white font-mono text-sm focus:outline-none text-black" />
                 <button className="px-6 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-bold uppercase hover:bg-brand-teal hover:text-white transition-colors">
                   <Mail size={18} />
                 </button>
               </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
               <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4">Need legal work or automation consulting?</p>
               <Link to="/contact" className="inline-block px-8 py-3 border-2 border-black dark:border-white bg-transparent text-black dark:text-white font-bold uppercase hover:bg-brand-teal hover:text-white hover:border-black transition-colors">
                 Get In Touch &rarr;
               </Link>
            </div>
        </div>
      </section>
    </div>
  );
};