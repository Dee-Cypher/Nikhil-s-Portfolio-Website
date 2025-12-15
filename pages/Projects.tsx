import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, X, ArrowRight, Clock, Shield, BookOpen, 
  Zap, Calendar, Layout, DollarSign, Terminal,
  CheckCircle2, AlertCircle
} from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Legal Tech Automation', 'Workflow Systems', 'AI-Powered Tools', 'Personal Ventures'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      
      {/* HERO SECTION */}
      <section className="pt-20 pb-20 border-b-2 border-black dark:border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-brand-teal text-white border-2 border-black dark:border-white font-mono font-bold uppercase mb-6 shadow-brutal-sm">
              How I Work
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
              I Don't Believe In<br/>
              <span className="text-brand-amber">Gatekeeping Knowledge</span>
            </h1>
            <p className="font-mono text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 border-l-4 border-black dark:border-white pl-6">
              Everything I know, I share. Everything I build, I document. If you're looking for someone who hoards trade secrets, you're in the wrong place.
            </p>
            <p className="font-mono text-sm md:text-base max-w-3xl mb-12">
              I bring the automation expertise and legal domain knowledge. You bring the challenge. 
              Here's what makes working with me different: I don't just build you a tool and disappear. 
              I teach you how it works. Because a system you don't understand is a system you can't trust.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: FIT CHECK */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* GOOD FIT */}
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-500 text-white p-2 border-2 border-black dark:border-white">
                  <Check size={24} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-black uppercase">You're A Great Fit If...</h2>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "You're drowning in manual work", desc: "Losing 10-20 hours/week to copy-paste tasks and data entry." },
                  { title: "You want internal tools that work", desc: "You need specific tools your team will actually use, not generic software." },
                  { title: "You need a bridge", desc: "You need someone who speaks both 'Lawyer' and 'Developer'." },
                  { title: "You value documentation", desc: "You want runbooks, video guides, and full transparency." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold uppercase text-sm mb-1">{item.title}</div>
                      <div className="font-mono text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* BAD FIT */}
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] opacity-90">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-500 text-white p-2 border-2 border-black dark:border-white">
                  <X size={24} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-black uppercase">We're Not A Fit If...</h2>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "You need 24/7 instant support", desc: "I work effectively across timezones, but I am not a 24/7 helpdesk." },
                  { title: "You want zero involvement", desc: "I build WITH you. I need your domain expertise and feedback." },
                  { title: "You need enterprise infra", desc: "If you need 99.999% uptime for millions of users, hire a DevOps team." },
                  { title: "You hate documentation", desc: "I document everything. If that annoys you, it won't work." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold uppercase text-sm mb-1">{item.title}</div>
                      <div className="font-mono text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16">Three Rules I Never Break</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "No Black Boxes", desc: "Every system comes with source code, docs, and training. If I build it, you own it completely." },
              { icon: Clock, title: "Start Small, Prove Value", desc: "No massive 6-month contracts. We build a small win in Week 1, prove ROI, then scale." },
              { icon: Shield, title: "Teach While Building", desc: "Weekly demos and recorded walkthroughs. You get the tool AND the knowledge to maintain it." }
            ].map((rule, i) => (
              <div key={i} className="border-2 border-black dark:border-white p-8 hover:-translate-y-2 transition-transform shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                <div className="w-16 h-16 mx-auto bg-brand-teal text-white border-2 border-black dark:border-white flex items-center justify-center mb-6 shadow-brutal-sm">
                  <rule.icon size={32} />
                </div>
                <h3 className="text-xl font-black uppercase mb-4">{rule.title}</h3>
                <p className="font-mono text-sm text-gray-600 dark:text-gray-300">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">My 4-Week Sprint Process</h2>
             <p className="font-mono">Ship fast. Measure impact. Iterate.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-teal before:to-transparent">
            {[
              { week: "Week 1", title: "Discovery & Audit", desc: "2-hour workflow mapping. We identify the biggest time sinks. You get a visual map and ROI potential.", commit: "2-3 hours" },
              { week: "Week 2", title: "Blueprint & Approval", desc: "I design the architecture. You review wireframes. We align on scope so there are no surprises.", commit: "1-2 hours" },
              { week: "Week 3", title: "Build & Iterate", desc: "I build the prototype. You see weekly demos. You break things, I fix them in real-time.", commit: "1 hour" },
              { week: "Week 4", title: "Deploy & Train", desc: "Production launch. Complete runbook documentation. Live team training session. Handoff.", commit: "2-3 hours" }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black group-hover:bg-brand-teal group-hover:text-white transition-colors shadow-brutal-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="font-bold text-xs">{i + 1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold text-brand-teal uppercase">{step.week}</span>
                    <span className="font-mono text-[10px] bg-brand-gray dark:bg-zinc-800 px-2 py-1 uppercase">Your Time: {step.commit}</span>
                  </div>
                  <h3 className="font-black uppercase text-xl mb-2">{step.title}</h3>
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-brand-amber border-2 border-black dark:border-white text-center shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
             <p className="font-black uppercase text-black mb-2">Post-Launch Guarantee</p>
             <p className="font-mono text-sm text-black">30 Days of support included. If I broke it, I fix it for free.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: EXPECTATIONS */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">The Honest Version</h2>
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                     <CheckCircle2 className="text-green-500" /> What You Get
                  </h3>
                  <ul className="space-y-4 font-mono text-sm">
                     <li className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
                        <strong>Custom Automation:</strong> Built specifically for your workflow, not off-the-shelf.
                     </li>
                     <li className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
                        <strong>Full Ownership:</strong> Source code, admin access, no licensing fees.
                     </li>
                     <li className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
                        <strong>Human-Friendly:</strong> Intuitive interfaces your team will actually use.
                     </li>
                  </ul>
               </div>
               <div>
                  <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                     <AlertCircle className="text-red-500" /> What You Don't Get
                  </h3>
                  <ul className="space-y-4 font-mono text-sm">
                     <li className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10">
                        <strong>A Magic Wand:</strong> Automation takes time to build right. Expect 3-6 weeks.
                     </li>
                     <li className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10">
                        <strong>24/7 Hotline:</strong> I'm one person. Response time is 24-48 hours.
                     </li>
                     <li className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10">
                        <strong>Cheap Labor:</strong> You pay for expertise and solutions, not just hours.
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 5: PRICING */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black uppercase mb-4">Pricing Philosophy</h2>
               <p className="font-mono text-lg max-w-2xl mx-auto">
                  I don't bill by the hour. It punishes efficiency. I bill by the project: <strong>Fixed Scope. Fixed Price. No Surprises.</strong>
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: "Automation Scripts", range: "$500 - $1,500", time: "1-2 Weeks", ex: ["PDF Generation", "Scheduled Emails", "Data Validation"] },
                  { title: "Workflow Systems", range: "$2,500 - $5,000", time: "3-4 Weeks", ex: ["Case Assignment Logic", "Doc Gen Pipeline", "CRM Integration"], feat: true },
                  { title: "Complex Builds", range: "$5,000 - $10k+", time: "6-8 Weeks", ex: ["Custom Dashboards", "Verdict Extraction", "Multi-Tool Sync"] }
               ].map((tier, i) => (
                  <div key={i} className={`relative flex flex-col p-8 border-2 border-black dark:border-white bg-white dark:bg-black shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] ${tier.feat ? 'transform md:-translate-y-4' : ''}`}>
                     {tier.feat && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-teal text-white px-4 py-1 font-bold uppercase text-xs border-2 border-black dark:border-white">Most Common</div>}
                     <h3 className="text-2xl font-black uppercase mb-2">{tier.title}</h3>
                     <div className="text-3xl font-black text-brand-teal mb-2">{tier.range}</div>
                     <div className="font-mono text-xs uppercase font-bold text-gray-500 mb-6">Timeline: {tier.time}</div>
                     <ul className="space-y-2 mb-8 flex-grow">
                        {tier.ex.map((e, j) => (
                           <li key={j} className="font-mono text-sm flex items-center gap-2">
                              <ArrowRight size={14} className="text-brand-amber"/> {e}
                           </li>
                        ))}
                     </ul>
                     <Link to="/contact" className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase text-center border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-brand-teal hover:text-white transition-colors">
                        Get A Quote
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 6: PAST RESULTS (PROJECT GRID) */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
              <div>
                 <h2 className="text-4xl font-black uppercase mb-4">What Happens When We Work Together</h2>
                 <p className="font-mono text-gray-600 dark:text-gray-400">Social proof. Real results. Actual code.</p>
              </div>
              
              {/* Filter Bar */}
              <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1 border-2 border-black dark:border-white font-bold uppercase text-xs shadow-brutal-sm hover:translate-y-[1px] hover:shadow-none transition-all ${
                      filter === cat
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-white text-black dark:bg-black dark:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                 <ProjectCard key={project.id} project={project} index={index} />
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-24 bg-brand-teal text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-none">Let's Start With A Conversation</h2>
            <p className="font-mono text-lg mb-12 max-w-2xl mx-auto">
               No sales pitch. No obligation. Just a free 30-minute audit to see if automation can solve your problem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-black">
               <Link to="/contact" className="px-8 py-4 bg-white border-2 border-black font-bold uppercase text-lg shadow-brutal-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  Book Free Workflow Audit
               </Link>
               <a href="mailto:nikhilgoyal.advo@gmail.com" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase text-lg hover:bg-white hover:text-black transition-colors">
                  Or Email Me First
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};