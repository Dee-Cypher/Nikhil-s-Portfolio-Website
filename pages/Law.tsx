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
    color: 'bg-brand-teal',
    text: 'text-white'
  },
  {
    title: 'For Legal Pros',
    icon: Briefcase,
    week1: 'Trademark Work',
    week2: 'PI Work',
    week3: 'Contract Work',
    week4: 'Advanced Tactics',
    color: 'bg-black',
    text: 'text-white'
  },
  {
    title: 'For Business Owners',
    icon: Building2,
    week1: 'Understand Rights',
    week2: 'Protect Brand',
    week3: 'Business Contracts',
    week4: 'Risk Management',
    color: 'bg-white',
    text: 'text-black'
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
    <div className="mb-20 border-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
      <div className="p-8 border-b-2 border-black dark:border-white bg-white dark:bg-black">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-brand-teal text-white border-2 border-black dark:border-white shadow-brutal-sm">
            <hub.icon size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-black dark:text-white">{hub.title}</h2>
        </div>
        <p className="font-mono text-sm font-bold text-gray-500 dark:text-gray-400 pl-[68px]">{hub.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-12">
        {/* Categories Sidebar */}
        <div className="md:col-span-4 border-r-2 border-black dark:border-white bg-white dark:bg-black">
          {hub.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
              className={`w-full text-left px-6 py-4 border-b-2 border-black dark:border-white last:border-b-0 font-bold uppercase text-sm flex justify-between items-center transition-all ${
                openCategory === idx 
                  ? 'bg-brand-amber text-black' 
                  : 'bg-white dark:bg-black text-black dark:text-white hover:bg-brand-gray dark:hover:bg-zinc-900'
              }`}
            >
              {cat.title}
              {openCategory === idx ? <ChevronDown size={16} /> : <ArrowRight size={16} />}
            </button>
          ))}
        </div>

        {/* Topics Content */}
        <div className="md:col-span-8 p-8 bg-brand-gray dark:bg-zinc-900">
           <AnimatePresence mode="wait">
             {openCategory !== null && (
               <motion.div
                 key={openCategory}
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -10 }}
               >
                  <h3 className="text-xl font-black uppercase mb-6 text-black dark:text-white border-b-2 border-black dark:border-white pb-2 inline-block">
                    {hub.categories[openCategory].title}
                  </h3>
                  <div className="grid gap-4">
                    {hub.categories[openCategory].topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-black border-2 border-black dark:border-white shadow-brutal-sm hover:translate-x-1 transition-transform cursor-pointer group">
                        <FileText size={18} className="text-brand-teal group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm font-bold text-black dark:text-white">{topic}</span>
                        <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
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

const FAQSection: React.FC<{ title: string; items: {q: string, a: string}[] }> = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-black uppercase mb-4 text-brand-teal">{title}</h3>
    <div className="space-y-4">
      {items.map((item, i) => (
        <details key={i} className="group bg-white dark:bg-zinc-900 border-2 border-black dark:border-white shadow-brutal-sm">
          <summary className="flex justify-between items-center p-4 font-bold uppercase cursor-pointer hover:bg-brand-gray dark:hover:bg-black transition-colors">
            {item.q}
            <ChevronDown className="group-open:rotate-180 transition-transform" size={18} />
          </summary>
          <div className="p-4 pt-0 border-t-2 border-black dark:border-white group-open:border-t-2 group-open:border-black font-mono text-sm text-gray-700 dark:text-gray-300 mt-2">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  </div>
);

export const Law: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b-2 border-black dark:border-white bg-grid dark:bg-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-brand-teal text-white border-2 border-black dark:border-white font-mono font-bold uppercase mb-6 shadow-brutal-sm">
                Law Knowledge Base
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
                Real Legal Insights<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-amber">From Practice</span>
              </h1>
              
              <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-6 md:p-8 shadow-brutal-lg max-w-3xl mb-12">
                 <p className="font-mono text-lg md:text-xl leading-relaxed mb-6">
                   This isn't a legal blog. It's a working attorney's repository—built from <strong>200+ trademark applications</strong>, <strong>500+ contracts</strong>, and daily <strong>demand letter drafting</strong>.
                 </p>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold uppercase">
                    {['✓ Real Cases', '✓ Tested In Court', '✓ No Jargon', '✓ 100% Free'].map(tag => (
                      <span key={tag} className="bg-brand-gray dark:bg-black border border-black dark:border-white p-2 text-center">{tag}</span>
                    ))}
                 </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('trademark-hub')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                  Explore IP Law
                </button>
                <button onClick={() => document.getElementById('pi-hub')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-black dark:bg-black dark:text-white font-bold uppercase border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-1 hover:shadow-none transition-all">
                  Explore PI Law
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW GRID */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-black uppercase text-3xl mb-12">Knowledge Base Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: 'Trademark & IP Law', items: ['Filing & Prosecution', 'Office Actions', 'Oppositions', 'Licensing'] },
                 { title: 'Personal Injury Law', items: ['Demand Letters', 'Medical Analysis', 'Settlement Valuation', 'Liability Assessment'] },
                 { title: 'Contract Drafting', items: ['Licensing Templates', 'Partnership Deals', 'Service Agreements', 'Clause Libraries'] }
               ].map((col, i) => (
                 <div key={i} className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                    <h3 className="font-black uppercase text-xl mb-4 border-b-2 border-black dark:border-white pb-2">{col.title}</h3>
                    <ul className="space-y-2 font-mono text-sm">
                       {col.items.map((item, j) => (
                         <li key={j} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-teal rounded-full" /> {item}</li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTIONS 3, 4, 5: CONTENT HUBS */}
      <section className="py-20 border-b-2 border-black dark:border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div id="trademark-hub"><HubSection hub={HUBS[0]} /></div>
           <div id="pi-hub"><HubSection hub={HUBS[1]} /></div>
           <div id="contracts-hub"><HubSection hub={HUBS[2]} /></div>
        </div>
      </section>

      {/* SECTION 6: LEARNING PATHS */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-teal">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">Curated Learning Paths</h2>
               <p className="font-mono text-white/80 max-w-2xl mx-auto">Start here if you don't know where to look. Guided journeys for your career stage.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {LEARNING_PATHS.map((path, i) => (
                  <div key={i} className={`${path.color} ${path.text} border-2 border-black p-8 shadow-brutal-lg hover:-translate-y-2 transition-transform`}>
                     <div className="flex items-center gap-3 mb-6">
                        <path.icon size={32} />
                        <h3 className="text-2xl font-black uppercase leading-none">{path.title}</h3>
                     </div>
                     <div className="space-y-4 mb-8 font-mono text-sm border-l-2 border-current pl-4">
                        <div><span className="font-bold opacity-60">Week 1:</span> {path.week1}</div>
                        <div><span className="font-bold opacity-60">Week 2:</span> {path.week2}</div>
                        <div><span className="font-bold opacity-60">Week 3:</span> {path.week3}</div>
                        <div><span className="font-bold opacity-60">Week 4:</span> {path.week4}</div>
                     </div>
                     <button className="w-full py-3 border-2 border-current font-bold uppercase hover:bg-current hover:text-brand-teal transition-colors">
                        Start Path →
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 7: SEARCH (MOCKED) */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black uppercase mb-8">Search The Repository</h2>
            <div className="relative mb-8">
               <input 
                  type="text" 
                  placeholder="Search by topic, keyword, or question..." 
                  className="w-full p-4 pl-12 border-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900 font-mono text-lg focus:outline-none focus:shadow-brutal transition-shadow"
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
               <span className="font-bold uppercase mr-2 pt-1">Popular:</span>
               {['Demand Letter Template', 'Trademark Filing', 'NDA', 'Medical Chronology'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-brand-gray dark:bg-zinc-800 border border-black dark:border-white cursor-pointer hover:bg-brand-amber hover:text-black transition-colors">
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 8: CASE STUDIES */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-12 flex items-center gap-4">
               <Award size={40} className="text-brand-amber" />
               Real Cases, Real Lessons
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: 'Trademark Opposition Won', area: 'IP Law', result: 'Opposition Dismissed', desc: 'How we overcame a similarity objection for a D2C brand using market survey evidence.' },
                  { title: 'Policy Limits Settlement', area: 'PI Law', result: 'Settled in 45 Days', desc: 'Securing full policy limits for an MVA case despite initial lowball offer, using precise demand drafting.' },
                  { title: 'Intl Licensing Deal', area: 'Contracts', result: 'Protected & Signed', desc: 'Negotiating a complex tech transfer agreement between a US licensor and Indian manufacturer.' }
               ].map((study, i) => (
                  <div key={i} className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all">
                     <div className="inline-block px-2 py-1 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase mb-4">{study.area}</div>
                     <h3 className="text-2xl font-black uppercase mb-2">{study.title}</h3>
                     <div className="font-mono text-xs font-bold text-brand-teal uppercase mb-4 border-b border-gray-200 pb-2">Result: {study.result}</div>
                     <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">{study.desc}</p>
                     <button className="font-bold uppercase text-sm border-b-2 border-black dark:border-white hover:text-brand-teal hover:border-brand-teal transition-colors">Read Case Study →</button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 9: FAQS */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">Frequently Asked Questions</h2>
            <FAQSection title="Trademark FAQs" items={FAQS.trademark} />
            <FAQSection title="Personal Injury FAQs" items={FAQS.pi} />
            <FAQSection title="Contract FAQs" items={FAQS.contracts} />
         </div>
      </section>

      {/* SECTION 10: RESOURCES */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-black text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-4xl font-black uppercase mb-4">Practical Resources</h2>
                  <p className="font-mono text-gray-400">Download free templates, checklists, and guides.</p>
               </div>
               <button className="mt-6 md:mt-0 px-6 py-3 border-2 border-white font-bold uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                  <Download size={20} /> Download All (ZIP)
               </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {RESOURCES.map((res, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-white/20 hover:border-brand-teal hover:bg-white/5 transition-colors group cursor-pointer">
                     <div className="p-2 bg-white text-black rounded-sm group-hover:bg-brand-teal group-hover:text-white transition-colors">
                        <res.icon size={24} />
                     </div>
                     <div>
                        <div className="font-bold uppercase">{res.name}</div>
                        <div className="font-mono text-xs text-gray-400">{res.type} Format</div>
                     </div>
                     <Download size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 11: DISCLAIMER */}
      <section className="py-12 bg-brand-gray dark:bg-zinc-900 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-4 text-brand-amber">
               <AlertCircle size={24} />
               <h3 className="font-black uppercase text-lg">Important Legal Disclaimer</h3>
            </div>
            <p className="font-mono text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
               This Knowledge Base provides general legal information for educational purposes only. It is not legal advice and does not create an attorney-client relationship. Laws change frequently, and jurisdiction matters. Always consult a qualified attorney for your specific legal needs.
            </p>
            <div className="font-mono text-xs font-bold uppercase">
               Need Legal Advice? <a href="mailto:nikhilgoyal.advo@gmail.com" className="text-brand-teal hover:underline">Contact Me</a>
            </div>
         </div>
      </section>

    </div>
  );
};