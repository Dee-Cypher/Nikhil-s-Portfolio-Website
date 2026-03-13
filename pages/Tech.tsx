import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Terminal, Code, Database, Cpu, Zap,
   AlertCircle,
   FileCode, Workflow, CheckCircle, ExternalLink,
   BookOpen, Star, AlertTriangle, Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- DATA ---

const TOOLS = [
   {
      id: 'gas',
      name: 'Google Apps Script',
      use: 'Sheets Automation',
      desc: 'JavaScript that runs in Google Workspace (Sheets, Docs, Gmail).',
      why: 'No install required, free, perfect for lawyers.',
      built: 'Trademark generator, Contract clause library.',
      difficulty: 3,
      icon: FileCode,
      color: 'text-brand-green'
   },
   {
      id: 'n8n',
      name: 'n8n',
      use: 'Workflow Automation',
      desc: 'Visual workflow builder (like Zapier but open-source).',
      why: 'Visual builder, connects 400+ apps, self-hostable.',
      built: 'Email to Sheets, Notion sync, Research alerts.',
      difficulty: 2,
      icon: Workflow,
      color: 'text-brand-orange'
   },
   {
      id: 'claude',
      name: 'Claude (Anthropic)',
      use: 'Legal Analysis & Code Gen',
      desc: 'Advanced AI assistant (my #1 recommendation).',
      why: 'It writes the code so I don\'t have to. Best for legal reasoning.',
      built: 'Drafting demand letters, generating scripts.',
      difficulty: 1,
      icon: Cpu,
      color: 'text-brand-blue'
   },
   {
      id: 'gemini',
      name: 'Google AI Studio',
      use: 'API & Batch Processing',
      desc: 'Google\'s AI platform with generous free tier.',
      why: 'Free API (60 req/min), good for batch docs.',
      built: 'Document classification, Invoice extraction.',
      difficulty: 2,
      icon: Zap,
      color: 'text-brand-purple'
   },
   {
      id: 'notion',
      name: 'Notion',
      use: 'Knowledge Management',
      desc: 'All-in-one workspace (notes + databases).',
      why: 'Powerful DBs, API for automation, great for libraries.',
      built: 'Clause library, Case law repository.',
      difficulty: 2,
      icon: Database,
      color: 'text-brand-text'
   },
   {
      id: 'cursor',
      name: 'Cursor',
      use: 'AI Code Editor',
      desc: 'VS Code fork with built-in AI assistance.',
      why: 'I describe what I want in plain English, it writes the code.',
      built: 'Building this website, local scripts.',
      difficulty: 2,
      icon: Terminal,
      color: 'text-brand-blue'
   }
];

const TUTORIALS = [
   {
      category: 'Apps Script',
      level: 'Beginner',
      title: 'Your First Script: "Hello, Legal World"',
      time: '30 min',
      desc: 'Opening the editor, writing your first function with AI assistance.',
      link: '/tech/hello-legal-world'
   },
   {
      category: 'Apps Script',
      level: 'Beginner',
      title: 'Email to Google Sheets in 30 Minutes',
      time: '30 min',
      desc: 'Auto-capture emails, parse subject/body, timestamp entries.',
      link: '/tech/email-to-sheets'
   },
   {
      category: 'Apps Script',
      level: 'Intermediate',
      title: 'Building the Trademark App Generator',
      time: '3-4 hours',
      desc: 'Form intake, doc generation, text replacement logic.',
      link: '/tech/trademark-generator'
   },
   {
      category: 'n8n',
      level: 'Beginner',
      title: 'Understanding n8n: Visual Builder',
      time: '45 min',
      desc: 'Interface overview, nodes, triggers, testing workflows.',
      link: '#'
   },
   {
      category: 'n8n',
      level: 'Intermediate',
      title: 'Legal Workflow: Intake to Assignment',
      time: '3 hours',
      desc: 'Form trigger, validation, database update, notifications.',
      link: '#'
   },
   {
      category: 'AI Tools',
      level: 'Beginner',
      title: 'Claude for Legal Analysis Guide',
      time: '1 hour',
      desc: 'Prompt structure, projects setup, long document analysis.',
      link: '#'
   },
   {
      category: 'Notion',
      level: 'Intermediate',
      title: 'Building a Searchable Clause Library',
      time: '2 hours',
      desc: 'Database setup, tagging system, filter views.',
      link: '#'
   }
];

