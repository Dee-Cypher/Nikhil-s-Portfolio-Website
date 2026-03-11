import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Gavel, ArrowRight, ArrowUpRight, Download, Scale,
  Terminal, Check, GraduationCap, Building2, Target, Shield, Briefcase,
  Zap, MessageSquare, BookOpen, Cog, Users
} from 'lucide-react';
import { PHILOSOPHY, LAW_ARTICLES_PREVIEW, TECH_ARTICLES_PREVIEW } from '../constants';
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
  BookOpen, Cog, Users, Terminal
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
    <div className="flex flex-col overflow-hidden bg-brand-bg relative">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-[1]" />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[95vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 border-b border-brand-text/5 z-10">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px]" />

          <motion.div style={{ y: y2 }} className="absolute top-20 right-[10%] opacity-5 text-brand-text">
            <Scale size={120} strokeWidth={1} />
          </motion.div>
          <motion.div style={{ y: y1 }} className="absolute bottom-40 left-[5%] opacity-5 text-brand-orange">
            <Gavel size={140} strokeWidth={1} />
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute top-40 left-[15%] opacity-5 text-brand-blue">
            <Terminal size={130} strokeWidth={1} />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto z-10 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full border border-brand-text/10 bg-brand-text/5 text-brand-text mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse flex-shrink-0"></span>
              <span className="font-mono font-medium tracking-wide text-[10px] sm:text-xs uppercase text-brand-muted">Legal Operations Architect • IP Attorney</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-brand-text leading-[0.9] mb-8">
              The Legal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">Engineer</span>
            </h1>

            <div className="border-l-2 border-brand-orange/50 pl-6 sm:pl-8 py-2 max-w-3xl mb-12">
              <p className="text-lg sm:text-xl md:text-2xl text-brand-muted font-light leading-relaxed">
                Attorney bridging law, AI, and technology. I build intelligent systems and processes with legal precision that drive results and save thousands of hours.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-mono text-brand-text mt-4 pt-2">
                Product Operations Associate <span className="text-brand-orange">@ EvenUp</span> | Legal AI & Automation
              </p>
            </div>

            {/* NEW: Animated Stats Grid needs updating in component */}
            <div className="mb-12">
              <StatsGrid />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/projects"
                className="px-8 py-4 bg-brand-orange text-white font-bold rounded-lg shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                View My Work <ArrowRight size={20} />
              </Link>
              <button
                className="px-8 py-4 bg-brand-text/5 border border-brand-text/10 text-brand-text font-bold rounded-lg hover:bg-brand-text/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
              >
                Download Full Profile <Download size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="py-12 border-b border-brand-text/5 bg-black/50 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">
            Qualified & Registered With
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Check size={20} className="text-brand-green" strokeWidth={3} />, primary: "Bar Council", secondary: "D/2371/2023" },
              { icon: <Check size={20} className="text-brand-green" strokeWidth={3} />, primary: "All India", secondary: "Bar Exam" },
              { icon: <Check size={20} className="text-brand-green" strokeWidth={3} />, primary: "Trademark", secondary: "Attorney 54191" },
              { icon: <GraduationCap size={20} className="text-brand-blue" />, primary: "Symbiosis", secondary: "Law School" },
              { icon: <Building2 size={20} className="text-brand-purple" />, primary: "EvenUp", secondary: "Current" },
              { icon: <Building2 size={20} className="text-brand-purple" />, primary: "DSPIN", secondary: "2 Years" },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-brand-surface border border-brand-text/5 rounded-xl p-4 text-center hover:bg-brand-text/5 transition-colors group"
              >
                <div className="mb-2 flex justify-center text-brand-muted group-hover:text-brand-text transition-colors">{badge.icon}</div>
                <div className="font-bold text-sm text-brand-text mb-1">{badge.primary}</div>
                <div className="font-mono text-[10px] text-brand-muted">{badge.secondary}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TWO PILLARS */}
      <section className="py-24 border-b border-brand-text/5 z-10 relative">
        <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-brand-text tracking-tighter mb-6">
              Law Meets <span className="text-brand-muted">AI & Tech.</span>
            </h2>
            <p className="font-light text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
              Merging deep legal expertise with advanced AI to create <span className="text-brand-orange font-bold">automated workflows</span> that operate with attorney-level precision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-brand-surface to-brand-bg border border-brand-text/10 mb-16 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-brand-orange" />
            <p className="font-serif italic text-2xl text-brand-text text-center leading-relaxed opacity-90">
              "The future of law isn't just about better arguments. It's about better architecture."
            </p>
          </div>

          {/* Interactive Pillar Cards - Component Refactor Needed */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              accentColor="brand-blue"
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
              accentColor="brand-orange"
              index={1}
            />

            <InteractivePillarCard
              icon={<Briefcase size={32} />}
              title="Business Operations"
              subtitle="Family Enterprise"
              description="Real-world experience managing and scaling a business through the COVID-19 pandemic before transitioning into law."
              bulletPoints={[
                "Supply chain optimization and logistics",
                "Digital transformation of legacy systems",
                "Cross-functional team leadership",
                "Financial planning and execution",
                "Standard Operating Procedure (SOP) development"
              ]}
              idealFor="Entrepreneurs, SMB Owners, Operations Managers"
              accentColor="brand-green"
              index={2}
            />
          </div>

          <div className="mt-20 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/law" className="px-8 py-4 border border-brand-text/10 rounded-full font-bold uppercase hover:bg-brand-blue hover:text-brand-text hover:border-brand-blue hover:shadow-glow transition-all bg-brand-surface text-brand-muted flex items-center gap-2 group">
                <Scale size={20} className="group-hover:scale-110 transition-transform" /> Explore Law <ArrowRight size={18} />
              </Link>
              <Link to="/tech" className="px-8 py-4 border border-brand-text/10 rounded-full font-bold uppercase hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:shadow-glow transition-all bg-brand-surface text-brand-muted flex items-center gap-2 group">
                <Terminal size={20} className="group-hover:scale-110 transition-transform" /> Explore Tech <ArrowRight size={18} />
              </Link>
              <Link to="/business" className="px-8 py-4 border border-brand-text/10 rounded-full font-bold uppercase hover:bg-brand-green hover:text-brand-bg hover:border-brand-green hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all bg-brand-surface text-brand-muted flex items-center gap-2 group">
                <Briefcase size={20} className="group-hover:scale-110 transition-transform" /> Explore Business <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATION ADVANTAGE */}
      <section className="py-24 border-b border-brand-text/5 relative bg-gradient-to-b from-brand-bg to-brand-surface z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text tracking-tight">Why Combine Law & Tech?</h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">
              Each domain teaches lessons that transfer to the other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              icon={<Target size={28} className="text-brand-green" />}
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
              icon={<Shield size={28} className="text-brand-blue" />}
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
              icon={<Zap size={28} className="text-brand-yellow" />}
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
              icon={<MessageSquare size={28} className="text-brand-purple" />}
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
      <section className="py-24 border-b border-brand-text/5 bg-brand-bg z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase text-brand-text tracking-tighter mb-4">Projects</h2>
              <p className="text-brand-muted max-w-xl text-lg">
                Production-grade tools built to solve real legal problems.
              </p>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mt-6 md:mt-0">
              {['All', 'Law Projects', 'Tech Projects'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${projectFilter === filter
                    ? 'bg-brand-orange text-white shadow-glow'
                    : 'bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-brand-text/5'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>


          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-6 mb-16">
            <AnimatePresence>
              {displayedProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group bg-brand-surface border border-brand-text/5 rounded-2xl p-8 hover:bg-brand-text/5 hover:border-brand-orange/30 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-brand-orange" />
                  </div>

                  <div className="flex gap-3 mb-6">
                    <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.stats && (
                      <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {project.stats}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-brand-text group-hover:text-brand-orange transition-colors">{project.title}</h3>
                  <p className="text-brand-muted mb-8 leading-relaxed text-sm">
                    {project.summary}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold text-gray-400 border border-brand-text/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-brand-orange/20 to-brand-surface border border-brand-orange/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <h3 className="text-3xl font-black uppercase mb-4 text-brand-text relative z-10">Want to build your own tools?</h3>
            <Link to="/tech" className="inline-block px-8 py-3 bg-brand-text text-brand-surface font-bold rounded-full hover:scale-105 transition-transform relative z-10">
              Start Learning Automation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: PHILOSOPHY */}
      <section className="py-24 border-b border-brand-text/5 bg-black z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-center mb-16 text-brand-text tracking-tighter">Core Beliefs</h2>
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

      {/* SECTION 7: KNOWLEDGE PREVIEW */}
      <section className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-brand-text tracking-tighter mb-4">
              The Repository
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Everything I learn about law and automation. Documented. Shared. Free.
            </p>
          </div>

          {[
            { id: 'law', title: 'Law Section', icon: Scale, previews: LAW_ARTICLES_PREVIEW, categories: ['Trademark law', 'PI insights', 'Templates'] },
            { id: 'tech', title: 'Tech Section', icon: Terminal, previews: TECH_ARTICLES_PREVIEW, categories: ['Apps Script', 'Automation', 'n8n'] }
          ].map((block) => (
            <div key={block.id} className="mb-24 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-surface border border-brand-text/10 rounded-xl">
                  <block.icon size={32} className="text-brand-orange" />
                </div>
                <h3 className="text-4xl font-bold uppercase text-brand-text">{block.title}</h3>
              </div>


              <div className="grid md:grid-cols-3 gap-6">
                {block.previews.map((article, i) => (
                  <ArticlePreviewCard
                    key={article.id}
                    article={article}
                    index={i}
                  />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link to={`/${block.id}`} className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors font-mono text-sm uppercase tracking-wider">
                  View All {block.id} Content <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};