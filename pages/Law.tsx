import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale, Gavel, FileText, FileCheck, FileSignature, Search, Filter,
  Download, BookOpen, Award, CheckCircle, AlertCircle, ChevronDown,
  ChevronUp, ArrowRight, Shield, Zap, GraduationCap, Briefcase, Building2
} from 'lucide-react';

// --- DATA STRUCTURES ---

const HUBS = [
  {
    id: 'trademark',
    title: 'Trademark & IP Law',
    subtitle: 'Based on 200+ Applications | 80% Success Rate',
    icon: Shield,
    color: 'text-brand-blue',
    categories: [
      { title: 'Basics & Fundamentals', topics: ['What is a Trademark?', 'Trademark Classes Explained', 'Trademark Search Methodology', 'Common Law vs. Registered'] },
      { title: 'Filing & Prosecution', topics: ['Step-by-Step Filing Guide', 'Office Action Response Strategies', 'Likelihood of Confusion Objections', 'Descriptiveness Objections'] },
      { title: 'Opposition & Disputes', topics: ['Opposition Proceedings Guide', 'Defending Against Opposition', 'Infringement Responses', 'Cancellation Proceedings'] },
      { title: 'Licensing & Commercial', topics: ['Licensing Agreement Structure', 'Franchise Provisions', 'Co-Branding Deals', 'Negotiation Tactics'] },
      { title: 'Portfolio Management', topics: ['Portfolio Strategy', 'Renewal & Maintenance', 'Audit Methodology', 'International Management'] }
    ]
  },
  {
    id: 'pi',
    title: 'Personal Injury Law',
    subtitle: 'Demand Letters | Medical Analysis | Settlement Strategy',
    icon: Scale,
    color: 'text-brand-orange',
    categories: [
      { title: 'Demand Letter Fundamentals', topics: ['Anatomy of a Strong Demand', 'Liability Narratives', 'Damages Calculation', 'Anchoring Settlement Values'] },
      { title: 'Medical Record Analysis', topics: ['Reading Medical Records', 'Building Chronologies', 'MVA Injury Patterns', 'Causation Arguments'] },
      { title: 'Settlement Negotiation', topics: ['Insurance Adjuster Valuation', 'Negotiation Tactics', 'Policy Limits Demands', 'Litigate vs. Settle Analysis'] },
      { title: 'Specific Case Types', topics: ['MVA Frameworks', 'Soft Tissue Injuries', 'TBI Cases', 'Slip and Fall Liability'] },
      { title: 'Insurance Relations', topics: ['Claims Process Overview', 'Adjuster Tactics', 'Bad Faith Claims', 'Liens & Subrogation'] }
    ]
  },
  {
    id: 'contracts',
    title: 'Contract Drafting',
    subtitle: 'Based on 500+ Agreements | Proven Clause Libraries',
    icon: FileSignature,
    color: 'text-brand-green',
    categories: [
      { title: 'Contract Fundamentals', topics: ['Anatomy of a Contract', 'Clear Language Drafting', 'Common Mistakes', 'Review Methodology'] },
      { title: 'Types & Templates', topics: ['NDA Essentials', 'Partnership Agreements', 'Joint Ventures', 'Service vs. Employment'] },
      { title: 'Key Clauses', topics: ['Indemnification', 'Limitation of Liability', 'Termination Provisions', 'Dispute Resolution'] },
      { title: 'Negotiation Strategy', topics: ['Red-Line Reviews', 'Leverage Identification', 'Walk-Away Points', 'Breach Handling'] },
      { title: 'International', topics: ['GDPR/CCPA Compliance', 'Governing Law', 'Cross-Border Payments', 'Export Controls'] }
    ]
  }
];

const LEARNING_PATHS = [
  {
    title: 'For Law Students',
    icon: GraduationCap,
    week1: 'Foundations',
    week2: 'Trademark Basics',
    week3: 'PI Basics',
    week4: 'Contract Drafting',
    color: 'border-brand-blue/30 bg-brand-blue/10 text-brand-blue',
    hover: 'hover:border-brand-blue hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]'
  },
  {
    title: 'For Legal Pros',
    icon: Briefcase,
    week1: 'Trademark Work',
    week2: 'PI Work',
    week3: 'Contract Work',
    week4: 'Advanced Tactics',
    color: 'border-brand-orange/30 bg-brand-orange/10 text-brand-orange',
    hover: 'hover:border-brand-orange hover:shadow-[0_0_20px_rgba(255,107,74,0.3)]'
  },
  {
    title: 'For Business Owners',
    icon: Building2,
    week1: 'Understand Rights',
    week2: 'Protect Brand',
    week3: 'Business Contracts',
    week4: 'Risk Management',
    color: 'border-brand-green/30 bg-brand-green/10 text-brand-green',
    hover: 'hover:border-brand-green hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]'
  }
];

