import React from 'react';
import { motion } from 'framer-motion';
import {
   Download, Terminal, Briefcase,
   BookOpen, Cog, Users, Code, Mail,
   CheckCircle2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-brand-text min-h-screen">

         {/* SECTION 1: HERO */}
         <section className="grid md:grid-cols-12 gap-12 items-start mb-24 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

            <div className="md:col-span-8 relative z-10">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-blue tracking-wider shadow-glass">
                     About Nikhil Goyal
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase text-brand-text mb-8 leading-[0.9] tracking-tight">
                     Architecting<br />The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Future of Law</span>
                  </h1>
                  <div className="text-lg space-y-6 text-brand-muted border-l-2 border-brand-orange/50 pl-6 font-light leading-relaxed">
                     <p>
                        I am an attorney who bridges the gap between legal practice, AI, and system architecture.
                     </p>
                     <p className="font-bold text-brand-text text-xl">
                        I build intelligent systems that scale legal operations.
                     </p>
                     <p>
                        With a foundation in Trademark & IP and Personal Injury law, I engineer production-grade automation workflows—leveraging LLMs and connected tools to transform how law firms operate, evaluate cases, and drive results.
                     </p>
                  </div>

                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                     <div className="bg-brand-surface p-6 rounded-xl border border-brand-text/5 hover:bg-brand-text/5 transition-colors group">
                        <div className="font-bold uppercase text-xs mb-2 text-brand-muted tracking-widest group-hover:text-brand-orange transition-colors">Current Role</div>
                        <div className="font-bold text-sm md:text-base text-brand-text">Product Operations Associate @ EvenUp</div>
                     </div>
                     <div className="bg-brand-surface p-6 rounded-xl border border-brand-text/5 hover:bg-brand-text/5 transition-colors group">
                        <div className="font-bold uppercase text-xs mb-2 text-brand-muted tracking-widest group-hover:text-brand-blue transition-colors">Primary Focus</div>
                        <div className="font-bold text-sm md:text-base text-brand-text">Legal AI & Automation Infrastructure</div>
                     </div>
                  </div>
               </motion.div>
            </div>

            <div className="md:col-span-4 sticky top-28 relative z-10">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-card bg-brand-surface border border-brand-text/10 rounded-2xl p-4 shadow-2xl relative overflow-hidden group"
               >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 relative">
                     <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay z-10" />
                     <img
                        src="https://picsum.photos/id/454/600/800"
                        alt="Nikhil Professional Headshot"
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                     />
                  </div>
                  <button className="w-full py-3 bg-brand-text text-brand-surface font-bold uppercase rounded-lg hover:bg-brand-orange hover:text-white transition-all flex justify-center items-center gap-2 text-sm shadow-glow">
                     <Download size={18} /> Download CV
                  </button>
               </motion.div>
            </div>
         </section>

         {/* SECTION 2: PROFESSIONAL FOUNDATION */}
         <section className="mb-24 relative">
            <h2 className="text-4xl font-bold uppercase mb-12 flex items-center gap-4 text-brand-text">
               <Briefcase className="text-brand-orange" size={40} />
               The Legal Foundation
            </h2>

            <div className="relative border-l border-brand-text/10 ml-4 space-y-12">
               {/* Job 1 */}
               <div className="relative pl-12">
                  <div className="absolute -left-[9px] top-8 w-4 h-4 bg-brand-bg border-2 border-brand-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <div className="glass-card bg-brand-surface border border-brand-text/10 rounded-2xl p-8 hover:border-brand-green/30 transition-all group relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                        <div>
                           <h3 className="text-2xl font-bold uppercase text-brand-text group-hover:text-brand-green transition-colors">Business Operations</h3>
                           <div className="text-sm font-medium text-brand-muted">Family Enterprise (2020-2022)</div>
                        </div>
                        <div className="bg-brand-text/5 text-brand-green px-3 py-1 text-[10px] font-bold uppercase rounded-full border border-brand-green/20 mt-2 md:mt-0 shadow-glow">The Proving Ground</div>
                     </div>
                     <p className="text-brand-muted mb-0 max-w-3xl leading-relaxed relative z-10">
                        Returned to my hometown during the COVID-19 pandemic to manage and scale our family business. 
                        Navigated supply chain disruptions, optimized inventory logistics, and coordinated a cross-functional team under pressure, laying the foundational systems thinking I now apply to law.
                     </p>
                  </div>
               </div>

               {/* Job 2 */}
               <div className="relative pl-12">
                  <div className="absolute -left-[9px] top-8 w-4 h-4 bg-brand-bg border-2 border-brand-blue rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="glass-card bg-brand-surface border border-brand-text/10 rounded-2xl p-8 hover:border-brand-blue/30 transition-all group relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                        <div>
                           <h3 className="text-2xl font-bold uppercase text-brand-text group-hover:text-brand-blue transition-colors">Trademark & IP Law</h3>
                           <div className="text-sm font-medium text-brand-muted">DSPIN Consulting • WSLI (2022-2024)</div>
                        </div>
                        <div className="bg-brand-text/5 text-brand-blue px-3 py-1 text-[10px] font-bold uppercase rounded-full border border-brand-blue/20 mt-2 md:mt-0 shadow-glow">Legal Foundation</div>
                     </div>
                     <p className="text-brand-muted mb-8 max-w-3xl leading-relaxed relative z-10">Started my career filing 200+ trademark applications and drafting 500+ licensing agreements. Learned the precision of office actions and the strategy of dispute resolution.</p>

                     <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                        <div className="bg-black/40 p-4 rounded-xl border border-brand-text/5">
                           <div className="text-3xl font-bold text-brand-blue mb-1">200+</div>
                           <div className="text-[10px] uppercase font-bold text-brand-muted tracking-widest">Trademark Apps Filed</div>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl border border-brand-text/5">
                           <div className="text-3xl font-bold text-brand-blue mb-1">80%</div>
                           <div className="text-[10px] uppercase font-bold text-brand-muted tracking-widest">Opposition Success Rate</div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Job 3 */}
               <div className="relative pl-12">
                  <div className="absolute -left-[9px] top-8 w-4 h-4 bg-brand-bg border-2 border-brand-orange rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                  <div className="glass-card bg-brand-surface border border-brand-text/10 rounded-2xl p-8 hover:border-brand-orange/30 transition-all group relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                        <div>
                           <h3 className="text-2xl font-bold uppercase text-brand-text group-hover:text-brand-orange transition-colors">Product Operations Associate</h3>
                           <div className="text-sm font-medium text-brand-muted">EvenUp (2024-Present)</div>
                        </div>
                        <div className="bg-brand-orange text-white px-3 py-1 text-[10px] font-bold uppercase rounded-full shadow-glow mt-2 md:mt-0">Current Focus</div>
                     </div>
                     <p className="text-brand-muted mb-8 max-w-3xl leading-relaxed relative z-10">
                        Architecting AI-driven automation infrastructure for personal injury claims. Partnering with engineering and data science teams to refine workflow logic, evaluate AI outputs, and build scalable systems that generate demand letters and audit medical records with legal precision.
                     </p>

                     <div className="mb-8 relative z-10 bg-black/20 p-6 rounded-2xl border border-brand-text/5">
                        <strong className="text-brand-text text-sm uppercase tracking-wider block mb-4">Resources Built to Scale Team Impact:</strong>
                        <ul className="space-y-3 text-sm text-brand-muted mb-8">
                           <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0 shadow-glow"></div>
                              <div><strong className="text-brand-text font-semibold">NTD Writer Gem:</strong> Converts rough drafts into properly formatted, professional NTDs for demand letters.</div>
                           </li>
                           <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0 shadow-glow"></div>
                              <div><strong className="text-brand-text font-semibold">NTD List:</strong> Comprehensive database of commonly used NTDs referenced regularly by drafters.</div>
                           </li>
                           <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0 shadow-glow"></div>
                              <div><strong className="text-brand-text font-semibold">Prompts Library:</strong> Case Companion prompts for rapid information retrieval, Gemini prompts for major error detection, and standard-specific prompts for provider summaries.</div>
                           </li>
                           <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0 shadow-glow"></div>
                              <div><strong className="text-brand-text font-semibold">Getting Started Guides:</strong> Documentation for portals and summaries to ramp up new team members faster.</div>
                           </li>
                        </ul>

                        <strong className="text-brand-text text-sm uppercase tracking-wider block mb-4">Roadmap & Planned Infrastructure:</strong>
                        <ul className="space-y-3 text-sm text-brand-muted">
                           <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full border border-brand-orange mt-1.5 shrink-0"></div>
                              <div><strong className="text-brand-text font-semibold">Gemini Gem Protocol:</strong> Automated major error detection and rapid verdict research.</div>
                           </li>
                           <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full border border-brand-orange mt-1.5 shrink-0"></div>
                              <div><strong className="text-brand-text font-semibold">Centralized Knowledge Dashboard:</strong> A unified access point for all internal tools and operating procedures.</div>
                           </li>
                        </ul>
                     </div>

                     <div className="bg-brand-orange/10 border-l-2 border-brand-orange p-6 text-brand-text/90 italic rounded-r-lg relative z-10 text-sm mb-6">
                        <strong className="text-brand-orange block mb-3 uppercase not-italic tracking-wider font-bold">Deep AI Expertise</strong>
                        <p className="mb-4">Working extensively with AI since the launch of ChatGPT allows me to quickly identify systematic issues in AI-generated content, perform rigorous QA analysis, and engineer effective prompts.</p>
                        <p>The combination of this AI expertise and a track record of building scalable tools means I execute Product Ops correctly while continuing to create resources that multiply the team's productivity.</p>
                     </div>

                     <div className="bg-black/40 border border-brand-text/5 p-4 text-sm text-brand-text/90 italic rounded-lg relative z-10">
                        <strong>The Shift:</strong> "I don't just draft legal documents anymore. I build the intelligent machines that draft them."
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 3: AUTOMATION JOURNEY */}
         <section className="mb-24">
            <div className="bg-black/50 border border-brand-text/10 rounded-3xl p-8 md:p-12 relative overflow-hidden isolate shadow-2xl">
               <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
               <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transform rotate-12 translate-x-10 -translate-y-10">
                  <Terminal size={300} className="text-brand-text" />
               </div>
               <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-brand-blue/10 blur-[100px] -z-10 rounded-full" />

               <div className="relative z-10">
                  <h2 className="text-4xl font-bold uppercase mb-12 text-brand-text">Why I'm Learning Automation</h2>

                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                     <div>
                        <h3 className="text-lg font-bold uppercase mb-6 text-brand-orange flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-brand-orange" /> The Problem: Manual Waste
                        </h3>
                        <ul className="space-y-4 text-brand-muted text-sm">
                           <li className="flex items-start gap-3"><span className="text-red-500 font-bold">×</span> 70% of trademark apps are identical boilerplate.</li>
                           <li className="flex items-start gap-3"><span className="text-red-500 font-bold">×</span> Copy-pasting clauses into 500+ agreements.</li>
                           <li className="flex items-start gap-3"><span className="text-red-500 font-bold">×</span> Losing 10-15 hours/week to tasks a script could handle.</li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="text-lg font-bold uppercase mb-6 text-brand-green flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-brand-green" /> The Solution: Build Tools
                        </h3>
                        <ul className="space-y-4 text-brand-muted text-sm">
                           <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span> Google Apps Script for doc generation.</li>
                           <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span> n8n for connecting tools.</li>
                           <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span> "Build projects, break things, document fixes."</li>
                        </ul>
                     </div>
                  </div>

                  <h3 className="text-2xl font-bold uppercase mb-8 text-brand-text">What I'm Building</h3>
                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                     {[
                        { title: "Trademark App System", status: "Prototype", desc: "Auto-generates drafts from intake forms. Reduces prep time from 45m to 5m." },
                        { title: "Demand Letter QA", status: "Dev", desc: "10-point automated checklist for PI letters. Catches math errors and missing exhibits." },
                        { title: "Case Research Bot", status: "Early", desc: "Scrapes legal databases for case law. Organizes by issue and jurisdiction." },
                        { title: "Clause Library", status: "Testing", desc: "Searchable Notion DB of pre-approved clauses tagged by risk level." }
                     ].map((proj, i) => (
                        <div key={i} className="bg-brand-text/5 p-6 rounded-xl border border-brand-text/5 hover:bg-brand-text/10 hover:border-brand-text/20 transition-all group">
                           <div className="flex justify-between items-center mb-3">
                              <h4 className="font-bold uppercase text-sm group-hover:text-brand-blue transition-colors">{proj.title}</h4>
                              <span className="text-[10px] font-bold bg-brand-text/10 text-brand-text px-2 py-0.5 rounded uppercase tracking-wider">{proj.status}</span>
                           </div>
                           <p className="text-xs text-brand-muted leading-relaxed">{proj.desc}</p>
                        </div>
                     ))}
                  </div>

                  <div className="border-t border-brand-text/10 pt-6">
                     <p className="text-sm text-brand-muted/60 italic">
                        <strong className="text-brand-orange not-italic">NOTE:</strong> I am a Product Operations Associate & Attorney. I build production-grade automation. These resources are my open-source contribution to the legal industry.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 4: PHILOSOPHY */}
         <section className="mb-24">
            <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">My Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                  { icon: BookOpen, title: "Teach to Learn", desc: "I document publicly because teaching forces clarity. If I can't explain it, I don't understand it.", color: "text-brand-blue" },
                  { icon: Cog, title: "Automate or Die", desc: "Manual work doesn't scale. If you do it more than twice, script it. Tools compound over time.", color: "text-brand-orange" },
                  { icon: Users, title: "Open Source Wins", desc: "Most hoard templates. I share them. Knowledge compounds when it's freely accessible.", color: "text-brand-green" }
               ].map((phil, i) => (
                  <div key={i} className="bg-brand-surface p-8 rounded-2xl border border-brand-text/5 text-center hover:-translate-y-2 transition-transform shadow-glass group">
                     <div className="w-16 h-16 bg-brand-text/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <phil.icon size={32} className={phil.color} />
                     </div>
                     <h3 className="text-xl font-bold uppercase mb-4 text-brand-text">{phil.title}</h3>
                     <p className="text-sm text-brand-muted leading-relaxed">{phil.desc}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* SECTION 5: CURRENT FOCUS */}
         <section className="mb-24 bg-brand-surface border border-brand-text/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-brand-text/5 px-8 py-6 border-b border-brand-text/5 backdrop-blur-sm">
               <h2 className="text-2xl font-bold uppercase text-brand-text tracking-wide">Current Stack & Focus</h2>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
               <div className="p-8 hover:bg-brand-text/[0.02] transition-colors">
                  <h3 className="font-bold uppercase mb-6 text-brand-blue flex items-center gap-3 text-sm tracking-widest"><Briefcase size={16} /> Professional Work</h3>
                  <ul className="space-y-4 text-sm">
                     {["Personal Injury Demand Letters", "AI-Augmented Case Valuation", "End-to-end Litigation Process", "Occasional IP Consulting"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-brand-muted">
                           <div className="w-1.5 h-1.5 bg-brand-blue rounded-full opacity-50" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="p-8 hover:bg-brand-text/[0.02] transition-colors">
                  <h3 className="font-bold uppercase mb-6 text-brand-orange flex items-center gap-3 text-sm tracking-widest"><Code size={16} /> Automation Learning</h3>
                  <ul className="space-y-4 text-sm">
                     {["Google Apps Script Mastery", "n8n Workflow Automation", "AI Prompt Engineering", "Python (Learning Basics)"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-brand-muted">
                           <div className="w-1.5 h-1.5 bg-brand-orange rounded-full opacity-50" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="p-8 hover:bg-brand-text/[0.02] transition-colors">
                  <h3 className="font-bold uppercase mb-6 text-brand-green flex items-center gap-3 text-sm tracking-widest"><Terminal size={16} /> The Repository</h3>
                  <ul className="space-y-4 text-sm">
                     {["IP Law Guides", "Automation Tutorials", "1-2 Articles Per Month", "Building this site in React"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-brand-muted">
                           <div className="w-1.5 h-1.5 bg-brand-green rounded-full opacity-50" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>

         {/* SECTION 6: CREDENTIALS */}
         <section className="mb-24">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-bold uppercase mb-4 text-brand-text">Credentials</h2>
               <p className="text-brand-muted">Verified qualifications ensuring professional standards.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
               {[
                  { label: "Bar Council of Delhi", sub: "D/2371/2023" },
                  { label: "All India Bar Exam", sub: "Qualified" },
                  { label: "Trademark Attorney", sub: "Code 54191" },
                  { label: "B.B.A. LL.B.", sub: "Symbiosis Noida" }
               ].map((cred, i) => (
                  <div key={i} className="glass-card bg-brand-surface border border-brand-text/10 px-8 py-4 rounded-xl text-center hover:border-brand-blue/30 hover:shadow-glow transition-all">
                     <div className="font-bold uppercase text-sm text-brand-text mb-1">{cred.label}</div>
                     <div className="text-[10px] uppercase font-bold text-brand-blue tracking-wider">{cred.sub}</div>
                  </div>
               ))}
            </div>
         </section>

         {/* SECTION 7: BEYOND WORK */}
         <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-4xl font-bold uppercase mb-8 text-brand-text">Beyond The Office</h2>
               <div className="bg-brand-surface p-8 rounded-2xl border border-brand-text/5 mb-8 shadow-glass group hover:bg-brand-text/5 transition-colors">
                  <h3 className="text-xl font-bold uppercase mb-3 text-brand-green">Jotrishi Organics (Co-Founder)</h3>
                  <p className="text-brand-muted text-sm mb-4 leading-relaxed">D2C organic food brand connecting Haridwar's women farmers with consumers. Profitable in 3 months.</p>
                  <div className="text-xs italic text-brand-muted/70 border-l-2 border-brand-green pl-4">
                     "Running a small business taught me operations and systems thinking in ways legal work never could."
                  </div>
               </div>

               <h3 className="font-bold uppercase mb-6 flex items-center gap-2 text-sm text-brand-text"><BookOpen size={16} /> Reading List</h3>
               <ul className="space-y-3 text-sm text-brand-muted">
                  <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-blue" /> Supreme Court Judgments (Weekly)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-blue" /> Apps Script Documentation</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-blue" /> Systems Thinking Books</li>
               </ul>
            </div>
            <div className="relative h-full min-h-[300px] bg-brand-surface border border-brand-text/10 rounded-3xl flex items-center justify-center p-8 text-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-radial from-brand-blue/10 to-transparent opacity-50" />
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">Life in Delhi NCR</h3>
                  <p className="text-brand-muted text-sm max-w-sm mx-auto leading-relaxed">
                     Early morning gym. Legal work by day. Code sessions by night. Weekends for Jotrishi & Content.
                  </p>
               </div>
            </div>
         </section>

         {/* SECTION 8: TARGET AUDIENCE */}
         <section className="mb-24">
            <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">Who This Is For</h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                  { title: "Law Students", want: "Career guidance & real case studies.", get: "Skill-building resources & honest advice." },
                  { title: "Legal Pros", want: "Automation tools & efficiency hacks.", get: "Copy-paste scripts & no-code tutorials." },
                  { title: "Collaborators", want: "Reliable partner for IP/PI work.", get: "Portfolio of 200+ filings & code samples." }
               ].map((persona, i) => (
                  <div key={i} className="glass-card bg-brand-surface border border-brand-text/10 p-8 rounded-2xl hover:bg-brand-text/5 transition-colors group relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                     <h3 className="text-2xl font-bold uppercase mb-6 text-brand-text">{persona.title}</h3>
                     <div className="mb-6">
                        <div className="text-[10px] font-bold uppercase text-brand-muted mb-2 tracking-widest">You Want</div>
                        <div className="text-sm text-brand-text">{persona.want}</div>
                     </div>
                     <div>
                        <div className="text-[10px] font-bold uppercase text-brand-muted mb-2 tracking-widest">You'll Find</div>
                        <div className="text-sm font-bold text-brand-blue">{persona.get}</div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* SECTION 9: CONTACT & NEXT STEPS */}
         <section className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold uppercase mb-12 text-brand-text">Let's Connect</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
               <div className="border border-brand-text/10 p-8 bg-brand-surface rounded-2xl hover:bg-brand-text/5 transition-colors">
                  <h3 className="font-bold uppercase mb-4 text-brand-blue flex items-center gap-2 text-sm tracking-wide"><Mail size={18} /> Professional Inquiries</h3>
                  <p className="text-sm mb-4 text-brand-muted">Legal work (IP/Contracts) or Automation Consulting.</p>
                  <a href="mailto:nikhilgoyal.advo@gmail.com" className="font-bold text-brand-text hover:text-brand-orange transition-colors">nikhilgoyal.advo@gmail.com</a>
               </div>
               <div className="border border-brand-text/10 p-8 bg-brand-surface rounded-2xl hover:bg-brand-text/5 transition-colors">
                  <h3 className="font-bold uppercase mb-4 text-brand-orange flex items-center gap-2 text-sm tracking-wide"><ArrowRight size={18} /> Explore Next</h3>
                  <ul className="space-y-3 text-sm">
                     <li><Link to="/law" className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors"><div className="w-1 h-1 bg-brand-orange rounded-full" /> Trademark Law Resources</Link></li>
                     <li><Link to="/tech" className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors"><div className="w-1 h-1 bg-brand-orange rounded-full" /> Automation Basics</Link></li>
                     <li><Link to="/projects" className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors"><div className="w-1 h-1 bg-brand-orange rounded-full" /> View Current Projects</Link></li>
                  </ul>
               </div>
            </div>

            <div className="p-12 border border-brand-text/10 bg-brand-surface rounded-3xl inline-block text-left w-full relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50" />
               <h4 className="font-bold uppercase mb-6 text-center text-xl text-brand-text">A Final Note</h4>
               <p className="text-sm mb-6 text-center max-w-2xl mx-auto text-brand-muted leading-relaxed">
                  I'm still learning. I don't have all the answers. I make mistakes. But I'm building in public and putting it out there for free.
               </p>
               <p className="text-sm font-bold text-center text-brand-text">
                  If that resonates—stick around. Let's figure this out together.
               </p>
               <div className="mt-10 text-center">
                  <div className="font-bold uppercase text-xl text-brand-text mb-2">— Nikhil Goyal</div>
                  <span className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-text/5 px-3 py-1 rounded-full border border-brand-text/5">Lawyer. Learner. Builder.</span>
               </div>
            </div>
         </section>

      </div>
   );
};