const SNIPPETS = [
   { lang: 'Apps Script', title: 'Send Email with Attachment', lines: 15 },
   { lang: 'Apps Script', title: 'Read Data from Range', lines: 8 },
   { lang: 'Apps Script', title: 'Doc to PDF Conversion', lines: 20 },
   { lang: 'n8n', title: 'Gmail Trigger + Filter', lines: 0 },
   { lang: 'AI Prompt', title: 'Contract Analysis Base', lines: 0 },
   { lang: 'AI Prompt', title: 'Demand Letter Review', lines: 0 },
];

const FAQS = [
   { q: 'Do I need to be good at math?', a: 'No. Automation requires logic (If This Then That), not calculus. The AI handles the syntax.' },
   { q: 'How long until I build something useful?', a: 'Week 1: First working script. Week 4: First tool you actually use. Month 3: Saving 5+ hours/week.' },
   { q: 'Will automation replace lawyers?', a: 'No. It replaces manual tasks WITHIN legal work (copying data, filing). It won\'t replace judgment or strategy.' },
   { q: 'I tried learning to code and quit.', a: 'You probably started with syntax. I start with AI prompts. It makes a huge difference.' },
   { q: 'Can I really learn without a CS degree?', a: 'I have a law degree. Zero CS background. I use AI tools to handle the technical heavy lifting.' },
   { q: 'Do I need expensive software?', a: 'No. My stack (GAS, n8n self-hosted, Gemini free tier) costs $0-$20/month total.' }
];

const RESOURCES = [
   { name: "Google's Official Docs", rating: 5, type: 'Docs', note: 'Surprisingly readable. Start here for API references.' },
   { name: "Ben Collins Tutorials", rating: 4, type: 'Blog', note: 'Excellent step-by-step for Sheets. Essential.' },
   { name: "Claude (Anthropic)", rating: 5, type: 'Tool', note: 'My #1 automation partner. It writes 90% of my code.' },
   { name: "n8n Templates", rating: 5, type: 'Library', note: '7000+ templates. Reverse engineer them to learn.' },
   { name: "JavaScript.info", rating: 4, type: 'Course', note: 'Great for fundamentals, but rely on AI for complex logic.' }
];

// --- COMPONENTS ---

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
   <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
         <Star key={i} size={12} className={i < rating ? "fill-brand-orange text-brand-orange" : "text-brand-muted"} />
      ))}
   </div>
);