const FAQS = {
  trademark: [
    { q: 'How long does trademark registration take?', a: 'Typically 12-18 months in India if there are no oppositions.' },
    { q: 'Can I file without a lawyer?', a: 'Yes, but professional filing significantly reduces objection risks.' },
    { q: 'Difference between TM and ®?', a: 'TM is for unregistered marks; ® is for officially registered trademarks.' },
    { q: 'How much does it cost?', a: 'Government fees vary by entity type; professional fees depend on complexity.' }
  ],
  pi: [
    { q: 'How is case value calculated?', a: 'Medical expenses + Lost Wages + Pain & Suffering multiplier based on severity.' },
    { q: 'How long to settle?', a: 'Simple cases: 3-6 months. Complex/Litigation cases: 1-3 years.' },
    { q: 'Should I accept the first offer?', a: 'Rarely. The first offer is almost always the "floor" of negotiation.' }
  ],
  contracts: [
    { q: 'Must contracts be in writing?', a: 'Not all, but written contracts are essential for proof and clarity.' },
    { q: 'What makes it binding?', a: 'Offer, Acceptance, Consideration, Capacity, and Legality.' },
    { q: 'Can I terminate early?', a: 'Only if the contract has a specific termination clause or for material breach.' }
  ]
};

const RESOURCES = [
  { name: 'Trademark App Checklist', type: 'PDF', icon: FileCheck },
  { name: 'Demand Letter Template', type: 'DOCX', icon: FileText },
  { name: 'Contract Review Checklist', type: 'PDF', icon: CheckCircle },
  { name: 'Medical Chronology', type: 'XLSX', icon: Zap },
  { name: 'Licensing Agreement', type: 'DOCX', icon: FileSignature },
  { name: 'NDA Template', type: 'DOCX', icon: Shield },
];

// --- COMPONENTS ---

