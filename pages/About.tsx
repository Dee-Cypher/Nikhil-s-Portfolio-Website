import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Terminal, Briefcase, Zap, 
  BookOpen, Cog, Users, Code, Mail, Linkedin, 
  CheckCircle2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-black dark:text-white">
      
      {/* SECTION 1: HERO */}
      <section className="grid md:grid-cols-12 gap-12 items-start mb-24 border-b-2 border-black dark:border-white pb-16">
        <div className="md:col-span-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
             <div className="inline-block px-3 py-1 bg-brand-teal text-white border-2 border-black dark:border-white font-mono font-bold uppercase mb-6 shadow-brutal-sm">
                About Nikhil Goyal
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase text-black dark:text-white mb-8 leading-[0.9]">
                Lawyer Learning<br/>To <span className="text-brand-teal">Build</span>
              </h1>
              <div className="font-mono text-lg space-y-6 text-gray-800 dark:text-gray-300 border-l-4 border-black dark:border-white pl-6">
                <p>
                  I practice two areas of law: Trademark & IP (2.5+ years) and Personal Injury (current focus at EvenUp). But the legal work isn't the whole story.
                </p>
                <p className="font-bold text-black dark:text-white text-xl">
                  I'm also learning to automate it.
                </p>
                <p>
                  Not as a developer who codes for a living. As a lawyer who got tired of doing the same thing 200 times and decided there had to be a better way.
                </p>
              </div>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                 <div className="bg-brand-gray dark:bg-zinc-900 p-4 border-2 border-black dark:border-white hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                    <div className="font-bold uppercase text-xs mb-1 text-gray-500 dark:text-gray-400">Current Role</div>
                    <div className="font-black text-sm md:text-base">Legal Operations Analyst @ EvenUp</div>
                 </div>
                 <div className="bg-brand-gray dark:bg-zinc-900 p-4 border-2 border-black dark:border-white hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                    <div className="font-bold uppercase text-xs mb-1 text-gray-500 dark:text-gray-400">Side Mission</div>
                    <div className="font-black text-sm md:text-base">Building Automation Tools</div>
                 </div>
              </div>
           </motion.div>
        </div>
        
        <div className="md:col-span-4 sticky top-28">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-3 shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff]"
           >
              <div className="aspect-[3/4] overflow-hidden border-2 border-black dark:border-white mb-4 bg-gray-200 dark:bg-gray-800">
                <img 
                  src="https://picsum.photos/id/454/600/800" 
                  alt="Nikhil Professional Headshot" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <button className="w-full py-3 bg-brand-teal text-white font-bold uppercase border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex justify-center items-center gap-2">
                <Download size={18} /> Download CV
              </button>
           </motion.div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL FOUNDATION */}
      <section className="mb-24">
        <h2 className="text-4xl font-black uppercase mb-12 flex items-center gap-4">
          <Briefcase className="text-brand-amber" size={40} />
          The Legal Foundation
        </h2>
        
        <div className="relative border-l-4 border-black dark:border-white ml-4 space-y-12">
           {/* Job 1 */}
           <div className="relative pl-12">
              <div className="absolute -left-[14px] top-6 w-6 h-6 bg-brand-teal border-2 border-black dark:border-white rounded-full"></div>
              <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                       <h3 className="text-2xl font-black uppercase">Trademark & IP Law</h3>
                       <div className="font-mono text-sm font-bold text-gray-500 dark:text-gray-400">DSPIN Consulting • WSLI (2022-2024)</div>
                    </div>
                    <div className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 font-mono text-xs font-bold uppercase mt-2 md:mt-0">The Origin</div>
                 </div>
                 <p className="font-mono text-sm mb-6 max-w-3xl text-gray-700 dark:text-gray-300">Started my career filing 200+ trademark applications and drafting 500+ licensing agreements. Learned the precision of office actions and the strategy of dispute resolution.</p>
                 <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-brand-gray dark:bg-black p-3 border border-black dark:border-white">
                       <div className="text-3xl font-black text-brand-teal">200+</div>
                       <div className="font-mono text-xs uppercase text-gray-600 dark:text-gray-400">Trademark Apps Filed</div>
                    </div>
                    <div className="bg-brand-gray dark:bg-black p-3 border border-black dark:border-white">
                       <div className="text-3xl font-black text-brand-teal">80%</div>
                       <div className="font-mono text-xs uppercase text-gray-600 dark:text-gray-400">Opposition Success Rate</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Job 2 */}
           <div className="relative pl-12">
              <div className="absolute -left-[14px] top-6 w-6 h-6 bg-brand-amber border-2 border-black dark:border-white rounded-full"></div>
              <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                       <h3 className="text-2xl font-black uppercase">Personal Injury Law</h3>
                       <div className="font-mono text-sm font-bold text-gray-500 dark:text-gray-400">EvenUp (2024-Present)</div>
                    </div>
                    <div className="bg-brand-teal text-white px-3 py-1 font-mono text-xs font-bold uppercase mt-2 md:mt-0">Current Focus</div>
                 </div>
                 <p className="font-mono text-sm mb-6 max-w-3xl text-gray-700 dark:text-gray-300">Shifted focus to high-volume personal injury demand letters. Analyzing medical records, calculating settlement values, and working at scale.</p>
                 <div className="bg-brand-amber/10 dark:bg-brand-amber/20 border-l-4 border-brand-amber p-4 font-mono text-sm text-black dark:text-white">
                    <strong>The Realization:</strong> "How do you maintain quality when drafting 20+ demand letters a week? That's where automation comes in."
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 3: AUTOMATION JOURNEY */}
      <section className="mb-24">
        <div className="bg-black text-white p-8 md:p-12 border-2 border-black dark:border-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Terminal size={200} />
           </div>
           
           <div className="relative z-10">
              <h2 className="text-4xl font-black uppercase mb-8">Why I'm Learning Automation</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                 <div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-brand-amber">The Problem: Manual Waste</h3>
                    <ul className="space-y-3 font-mono text-sm text-gray-300">
                       <li className="flex items-start gap-3"><span className="text-red-500">❌</span> 70% of trademark apps are identical boilerplate.</li>
                       <li className="flex items-start gap-3"><span className="text-red-500">❌</span> Copy-pasting clauses into 500+ agreements.</li>
                       <li className="flex items-start gap-3"><span className="text-red-500">❌</span> Losing 10-15 hours/week to tasks a script could handle.</li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-brand-teal">The Solution: Build Tools</h3>
                    <ul className="space-y-3 font-mono text-sm text-gray-300">
                       <li className="flex items-start gap-3"><span className="text-green-500">✅</span> Google Apps Script for doc generation.</li>
                       <li className="flex items-start gap-3"><span className="text-green-500">✅</span> n8n for connecting tools.</li>
                       <li className="flex items-start gap-3"><span className="text-green-500">✅</span> "Build projects, break things, document fixes."</li>
                    </ul>
                 </div>
              </div>

              <h3 className="text-2xl font-black uppercase mb-6">What I'm Building</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-12 text-black">
                 {[
                   { title: "Trademark App System", status: "Prototype", desc: "Auto-generates drafts from intake forms. Reduces prep time from 45m to 5m." },
                   { title: "Demand Letter QA", status: "Dev", desc: "10-point automated checklist for PI letters. Catches math errors and missing exhibits." },
                   { title: "Case Research Bot", status: "Early", desc: "Scrapes legal databases for case law. Organizes by issue and jurisdiction." },
                   { title: "Clause Library", status: "Testing", desc: "Searchable Notion DB of pre-approved clauses tagged by risk level." }
                 ].map((proj, i) => (
                    <div key={i} className="bg-white p-4 border-2 border-black shadow-brutal-sm hover:-translate-y-1 transition-transform">
                       <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold uppercase text-sm md:text-base">{proj.title}</h4>
                          <span className="text-[10px] font-mono bg-black text-white px-2 py-0.5 uppercase">{proj.status}</span>
                       </div>
                       <p className="font-mono text-xs text-gray-600">{proj.desc}</p>
                    </div>
                 ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                 <p className="font-mono text-sm text-gray-400 italic">
                    <strong className="text-brand-amber not-italic">DISCLAIMER:</strong> I'm not a "legal tech expert" or "senior engineer." I'm a lawyer learning to code. If you're 10 steps ahead, this won't help you. If you're where I was 6 months ago, it might be exactly what you need.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY */}
      <section className="mb-24">
         <h2 className="text-4xl font-black uppercase mb-12 text-center">My Philosophy</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { icon: BookOpen, title: "Teach to Learn", desc: "I document publicly because teaching forces clarity. If I can't explain it, I don't understand it." },
               { icon: Cog, title: "Automate or Die", desc: "Manual work doesn't scale. If you do it more than twice, script it. Tools compound over time." },
               { icon: Users, title: "Open Source Wins", desc: "Most hoard templates. I share them. Knowledge compounds when it's freely accessible." }
            ].map((phil, i) => (
               <div key={i} className="bg-brand-gray dark:bg-zinc-900 p-8 border-2 border-black dark:border-white text-center hover:-translate-y-2 transition-transform shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
                  <div className="w-16 h-16 bg-white dark:bg-black border-2 border-black dark:border-white flex items-center justify-center mx-auto mb-6 shadow-brutal-sm">
                     <phil.icon size={32} className="text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-4">{phil.title}</h3>
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-300">{phil.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* SECTION 5: CURRENT FOCUS */}
      <section className="mb-24 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff]">
         <div className="bg-black text-white px-6 py-4 border-b-2 border-white dark:border-white">
            <h2 className="text-2xl font-black uppercase">Current Stack & Focus</h2>
         </div>
         <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-black dark:divide-white">
            <div className="p-8">
               <h3 className="font-bold uppercase mb-4 text-brand-teal flex items-center gap-2"><Briefcase size={18}/> Professional Work</h3>
               <ul className="space-y-3 font-mono text-sm list-disc pl-4 text-gray-700 dark:text-gray-300">
                  <li>Personal Injury Demand Letters</li>
                  <li>AI-Augmented Case Valuation</li>
                  <li>End-to-end Litigation Process</li>
                  <li>Occasional IP Consulting</li>
               </ul>
            </div>
            <div className="p-8">
               <h3 className="font-bold uppercase mb-4 text-brand-amber flex items-center gap-2"><Code size={18}/> Automation Learning</h3>
               <ul className="space-y-3 font-mono text-sm list-disc pl-4 text-gray-700 dark:text-gray-300">
                  <li>Google Apps Script Mastery</li>
                  <li>n8n Workflow Automation</li>
                  <li>AI Prompt Engineering</li>
                  <li>Python (Learning Basics)</li>
               </ul>
            </div>
            <div className="p-8">
               <h3 className="font-bold uppercase mb-4 text-gray-500 dark:text-gray-400 flex items-center gap-2"><Code size={18}/> The Repository</h3>
               <ul className="space-y-3 font-mono text-sm list-disc pl-4 text-gray-700 dark:text-gray-300">
                  <li>IP Law Guides</li>
                  <li>Automation Tutorials</li>
                  <li>1-2 Articles Per Month</li>
                  <li>Building this site in React</li>
               </ul>
            </div>
         </div>
      </section>

      {/* SECTION 6: CREDENTIALS */}
      <section className="mb-24">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase mb-4">Credentials</h2>
            <p className="font-mono text-gray-600 dark:text-gray-400">Verified qualifications ensuring professional standards.</p>
         </div>
         
         <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
               { label: "Bar Council of Delhi", sub: "D/2371/2023" },
               { label: "All India Bar Exam", sub: "Qualified" },
               { label: "Trademark Attorney", sub: "Code 54191" },
               { label: "B.B.A. LL.B.", sub: "Symbiosis Noida" }
            ].map((cred, i) => (
               <div key={i} className="bg-white dark:bg-black border-2 border-black dark:border-white px-6 py-3 text-center shadow-brutal-sm hover:-translate-y-1 transition-transform">
                  <div className="font-bold uppercase text-sm">{cred.label}</div>
                  <div className="font-mono text-xs text-brand-teal font-bold">{cred.sub}</div>
               </div>
            ))}
         </div>
      </section>

      {/* SECTION 7: BEYOND WORK */}
      <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
         <div>
            <h2 className="text-4xl font-black uppercase mb-6">Beyond The Office</h2>
            <div className="bg-brand-gray dark:bg-zinc-900 p-6 border-2 border-black dark:border-white mb-8 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
               <h3 className="text-xl font-black uppercase mb-2">Jotrishi Organics (Co-Founder)</h3>
               <p className="font-mono text-sm mb-4 text-gray-700 dark:text-gray-300">D2C organic food brand connecting Haridwar's women farmers with consumers. Profitable in 3 months.</p>
               <div className="font-mono text-xs italic text-gray-500 dark:text-gray-400 border-l-2 border-brand-teal pl-3">
                  "Running a small business taught me operations and systems thinking in ways legal work never could."
               </div>
            </div>
            
            <h3 className="font-bold uppercase mb-4 flex items-center gap-2"><BookOpen size={20}/> Reading List</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300">
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-teal flex-shrink-0"/> Supreme Court Judgments (Weekly)</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-teal flex-shrink-0"/> Apps Script Documentation</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-teal flex-shrink-0"/> Systems Thinking Books</li>
            </ul>
         </div>
         <div className="relative h-full min-h-[300px] bg-brand-teal/10 border-2 border-black dark:border-white flex items-center justify-center p-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/20 to-transparent">
            <div>
               <h3 className="text-2xl font-black uppercase mb-4">Life in Delhi NCR</h3>
               <p className="font-mono text-sm max-w-sm mx-auto text-gray-700 dark:text-gray-300">
                  Early morning gym. Legal work by day. Code sessions by night. Weekends for Jotrishi & Content.
               </p>
            </div>
         </div>
      </section>

      {/* SECTION 8: TARGET AUDIENCE */}
      <section className="mb-24">
         <h2 className="text-4xl font-black uppercase mb-12 text-center">Who This Is For</h2>
         <div className="grid md:grid-cols-3 gap-6">
            {[
               { title: "Law Students", want: "Career guidance & real case studies.", get: "Skill-building resources & honest advice." },
               { title: "Legal Pros", want: "Automation tools & efficiency hacks.", get: "Copy-paste scripts & no-code tutorials." },
               { title: "Collaborators", want: "Reliable partner for IP/PI work.", get: "Portfolio of 200+ filings & code samples." }
            ].map((persona, i) => (
               <div key={i} className="border-2 border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors group bg-white dark:bg-zinc-900">
                  <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-brand-teal">{persona.title}</h3>
                  <div className="mb-4">
                     <div className="text-xs font-bold uppercase opacity-70 mb-1">You Want</div>
                     <div className="font-mono text-sm">{persona.want}</div>
                  </div>
                  <div>
                     <div className="text-xs font-bold uppercase opacity-70 mb-1">You'll Find</div>
                     <div className="font-mono text-sm font-bold">{persona.get}</div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* SECTION 9: CONTACT & NEXT STEPS */}
      <section className="text-center max-w-4xl mx-auto">
         <h2 className="text-4xl font-black uppercase mb-8">Let's Connect</h2>
         
         <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="border-2 border-black dark:border-white p-6 bg-white dark:bg-zinc-900 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
               <h3 className="font-bold uppercase mb-4 text-brand-teal flex items-center gap-2"><Mail size={18}/> Professional Inquiries</h3>
               <p className="font-mono text-sm mb-4 text-gray-700 dark:text-gray-300">Legal work (IP/Contracts) or Automation Consulting.</p>
               <a href="mailto:nikhilgoyal.advo@gmail.com" className="font-bold underline decoration-2 underline-offset-4 hover:text-brand-teal">nikhilgoyal.advo@gmail.com</a>
            </div>
            <div className="border-2 border-black dark:border-white p-6 bg-white dark:bg-zinc-900 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff]">
               <h3 className="font-bold uppercase mb-4 text-brand-amber flex items-center gap-2"><ArrowRight size={18}/> Explore Next</h3>
               <ul className="space-y-2 font-mono text-sm">
                  <li><Link to="/law" className="hover:text-brand-teal hover:underline dark:text-white">→ Trademark Law Resources</Link></li>
                  <li><Link to="/tech" className="hover:text-brand-teal hover:underline dark:text-white">→ Automation Basics</Link></li>
                  <li><Link to="/projects" className="hover:text-brand-teal hover:underline dark:text-white">→ View Current Projects</Link></li>
               </ul>
            </div>
         </div>

         <div className="p-8 border-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900 inline-block text-left w-full shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff]">
            <h4 className="font-black uppercase mb-4 text-center text-xl">A Final Note</h4>
            <p className="font-mono text-sm mb-4 text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
               I'm still learning. I don't have all the answers. I make mistakes. But I'm building in public and putting it out there for free.
            </p>
            <p className="font-mono text-sm font-bold text-center">
               If that resonates—stick around. Let's figure this out together.
            </p>
            <div className="mt-8 text-center font-black uppercase text-xl">
               — Nikhil Goyal<br/>
               <span className="text-brand-teal text-sm font-bold bg-black px-2 py-0.5 mt-2 inline-block">Lawyer. Learner. Builder.</span>
            </div>
         </div>
      </section>

    </div>
  );
};