export const Tech: React.FC = () => {
   const [tutFilter, setTutFilter] = useState('All');

   const filteredTutorials = tutFilter === 'All'
      ? TUTORIALS
      : TUTORIALS.filter(t => t.category === tutFilter);

   return (
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans">

         {/* SECTION 1: HERO / HONEST INTRO */}
         <section className="relative py-20 border-b border-brand-text/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="grid md:grid-cols-12 gap-12 items-center">
                  <div className="md:col-span-7">
                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                     >
                        <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-orange tracking-wider shadow-glass">
                           Code + Law
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-8 tracking-tight">
                           The Automated<br />
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Law Firm Stack</span>
                        </h1>

                        <div className="text-lg space-y-6 text-brand-muted border-l-2 border-brand-orange pl-6 mb-12 font-light">
                           <p>The modern law firm runs on code, not just contracts.</p>
                           <p>I'm a Registered Attorney (Bar Council of Delhi) who engineers systems to replace manual legal work.</p>
                           <p>From intake to filing, <span className="font-bold text-brand-text">I build the infrastructure that makes legal services scalable.</span></p>
                        </div>

                        <div className="glass-card bg-brand-surface border border-brand-text/10 p-6 rounded-2xl mb-8 shadow-glass bg-brand-text/[0.02]">
                           <h3 className="font-bold uppercase mb-4 text-sm text-brand-muted tracking-wide flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-brand-green rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div> My Current Skill Level
                           </h3>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                              <div className="space-y-3">
                                 <div className="flex items-start gap-2 text-brand-muted"><CheckCircle size={16} className="text-brand-green mt-0.5 shrink-0" /> <span>Build working tools</span></div>
                                 <div className="flex items-start gap-2 text-brand-muted"><CheckCircle size={16} className="text-brand-green mt-0.5 shrink-0" /> <span>AI-Assisted Scripting</span></div>
                                 <div className="flex items-start gap-2 text-brand-muted"><CheckCircle size={16} className="text-brand-green mt-0.5 shrink-0" /> <span>Troubleshoot errors</span></div>
                              </div>
                              <div className="space-y-3 text-brand-muted/70">
                                 <div className="flex items-start gap-2"><AlertCircle size={16} className="mt-0.5 shrink-0" /> <span>Not writing complex backends</span></div>
                                 <div className="flex items-start gap-2"><AlertCircle size={16} className="mt-0.5 shrink-0" /> <span>Not training AI models</span></div>
                                 <div className="flex items-start gap-2"><AlertCircle size={16} className="mt-0.5 shrink-0" /> <span>I ask Claude for code daily</span></div>
                              </div>
                           </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                           <button onClick={() => document.getElementById('paths')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-brand-blue text-brand-surface font-bold uppercase rounded-lg hover:bg-brand-text transition-colors shadow-glow flex items-center gap-2">
                              Start Basics <ArrowRight size={18} />
                           </button>
                           <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-transparent border border-brand-text/20 text-brand-text font-bold uppercase rounded-lg hover:bg-brand-text/5 transition-colors">
                              See What I've Built
                           </button>
                        </div>
                     </motion.div>
                  </div>

                  <div className="md:col-span-5 hidden md:block relative">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-[#0c0c0c] text-green-500 p-6 font-mono text-xs border border-brand-text/10 rounded-xl shadow-2xl relative overflow-hidden"
                     >
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                           <Terminal size={48} />
                        </div>
                        <div className="mb-4 border-b border-green-500/20 pb-2 flex justify-between items-center">
                           <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                           </div>
                           <span className="text-brand-text/40">terminal.exe — zsh</span>
                        </div>
                        <div className="space-y-2">
                           <p><span className="text-brand-blue">➜</span> <span className="text-brand-yellow">~</span> whoami</p>
                           <p>lawyer_using_ai</p>
                           <p className="animate-pulse">_</p>
                           <br />
                           <p><span className="text-brand-blue">➜</span> <span className="text-brand-yellow">~</span> list_stats</p>
                           <p>Tools Built: 10+</p>
                           <p>Hours Saved: ~100/mo</p>
                           <p>Cost: $0 (mostly)</p>
                           <br />
                           <p><span className="text-brand-blue">➜</span> <span className="text-brand-yellow">~</span> status</p>
                           <p className="text-brand-green"> ONLINE & BUILDING</p>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 2: TECH STACK */}
         <section className="py-20 border-b border-brand-text/5 bg-brand-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="mb-12 text-center">
                  <h2 className="text-4xl font-bold uppercase mb-4 text-brand-text">My Daily Stack</h2>
                  <p className="text-brand-muted">The 6 tools I actually use to automate legal work.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {TOOLS.map((tool, i) => (
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={tool.id}
                        className="glass-card bg-brand-surface border border-brand-text/5 p-6 rounded-2xl shadow-glass hover:bg-brand-text/5 hover:border-brand-text/10 transition-all group"
                     >
                        <div className="flex justify-between items-start mb-6">
                           <div className={`p-3 bg-brand-text/5 rounded-xl ${tool.color} group-hover:scale-110 transition-transform`}>
                              <tool.icon size={24} />
                           </div>
                           <div className="text-[10px] font-bold uppercase bg-brand-text/5 text-brand-muted px-2 py-1 rounded tracking-wider border border-brand-text/5">{tool.use}</div>
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-brand-text">{tool.name}</h3>
                        <p className="text-xs text-brand-muted mb-6 h-8 leading-relaxed">{tool.desc}</p>

                        <div className="space-y-3 text-xs border-t border-brand-text/5 pt-4">
                           <div>
                              <span className="font-bold uppercase text-brand-blue">Why:</span> <span className="text-brand-muted">{tool.why}</span>
                           </div>
                           <div>
                              <span className="font-bold uppercase text-brand-orange">Built:</span> <span className="text-brand-muted">{tool.built}</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <span className="font-bold uppercase text-brand-muted">Diff:</span>
                              <div className="flex gap-1">{[...Array(3)].map((_, i) => (
                                 <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < tool.difficulty ? 'bg-brand-green' : 'bg-brand-text/10'}`} />
                              ))}</div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 3: LEARNING PATHS */}
         <section id="paths" className="py-20 border-b border-brand-text/5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-green/5 blur-[150px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">Choose Your Starting Point</h2>

               <div className="grid md:grid-cols-3 gap-8">
                  {/* Path 1 */}
                  <div className="border border-brand-text/10 bg-brand-surface rounded-2xl p-8 flex flex-col h-full hover:border-brand-blue/30 transition-all group">
                     <div className="mb-6 text-[10px] font-bold uppercase bg-brand-blue/10 text-brand-blue inline-block px-3 py-1 rounded-full border border-brand-blue/20 self-start">Path 1: Complete Beginner</div>
                     <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">"I've Never Automated"</h3>
                     <p className="text-sm text-brand-muted mb-8 leading-relaxed flex-grow">
                        You use Sheets but have never written a script. "JavaScript" sounds scary. You want to start with simple AI prompts.
                     </p>
                     <ul className="space-y-3 text-sm mb-8 text-brand-muted/80">
                        <li className="flex gap-3"><span className="text-brand-blue">●</span> Week 1: Email to Sheets</li>
                        <li className="flex gap-3"><span className="text-brand-blue">●</span> Week 2: Prompting Basics</li>
                        <li className="flex gap-3"><span className="text-brand-blue">●</span> Week 4: Client Intake Tool</li>
                     </ul>
                     <button className="w-full py-3 bg-brand-blue text-brand-surface font-bold uppercase rounded-lg hover:bg-brand-text transition-colors">Start Path 1</button>
                  </div>

                  {/* Path 2 */}
                  <div className="border border-brand-orange/30 bg-gradient-to-b from-brand-surface to-brand-bg rounded-2xl p-8 flex flex-col h-full shadow-glow relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px]" />
                     <div className="mb-6 text-[10px] font-bold uppercase bg-brand-orange text-white inline-block px-3 py-1 rounded-full self-start shadow-glow">Path 2: The Prompter</div>
                     <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">"I Use ChatGPT"</h3>
                     <p className="text-sm text-brand-muted mb-8 leading-relaxed flex-grow">
                        You know how to talk to AI. Now you want to connect it to your actual documents and workflows.
                     </p>
                     <ul className="space-y-3 text-sm mb-8 text-brand-muted/80">
                        <li className="flex gap-3"><span className="text-brand-orange">●</span> Week 1: Legal App Architecture</li>
                        <li className="flex gap-3"><span className="text-brand-orange">●</span> Week 2: Trademark Template Sys</li>
                        <li className="flex gap-3"><span className="text-brand-orange">●</span> Week 4: Advanced AI Integration</li>
                     </ul>
                     <button className="w-full py-3 bg-brand-text text-brand-surface font-bold uppercase rounded-lg hover:bg-brand-orange hover:text-white transition-colors">Start Path 2</button>
                  </div>

                  {/* Path 3 */}
                  <div className="border border-brand-text/10 bg-brand-surface rounded-2xl p-8 flex flex-col h-full hover:border-brand-green/30 transition-all group">
                     <div className="mb-6 text-[10px] font-bold uppercase bg-brand-green/10 text-brand-green inline-block px-3 py-1 rounded-full border border-brand-green/20 self-start">Path 3: Curious Pro</div>
                     <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">"Show Me Results"</h3>
                     <p className="text-sm text-brand-muted mb-8 leading-relaxed flex-grow">
                        You're evaluating if this is worth it. You want to see real examples, ROI, and working tools before committing.
                     </p>
                     <ul className="space-y-3 text-sm mb-8 text-brand-muted/80">
                        <li className="flex gap-3"><span className="text-brand-green">●</span> Browse Project Library</li>
                        <li className="flex gap-3"><span className="text-brand-green">●</span> See Time Savings Calculator</li>
                        <li className="flex gap-3"><span className="text-brand-green">●</span> Download Ready Scripts</li>
                     </ul>
                     <button className="w-full py-3 bg-brand-text/5 text-brand-text font-bold uppercase rounded-lg border border-brand-text/10 hover:bg-brand-text/10 transition-colors">Explore Projects</button>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 4: TUTORIAL LIBRARY */}
         <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-bold uppercase mb-8 text-brand-text">Tutorial Library</h2>

               {/* Filter Tabs */}
               <div className="flex flex-wrap gap-2 mb-12">
                  {['All', 'Apps Script', 'n8n', 'AI Tools', 'Notion'].map(filter => (
                     <button
                        key={filter}
                        onClick={() => setTutFilter(filter)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${tutFilter === filter
                           ? 'bg-brand-text text-brand-surface border-brand-text'
                           : 'bg-transparent text-brand-muted border-brand-text/10 hover:border-brand-text/30'
                           }`}
                     >
                        {filter}
                     </button>
                  ))}
               </div>

               {/* Grid */}
               <div className="grid md:grid-cols-2 gap-6">
                  <AnimatePresence mode='popLayout'>
                     {filteredTutorials.map((tut, i) => (
                        <motion.div
                           key={i}
                           layout
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           className="glass-card bg-brand-surface border border-brand-text/10 p-8 rounded-2xl hover:border-brand-blue/30 transition-all group cursor-pointer shadow-glass"
                        >
                           <div className="flex justify-between items-start mb-6">
                              <div className="flex gap-2">
                                 <span className="text-[10px] font-bold uppercase bg-brand-text/5 text-brand-text px-2 py-1 rounded border border-brand-text/10">{tut.category}</span>
                                 <span className="text-[10px] font-bold uppercase bg-brand-blue/10 text-brand-blue px-2 py-1 rounded">{tut.level}</span>
                              </div>
                              <span className="text-xs font-medium text-brand-muted flex items-center gap-1"><Clock size={12} /> {tut.time}</span>
                           </div>
                           <Link to={tut.link}>
                              <h3 className="text-xl font-bold uppercase mb-3 text-brand-text group-hover:text-brand-blue transition-colors">{tut.title}</h3>
                           </Link>
                           <p className="text-sm text-brand-muted mb-6 leading-relaxed">{tut.desc}</p>
                           <div className="flex items-center gap-4 text-xs font-bold uppercase border-t border-brand-text/5 pt-4 text-brand-muted/80">
                              <span className="flex items-center gap-1 hover:text-brand-text transition-colors"><BookOpen size={14} /> Read</span>
                              <span className="flex items-center gap-1 hover:text-brand-text transition-colors"><Code size={14} /> Code</span>
                              <span className="flex items-center gap-1 hover:text-brand-text transition-colors ml-auto"><ExternalLink size={14} /> Demo</span>
                           </div>
                        </motion.div>
                     ))}
                  </AnimatePresence>
               </div>
            </div>
         </section>

         {/* SECTION 5: PROJECT SHOWCASE */}
         <section id="projects" className="py-20 border-b border-brand-text/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-bold uppercase mb-4 text-brand-text">Projects I've Built</h2>
               <p className="text-brand-muted mb-12">These aren't conceptual. These are live tools I use daily.</p>

               <div className="space-y-8">
                  {/* Project 1 */}
                  <div className="border border-brand-text/10 bg-brand-surface rounded-3xl p-8 grid md:grid-cols-12 gap-8 shadow-glass group hover:bg-brand-text/[0.02] transition-colors">
                     <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-brand-text/10 pb-6 md:pb-0 md:pr-6">
                        <div className="text-xs font-bold uppercase text-brand-green mb-2 tracking-wider">Google Apps Script</div>
                        <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">Trademark App Generator</h3>
                        <div className="inline-block bg-brand-green/20 text-brand-green text-[10px] font-bold uppercase px-2 py-1 rounded mb-6 border border-brand-green/20">✅ Live & In Use</div>
                        <div className="space-y-3 text-sm text-brand-muted">
                           <div className="font-bold text-brand-text uppercase text-xs">Impact:</div>
                           <ul className="space-y-2">
                              <li className="flex items-center gap-2 text-brand-muted"><span className="w-1 h-1 bg-brand-green rounded-full" /> 45 min → 5 min per app</li>
                              <li className="flex items-center gap-2 text-brand-muted"><span className="w-1 h-1 bg-brand-green rounded-full" /> Used for 50+ applications</li>
                              <li className="flex items-center gap-2 text-brand-muted"><span className="w-1 h-1 bg-brand-green rounded-full" /> Zero typo errors</li>
                           </ul>
                        </div>
                     </div>
                     <div className="md:col-span-8">
                        <h4 className="font-bold uppercase mb-2 text-sm text-brand-text">The Problem</h4>
                        <p className="text-sm text-brand-muted mb-6 leading-relaxed">Filing trademark applications manually was repetitive boilerplate work. I was wasting 150+ hours a year copying data from intake forms to Word docs.</p>

                        <h4 className="font-bold uppercase mb-2 text-sm text-brand-text">The Solution</h4>
                        <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                           • Google Form for client intake<br />
                           • Apps Script (written by AI) auto-generates draft<br />
                           • Auto-fills classification, disclaimers, dates<br />
                           • Exports formatted Word doc & PDFs to Drive folder
                        </p>

                        <div className="flex gap-4">
                           <Link to="/tech/trademark-generator" className="px-5 py-2.5 bg-brand-text text-brand-surface font-bold uppercase text-xs rounded-lg hover:bg-brand-green hover:text-brand-text transition-colors">View Tutorial</Link>
                           <button className="px-5 py-2.5 bg-transparent border border-brand-text/20 text-brand-text font-bold uppercase text-xs rounded-lg hover:bg-brand-text/10 transition-colors">Get Code</button>
                        </div>
                     </div>
                  </div>

                  {/* Project 2 */}
                  <div className="border border-brand-text/10 bg-brand-surface rounded-3xl p-8 grid md:grid-cols-12 gap-8 shadow-glass group hover:bg-brand-text/[0.02] transition-colors">
                     <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-brand-text/10 pb-6 md:pb-0 md:pr-6">
                        <div className="text-xs font-bold uppercase text-brand-orange mb-2 tracking-wider">Apps Script + AI</div>
                        <h3 className="text-2xl font-bold uppercase mb-4 text-brand-text">Demand Letter QA System</h3>
                        <div className="inline-block bg-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase px-2 py-1 rounded mb-6 border border-brand-orange/20">🚧 Beta Testing</div>
                        <div className="space-y-3 text-sm text-brand-muted">
                           <div className="font-bold text-brand-text uppercase text-xs">Impact:</div>
                           <ul className="space-y-2">
                              <li className="flex items-center gap-2 text-brand-muted"><span className="w-1 h-1 bg-brand-orange rounded-full" /> Catches 95% of common errors</li>
                              <li className="flex items-center gap-2 text-brand-muted"><span className="w-1 h-1 bg-brand-orange rounded-full" /> Saves 10 min revision per letter</li>
                              <li className="flex items-center gap-2 text-brand-muted"><span className="w-1 h-1 bg-brand-orange rounded-full" /> Validates calculations</li>
                           </ul>
                        </div>
                     </div>
                     <div className="md:col-span-8">
                        <h4 className="font-bold uppercase mb-2 text-sm text-brand-text">The Problem</h4>
                        <p className="text-sm text-brand-muted mb-6 leading-relaxed">When drafting 20+ demand letters a week, small errors slip through: missing exhibits, inconsistent dates, math mistakes.</p>

                        <h4 className="font-bold uppercase mb-2 text-sm text-brand-text">The Solution</h4>
                        <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                           • 10-point automated quality checklist<br />
                           • Regex parsing to check date consistency<br />
                           • Formula validation for damage calculations<br />
                           • Generates a "Pass/Fail" report before submission
                        </p>

                        <div className="flex gap-4">
                           <button className="px-5 py-2.5 bg-brand-text text-brand-surface font-bold uppercase text-xs rounded-lg hover:bg-brand-orange hover:text-white transition-colors">Build Log</button>
                           <button className="px-5 py-2.5 bg-transparent border border-brand-text/20 text-brand-text font-bold uppercase text-xs rounded-lg hover:bg-brand-text/10 transition-colors">GitHub</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 6: SNIPPET LIBRARY */}
         <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-bold uppercase mb-8 text-brand-text">Code Snippet Library</h2>
               <p className="text-sm text-brand-muted mb-8">Ready-to-use code for common automation tasks. Copy, modify, deploy.</p>

               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {SNIPPETS.map((snip, i) => (
                     <div key={i} className="glass-card bg-brand-surface border border-brand-text/10 p-5 rounded-xl hover:-translate-y-1 transition-all cursor-pointer group hover:border-brand-blue/30 shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                           <span className="text-[10px] font-bold uppercase text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">{snip.lang}</span>
                           {snip.lines > 0 && <span className="text-[10px] text-brand-muted/70">{snip.lines} lines</span>}
                        </div>
                        <h4 className="font-bold uppercase text-sm mb-3 text-brand-text group-hover:text-brand-blue transition-colors">{snip.title}</h4>
                        <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-brand-muted/50 group-hover:text-brand-orange transition-colors">
                           <Code size={12} /> View Code
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 7: RESOURCES */}
         <section className="py-20 border-b border-brand-text/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">Resources That Actually Help</h2>
               <div className="space-y-4">
                  {RESOURCES.map((res, i) => (
                     <div key={i} className="border border-brand-text/10 bg-brand-surface rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:bg-brand-text/[0.02]">
                        <div>
                           <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-bold uppercase text-lg text-brand-text">{res.name}</h3>
                              <span className="text-[10px] font-bold uppercase border border-brand-text/20 text-brand-muted px-1.5 py-0.5 rounded">{res.type}</span>
                           </div>
                           <p className="text-sm text-brand-muted">{res.note}</p>
                        </div>
                        <div className="flex flex-col items-end min-w-[100px]">
                           <StarRating rating={res.rating} />
                           <span className="text-[10px] font-bold uppercase text-brand-muted/50 mt-1">My Rating</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 8: HONEST FAQ */}
         <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
            <div className="max-w-3xl mx-auto px-4">
               <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">The Honest FAQ</h2>
               <div className="space-y-6">
                  {FAQS.map((faq, i) => (
                     <div key={i} className="glass-card bg-brand-surface border border-brand-text/10 p-6 rounded-xl hover:border-brand-text/20 transition-colors">
                        <h3 className="font-bold uppercase text-brand-orange mb-3 text-sm tracking-wide">{faq.q}</h3>
                        <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 9: LEARNING UPDATE */}
         <section className="py-20 bg-brand-surface border-t border-brand-text/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
               <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-[10px] font-bold uppercase mb-6 shadow-glow">Live Learning Log</div>
               <h2 className="text-4xl font-bold uppercase mb-8 text-brand-text">What I'm Learning Now (Dec 2024)</h2>
               <div className="bg-black/40 border border-brand-text/10 rounded-2xl p-8 text-left max-w-2xl mx-auto backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-[50px] pointer-events-none" />
                  <h3 className="font-bold uppercase text-brand-blue mb-4">Focus: Python for Web Scraping</h3>
                  <p className="text-sm mb-6 text-brand-muted leading-relaxed">
                     Goal: Automate case law research by scraping legal databases (using AI to help write the scrapers).
                  </p>
                  <div className="space-y-3 text-sm mb-6">
                     <div className="flex items-center gap-3 text-brand-muted"><CheckCircle size={14} className="text-brand-green" /> Python Basics (AI-Assisted)</div>
                     <div className="flex items-center gap-3 text-brand-muted"><CheckCircle size={14} className="text-brand-green" /> BeautifulSoup for HTML Parsing</div>
                     <div className="flex items-center gap-3 text-brand-muted"><div className="w-3.5 h-3.5 border border-brand-muted rounded-full ml-[1px]" /> Selenium for Dynamic Content (In Progress)</div>
                  </div>
                  <div className="border-t border-brand-text/10 pt-4">
                     <div className="text-[10px] font-bold uppercase mb-2 text-brand-muted">Lessons Learned This Month:</div>
                     <p className="text-xs text-brand-muted/70 italic">"JavaScript-rendered content is tricky. Rate limiting is a real concern. Letting AI handle the boilerplate code saves hours."</p>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 10: DISCLAIMERS */}
         <section className="py-12 bg-black text-center border-t border-brand-text/5">
            <div className="max-w-3xl mx-auto px-4">
               <div className="bg-brand-orange/5 border border-brand-orange/20 p-6 rounded-xl">
                  <div className="flex items-center justify-center gap-2 mb-4 text-brand-orange">
                     <AlertTriangle size={20} />
                     <h3 className="font-bold uppercase text-sm tracking-widest">Important Disclaimers</h3>
                  </div>
                  <div className="text-left space-y-3 text-xs text-brand-muted">
                     <p><strong className="text-brand-orange">⚠️ CODE QUALITY:</strong> I use AI to write code. It works, but might not be "best practice". Use at your own risk.</p>
                     <p><strong className="text-brand-orange">⚠️ TESTING:</strong> Always test in a sandbox environment first. I am not responsible for data loss.</p>
                     <p><strong className="text-brand-orange">⚠️ LEGAL/ETHICAL:</strong> Check your jurisdiction's rules on automation. Don't automate legal judgment.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 11: FINAL CTA */}
         <section className="py-20 bg-gradient-to-br from-brand-blue to-blue-600 text-brand-text relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.1]" />
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
               <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Ready to Start?</h2>
               <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="bg-brand-text/10 backdrop-blur-md p-8 border border-brand-text/20 rounded-2xl hover:bg-brand-text/20 transition-colors">
                     <h3 className="font-bold uppercase mb-2 text-sm tracking-wider">Just Show Code</h3>
                     <p className="text-sm mb-6 opacity-90 h-10">Browse library and copy-paste snippets.</p>
                     <button className="w-full py-3 bg-brand-text text-brand-blue font-bold uppercase rounded-lg hover:bg-brand-surface hover:text-brand-text transition-colors text-sm">Browse Projects</button>
                  </div>
                  <div className="bg-brand-text text-brand-blue p-8 border border-brand-text rounded-2xl shadow-2xl transform scale-105">
                     <h3 className="font-bold uppercase mb-2 text-sm tracking-wider">Guide Me</h3>
                     <p className="text-sm mb-6 opacity-90 h-10 text-brand-surface">Follow the Week-by-Week beginner path.</p>
                     <button className="w-full py-3 bg-brand-blue text-brand-text font-bold uppercase rounded-lg hover:bg-brand-hover transition-colors text-sm shadow-glow">Start Path 1</button>
                  </div>
                  <div className="bg-brand-text/10 backdrop-blur-md p-8 border border-brand-text/20 rounded-2xl hover:bg-brand-text/20 transition-colors">
                     <h3 className="font-bold uppercase mb-2 text-sm tracking-wider">Explore</h3>
                     <p className="text-sm mb-6 opacity-90 h-10">Filter tutorials by time and difficulty.</p>
                     <button className="w-full py-3 bg-brand-text text-brand-blue font-bold uppercase rounded-lg hover:bg-brand-surface hover:text-brand-text transition-colors text-sm">All Tutorials</button>
                  </div>
               </div>
               <div className="mt-12">
                  <p className="text-sm mb-4 font-medium opacity-80">Questions? Join the community.</p>
                  <a href="mailto:nikhilgoyal.advo@gmail.com" className="inline-flex items-center gap-2 font-bold uppercase hover:text-brand-surface transition-colors bg-brand-text/10 px-4 py-2 rounded-full border border-brand-text/20 hover:bg-brand-text">
                     <Mail size={16} /> Email Me
                  </a>
               </div>
            </div>
         </section>

      </div>
   );
};