const HubSection: React.FC<{ hub: typeof HUBS[0] }> = ({ hub }) => {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  return (
    <div className="mb-20 bg-brand-surface border border-brand-text/5 rounded-2xl overflow-hidden shadow-glass group hover:border-brand-text/10 transition-all">
      <div className="p-8 border-b border-brand-text/5 bg-brand-text/[0.02]">
        <div className="flex items-center gap-4 mb-2">
          <div className={`p-3 bg-brand-text/5 rounded-xl border border-brand-text/5 ${hub.color} shadow-glow`}>
            <hub.icon size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-brand-text tracking-tight">{hub.title}</h2>
        </div>
        <p className="text-sm font-medium text-brand-muted pl-[68px] tracking-wide">{hub.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-12">
        {/* Categories Sidebar */}
        <div className="md:col-span-4 border-r border-brand-text/5 bg-black/20">
          {hub.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
              className={`w-full text-left px-6 py-5 border-b border-brand-text/5 last:border-b-0 font-bold uppercase text-xs flex justify-between items-center transition-all ${openCategory === idx
                ? 'bg-brand-text/5 text-brand-text border-l-4 border-l-brand-blue'
                : 'text-brand-muted hover:bg-brand-text/[0.02] hover:text-brand-text border-l-4 border-l-transparent'
                }`}
            >
              {cat.title}
              {openCategory === idx ? <ChevronDown size={14} /> : <ArrowRight size={14} />}
            </button>
          ))}
        </div>

        {/* Topics Content */}
        <div className="md:col-span-8 p-8 bg-brand-surface/50 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {openCategory !== null && (
              <motion.div
                key={openCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold uppercase mb-6 text-brand-text border-b border-brand-text/10 pb-2 inline-block">
                  {hub.categories[openCategory].title}
                </h3>
                <div className="grid gap-3">
                  {hub.categories[openCategory].topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-black/40 border border-brand-text/5 rounded-xl hover:border-brand-blue/30 hover:bg-brand-text/5 transition-all cursor-pointer group">
                      <FileText size={16} className={`${hub.color} opacity-70 group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-brand-muted group-hover:text-brand-text transition-colors">{topic}</span>
                      <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-text" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC<{ title: string; items: { q: string, a: string }[] }> = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold uppercase mb-4 text-brand-blue tracking-wider text-sm">{title}</h3>
    <div className="space-y-4">
      {items.map((item, i) => (
        <details key={i} className="group bg-brand-surface border border-brand-text/5 rounded-xl overflow-hidden shadow-sm">
          <summary className="flex justify-between items-center p-4 font-bold uppercase cursor-pointer hover:bg-brand-text/5 transition-colors text-sm text-brand-text">
            {item.q}
            <ChevronDown className="group-open:rotate-180 transition-transform text-brand-muted" size={16} />
          </summary>
          <div className="p-4 pt-0 text-sm text-brand-muted leading-relaxed border-t border-transparent group-open:border-brand-text/5 group-open:pt-4 transition-all">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  </div>
);

export const Law: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">

      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-brand-text/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-blue tracking-wider shadow-glass">
                Law Knowledge Base
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-8 tracking-tight">
                Real Legal Insights<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">From Practice</span>
              </h1>

              <div className="bg-brand-surface/50 border border-brand-text/10 p-6 md:p-8 rounded-2xl shadow-glass backdrop-blur-sm max-w-3xl mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue"></div>
                <p className="text-lg md:text-xl leading-relaxed mb-6 text-brand-muted font-light">
                  This isn't a legal blog. It's a working attorney's repository—built from <strong className="text-brand-text">200+ trademark applications</strong>, <strong className="text-brand-text">500+ contracts</strong>, and daily <strong className="text-brand-text">demand letter drafting</strong>.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  {['✓ Real Cases', '✓ Tested In Court', '✓ No Jargon', '✓ 100% Free'].map(tag => (
                    <span key={tag} className="bg-black/30 border border-brand-text/5 p-2 text-center rounded">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('trademark-hub')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-brand-blue text-brand-surface font-bold uppercase rounded-lg hover:bg-brand-text transition-colors shadow-glow">
                  Explore IP Law
                </button>
                <button onClick={() => document.getElementById('pi-hub')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-transparent border border-brand-text/20 text-brand-text font-bold uppercase rounded-lg hover:bg-brand-text/5 transition-colors">
                  Explore PI Law
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW GRID */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-bold uppercase text-3xl mb-12 text-brand-text">Knowledge Base Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Trademark & IP Law', items: ['Filing & Prosecution', 'Office Actions', 'Oppositions', 'Licensing'], color: 'text-brand-blue' },
              { title: 'Personal Injury Law', items: ['Demand Letters', 'Medical Analysis', 'Settlement Valuation', 'Liability Assessment'], color: 'text-brand-orange' },
              { title: 'Contract Drafting', items: ['Licensing Templates', 'Partnership Deals', 'Service Agreements', 'Clause Libraries'], color: 'text-brand-green' }
            ].map((col, i) => (
              <div key={i} className="bg-brand-surface border border-brand-text/5 p-6 rounded-2xl shadow-glass hover:-translate-y-1 transition-transform group">
                <h3 className={`font-bold uppercase text-xl mb-4 border-b border-brand-text/5 pb-4 ${col.color}`}>{col.title}</h3>
                <ul className="space-y-3 text-sm text-brand-muted">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3"><div className={`w-1.5 h-1.5 rounded-full ${col.color === 'text-brand-blue' ? 'bg-brand-blue' : col.color === 'text-brand-orange' ? 'bg-brand-orange' : 'bg-brand-green'}`} /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS 3, 4, 5: CONTENT HUBS */}
      <section className="py-20 border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="trademark-hub"><HubSection hub={HUBS[0]} /></div>
          <div id="pi-hub"><HubSection hub={HUBS[1]} /></div>
          <div id="contracts-hub"><HubSection hub={HUBS[2]} /></div>
        </div>
      </section>

      {/* SECTION 6: LEARNING PATHS */}
      <section className="py-20 border-b border-brand-text/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-brand-text mb-4">Curated Learning Paths</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Start here if you don't know where to look. Guided journeys for your career stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LEARNING_PATHS.map((path, i) => (
              <div key={i} className={`border border-brand-text/10 rounded-2xl p-8 shadow-glass transition-all group ${path.hover} bg-brand-surface`}>
                <div className={`flex items-center gap-3 mb-6 ${path.color} p-4 rounded-xl inline-flex`}>
                  <path.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase leading-none text-brand-text mb-6">{path.title}</h3>
                <div className="space-y-4 mb-8 text-sm text-brand-muted border-l-2 border-brand-text/10 pl-4 group-hover:border-brand-text/30 transition-colors">
                  <div><span className="font-bold text-brand-text text-xs uppercase tracking-wide">Week 1:</span> {path.week1}</div>
                  <div><span className="font-bold text-brand-text text-xs uppercase tracking-wide">Week 2:</span> {path.week2}</div>
                  <div><span className="font-bold text-brand-text text-xs uppercase tracking-wide">Week 3:</span> {path.week3}</div>
                  <div><span className="font-bold text-brand-text text-xs uppercase tracking-wide">Week 4:</span> {path.week4}</div>
                </div>
                <button className="w-full py-3 border border-brand-text/10 rounded-lg font-bold uppercase hover:bg-brand-text hover:text-brand-surface transition-colors text-sm">
                  Start Path →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SEARCH (MOCKED) */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-8 text-brand-text">Search The Repository</h2>
          <div className="relative mb-8 group">
            <input
              type="text"
              placeholder="Search by topic, keyword, or question..."
              className="w-full p-4 pl-12 border border-brand-text/10 bg-black/50 rounded-xl text-lg focus:outline-none focus:border-brand-blue/50 focus:shadow-glow transition-all text-brand-text placeholder:text-brand-muted/50"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-brand-blue transition-colors" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="font-bold uppercase mr-2 pt-1 text-brand-muted">Popular:</span>
            {['Demand Letter Template', 'Trademark Filing', 'NDA', 'Medical Chronology'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-brand-text/5 border border-brand-text/5 rounded-full cursor-pointer hover:bg-brand-blue hover:text-brand-surface transition-colors text-brand-muted hover:border-transparent">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CASE STUDIES */}
      <section className="py-20 border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold uppercase mb-12 flex items-center gap-4 text-brand-text">
            <Award size={36} className="text-brand-orange" />
            Real Cases, Real Lessons
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Trademark Opposition Won', area: 'IP Law', result: 'Opposition Dismissed', desc: 'How we overcame a similarity objection for a D2C brand using market survey evidence.', color: 'text-brand-blue' },
              { title: 'Policy Limits Settlement', area: 'PI Law', result: 'Settled in 45 Days', desc: 'Securing full policy limits for an MVA case despite initial lowball offer, using precise demand drafting.', color: 'text-brand-orange' },
              { title: 'Intl Licensing Deal', area: 'Contracts', result: 'Protected & Signed', desc: 'Negotiating a complex tech transfer agreement between a US licensor and Indian manufacturer.', color: 'text-brand-green' }
            ].map((study, i) => (
              <div key={i} className="bg-brand-surface border border-brand-text/5 p-6 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] hover:-translate-y-1 transition-all group">
                <div className={`inline-block px-2 py-1 bg-brand-text/5 text-brand-text text-[10px] font-bold uppercase mb-4 rounded border border-brand-text/5`}>{study.area}</div>
                <h3 className="text-xl font-bold uppercase mb-2 text-brand-text">{study.title}</h3>
                <div className={`text-xs font-bold uppercase mb-4 border-b border-brand-text/5 pb-4 ${study.color}`}>Result: {study.result}</div>
                <p className="text-sm text-brand-muted mb-6 icon-light leading-relaxed">{study.desc}</p>
                <button className="font-bold uppercase text-xs border-b border-brand-text/20 pb-0.5 hover:text-brand-text hover:border-brand-text transition-colors text-brand-muted">Read Case Study →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQS */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">Frequently Asked Questions</h2>
          <FAQSection title="Trademark FAQs" items={FAQS.trademark} />
          <FAQSection title="Personal Injury FAQs" items={FAQS.pi} />
          <FAQSection title="Contract FAQs" items={FAQS.contracts} />
        </div>
      </section>

      {/* SECTION 10: RESOURCES */}
      <section className="py-20 border-b border-brand-text/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold uppercase mb-4 text-brand-text">Practical Resources</h2>
              <p className="text-brand-muted">Download free templates, checklists, and guides.</p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-3 border border-brand-text/20 bg-brand-text/5 rounded-lg font-bold uppercase hover:bg-brand-text hover:text-brand-surface transition-colors flex items-center gap-2 text-sm">
              <Download size={18} /> Download All (ZIP)
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((res, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-brand-text/10 rounded-xl hover:border-brand-blue/30 hover:bg-brand-text/5 transition-colors group cursor-pointer bg-brand-surface">
                <div className="p-2 bg-brand-text/5 text-brand-text rounded-lg group-hover:bg-brand-blue group-hover:text-brand-surface transition-colors">
                  <res.icon size={20} />
                </div>
                <div>
                  <div className="font-bold uppercase text-sm text-brand-text">{res.name}</div>
                  <div className="text-[10px] font-bold uppercase text-brand-muted border border-brand-text/10 inline-block px-1 rounded mt-1">{res.type}</div>
                </div>
                <Download size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: DISCLAIMER */}
      <section className="py-12 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-orange">
            <AlertCircle size={20} />
            <h3 className="font-bold uppercase text-sm tracking-widest">Important Legal Disclaimer</h3>
          </div>
          <p className="text-xs text-brand-muted leading-relaxed mb-6 max-w-2xl mx-auto">
            This Knowledge Base provides general legal information for educational purposes only. It is not legal advice and does not create an attorney-client relationship. Laws change frequently, and jurisdiction matters. Always consult a qualified attorney for your specific legal needs.
          </p>
          <div className="text-xs font-bold uppercase text-brand-text">
            Need Legal Advice? <a href="mailto:nikhilgoyal.advo@gmail.com" className="text-brand-blue hover:underline">Contact Me</a>
          </div>
        </div>
      </section>

    </div>
  );
};