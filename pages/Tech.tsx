import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Code, GitBranch, Database, Cpu, Zap, Search, 
  Download, Award, AlertCircle, ChevronDown, ArrowRight, 
  FileCode, Workflow, Layers, CheckCircle, ExternalLink,
  BookOpen, Star, AlertTriangle, HelpCircle, Mail, Github, PenTool
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
    icon: FileCode
  },
  {
    id: 'n8n',
    name: 'n8n',
    use: 'Workflow Automation',
    desc: 'Visual workflow builder (like Zapier but open-source).',
    why: 'Visual builder, connects 400+ apps, self-hostable.',
    built: 'Email to Sheets, Notion sync, Research alerts.',
    difficulty: 2,
    icon: Workflow
  },
  {
    id: 'claude',
    name: 'Claude (Anthropic)',
    use: 'Legal Analysis & Code Gen',
    desc: 'Advanced AI assistant (my #1 recommendation).',
    why: 'It writes the code so I don\'t have to. Best for legal reasoning.',
    built: 'Drafting demand letters, generating scripts.',
    difficulty: 1,
    icon: Cpu
  },
  {
    id: 'gemini',
    name: 'Google AI Studio',
    use: 'API & Batch Processing',
    desc: 'Google\'s AI platform with generous free tier.',
    why: 'Free API (60 req/min), good for batch docs.',
    built: 'Document classification, Invoice extraction.',
    difficulty: 2,
    icon: Zap
  },
  {
    id: 'notion',
    name: 'Notion',
    use: 'Knowledge Management',
    desc: 'All-in-one workspace (notes + databases).',
    why: 'Powerful DBs, API for automation, great for libraries.',
    built: 'Clause library, Case law repository.',
    difficulty: 2,
    icon: Database
  },
  {
    id: 'cursor',
    name: 'Cursor',
    use: 'AI Code Editor',
    desc: 'VS Code fork with built-in AI assistance.',
    why: 'I describe what I want in plain English, it writes the code.',
    built: 'Building this website, local scripts.',
    difficulty: 2,
    icon: Terminal
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
      <Star key={i} size={12} className={i < rating ? "fill-brand-amber text-brand-amber" : "text-gray-300"} />
    ))}
  </div>
);

export const Tech: React.FC = () => {
  const [tutFilter, setTutFilter] = useState('All');

  const filteredTutorials = tutFilter === 'All' 
    ? TUTORIALS 
    : TUTORIALS.filter(t => t.category === tutFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      
      {/* SECTION 1: HERO / HONEST INTRO */}
      <section className="relative py-20 border-b-2 border-black dark:border-white bg-grid dark:bg-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="inline-block px-3 py-1 bg-brand-amber text-black border-2 border-black dark:border-white font-mono font-bold uppercase mb-6 shadow-brutal-sm">
                Intermediate Beginner
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8">
                Lawyer Learning<br/>
                <span className="text-brand-teal">To Automate</span>
              </h1>
              
              <div className="font-mono text-lg space-y-6 text-gray-800 dark:text-gray-300 border-l-4 border-black dark:border-white pl-6 mb-12">
                <p>I'm not a computer science graduate. I'm not a "legal tech expert".</p>
                <p>I'm a lawyer (Bar Council of Delhi D/2371/2023) who got tired of manually doing the same tasks 200+ times.</p>
                <p>So I started using AI tools to build what I needed. <span className="font-bold text-black dark:text-white bg-brand-amber/20 px-1">This is my documentation of that journey.</span></p>
              </div>

              <div className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-6 mb-8 shadow-brutal-sm">
                 <h3 className="font-bold uppercase mb-4 border-b border-black/20 dark:border-white/20 pb-2">My Current Skill Level</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5"/> <span>Build working tools</span></div>
                      <div className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5"/> <span>AI-Assisted Scripting</span></div>
                      <div className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5"/> <span>Troubleshoot errors</span></div>
                    </div>
                    <div className="space-y-2 text-gray-500">
                      <div className="flex items-start gap-2"><AlertCircle size={16} className="mt-0.5"/> <span>Not writing complex backends</span></div>
                      <div className="flex items-start gap-2"><AlertCircle size={16} className="mt-0.5"/> <span>Not training AI models</span></div>
                      <div className="flex items-start gap-2"><AlertCircle size={16} className="mt-0.5"/> <span>I ask Claude for code daily</span></div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('paths')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                  Start Basics
                </button>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-white text-black dark:bg-black dark:text-white font-bold uppercase border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-1 hover:shadow-none transition-all">
                  See What I've Built
                </button>
              </div>
            </div>

            <div className="md:col-span-5 hidden md:block">
               <div className="bg-black text-green-400 p-6 font-mono text-xs border-2 border-black dark:border-white shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff] rounded-sm">
                  <div className="mb-4 border-b border-green-400/30 pb-2 flex justify-between">
                    <span>terminal.exe</span>
                    <span>v2.0.0</span>
                  </div>
                  <div className="space-y-2">
                    <p><span className="text-blue-400">➜</span> <span className="text-yellow-400">~</span> whoami</p>
                    <p>lawyer_using_ai</p>
                    <p className="animate-pulse">_</p>
                    <br/>
                    <p><span className="text-blue-400">➜</span> <span className="text-yellow-400">~</span> list_stats</p>
                    <p>Tools Built: 10+</p>
                    <p>Hours Saved: ~100/mo</p>
                    <p>Cost: $0 (mostly)</p>
                    <br/>
                    <p><span className="text-blue-400">➜</span> <span className="text-yellow-400">~</span> status</p>
                    <p className="text-green-400"> ONLINE & BUILDING</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECH STACK */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 text-center">
             <h2 className="text-4xl font-black uppercase mb-4">My Daily Stack</h2>
             <p className="font-mono text-gray-600 dark:text-gray-400">The 6 tools I actually use to automate legal work.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOOLS.map((tool) => (
                <div key={tool.id} className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-y-1 transition-transform">
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-brand-amber text-black border border-black dark:border-white"><tool.icon size={20}/></div>
                      <div className="font-mono text-xs font-bold uppercase bg-brand-gray dark:bg-zinc-800 px-2 py-1">{tool.use}</div>
                   </div>
                   <h3 className="text-xl font-black uppercase mb-2">{tool.name}</h3>
                   <p className="font-mono text-xs text-gray-500 dark:text-gray-400 mb-4 h-8">{tool.desc}</p>
                   
                   <div className="space-y-3 font-mono text-xs border-t border-gray-100 dark:border-gray-800 pt-4">
                      <div>
                        <span className="font-bold uppercase text-brand-teal">Why:</span> {tool.why}
                      </div>
                      <div>
                        <span className="font-bold uppercase text-brand-teal">Built:</span> {tool.built}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold uppercase">Difficulty:</span> 
                        <div className="flex">{[...Array(tool.difficulty)].map((_, i) => <div key={i} className="w-2 h-2 bg-black dark:bg-white rounded-full mr-1"/>)}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 3: LEARNING PATHS */}
      <section id="paths" className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">Choose Your Starting Point</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               {/* Path 1 */}
               <div className="border-2 border-black dark:border-white p-8 flex flex-col h-full hover:bg-brand-gray dark:hover:bg-zinc-900 transition-colors">
                  <div className="mb-6 font-mono text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black inline-block px-2 py-1 self-start">Path 1: Complete Beginner</div>
                  <h3 className="text-2xl font-black uppercase mb-4">"I've Never Automated"</h3>
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                     You use Sheets but have never written a script. "JavaScript" sounds scary. You want to start with simple AI prompts.
                  </p>
                  <ul className="space-y-2 font-mono text-sm mb-8">
                     <li className="flex gap-2"><span className="font-bold">Week 1:</span> Email to Sheets</li>
                     <li className="flex gap-2"><span className="font-bold">Week 2:</span> Prompting Basics</li>
                     <li className="flex gap-2"><span className="font-bold">Week 4:</span> Client Intake Tool</li>
                  </ul>
                  <button className="w-full py-3 bg-brand-teal text-white font-bold uppercase border-2 border-black dark:border-white shadow-brutal-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all">Start Path 1</button>
               </div>

               {/* Path 2 */}
               <div className="border-2 border-black dark:border-white p-8 flex flex-col h-full bg-black text-white dark:bg-white dark:text-black shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#888]">
                  <div className="mb-6 font-mono text-xs font-bold uppercase bg-brand-amber text-black inline-block px-2 py-1 self-start">Path 2: The Prompter</div>
                  <h3 className="text-2xl font-black uppercase mb-4">"I Use ChatGPT"</h3>
                  <p className="font-mono text-sm opacity-80 mb-6 flex-grow">
                     You know how to talk to AI. Now you want to connect it to your actual documents and workflows.
                  </p>
                  <ul className="space-y-2 font-mono text-sm mb-8">
                     <li className="flex gap-2"><span className="font-bold">Week 1:</span> Legal App Architecture</li>
                     <li className="flex gap-2"><span className="font-bold">Week 2:</span> Trademark Template Sys</li>
                     <li className="flex gap-2"><span className="font-bold">Week 4:</span> Advanced AI Integration</li>
                  </ul>
                  <button className="w-full py-3 bg-white text-black dark:bg-black dark:text-white font-bold uppercase border-2 border-white dark:border-black shadow-brutal-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all">Start Path 2</button>
               </div>

               {/* Path 3 */}
               <div className="border-2 border-black dark:border-white p-8 flex flex-col h-full hover:bg-brand-gray dark:hover:bg-zinc-900 transition-colors">
                  <div className="mb-6 font-mono text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black inline-block px-2 py-1 self-start">Path 3: Curious Pro</div>
                  <h3 className="text-2xl font-black uppercase mb-4">"Show Me Results"</h3>
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                     You're evaluating if this is worth it. You want to see real examples, ROI, and working tools before committing.
                  </p>
                  <ul className="space-y-2 font-mono text-sm mb-8">
                     <li className="flex gap-2">→ Browse Project Library</li>
                     <li className="flex gap-2">→ See Time Savings Calculator</li>
                     <li className="flex gap-2">→ Download Ready Scripts</li>
                  </ul>
                  <button className="w-full py-3 bg-white text-black dark:bg-black dark:text-white font-bold uppercase border-2 border-black dark:border-white shadow-brutal-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all">Explore Projects</button>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 4: TUTORIAL LIBRARY */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-8">Tutorial Library</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 mb-12">
               {['All', 'Apps Script', 'n8n', 'AI Tools', 'Notion'].map(filter => (
                  <button
                     key={filter}
                     onClick={() => setTutFilter(filter)}
                     className={`px-6 py-2 border-2 border-black dark:border-white font-bold uppercase text-sm shadow-brutal-sm hover:translate-y-[1px] hover:shadow-none transition-all ${
                        tutFilter === filter 
                        ? 'bg-black text-white dark:bg-white dark:text-black' 
                        : 'bg-white text-black dark:bg-black dark:text-white'
                     }`}
                  >
                     {filter}
                  </button>
               ))}
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
               <AnimatePresence>
                  {filteredTutorials.map((tut, i) => (
                     <motion.div
                        key={i}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg transition-all group cursor-pointer"
                     >
                        <div className="flex justify-between items-start mb-4">
                           <div className="flex gap-2">
                              <span className="text-[10px] font-bold uppercase bg-brand-gray dark:bg-zinc-800 px-2 py-1">{tut.category}</span>
                              <span className="text-[10px] font-bold uppercase border border-black dark:border-white px-2 py-1">{tut.level}</span>
                           </div>
                           <span className="font-mono text-xs text-gray-500">{tut.time}</span>
                        </div>
                        <Link to={tut.link}>
                           <h3 className="text-xl font-black uppercase mb-2 group-hover:text-brand-teal transition-colors">{tut.title}</h3>
                        </Link>
                        <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">{tut.desc}</p>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase border-t border-gray-100 dark:border-gray-800 pt-4">
                           <span className="flex items-center gap-1 hover:underline"><BookOpen size={14}/> Read</span>
                           <span className="flex items-center gap-1 hover:underline"><Code size={14}/> Code</span>
                           <span className="flex items-center gap-1 hover:underline ml-auto"><ExternalLink size={14}/> Demo</span>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* SECTION 5: PROJECT SHOWCASE */}
      <section id="projects" className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-4">Projects I've Built</h2>
            <p className="font-mono text-gray-600 dark:text-gray-400 mb-12">These aren't conceptual. These are live tools I use daily.</p>
            
            <div className="space-y-12">
               {/* Project 1 */}
               <div className="border-2 border-black dark:border-white p-8 grid md:grid-cols-12 gap-8 shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff]">
                  <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-black dark:border-white pb-6 md:pb-0 md:pr-6">
                     <div className="font-mono text-xs font-bold uppercase text-brand-teal mb-2">Google Apps Script</div>
                     <h3 className="text-3xl font-black uppercase mb-4">Trademark App Generator</h3>
                     <div className="inline-block bg-brand-amber text-black text-xs font-bold uppercase px-2 py-1 mb-6">✅ Live & In Use</div>
                     <div className="space-y-2 font-mono text-sm">
                        <div className="font-bold">Impact:</div>
                        <ul className="list-disc pl-4 space-y-1">
                           <li>45 min → 5 min per app</li>
                           <li>Used for 50+ applications</li>
                           <li>Zero typo errors</li>
                        </ul>
                     </div>
                  </div>
                  <div className="md:col-span-8">
                     <h4 className="font-bold uppercase mb-2">The Problem</h4>
                     <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">Filing trademark applications manually was repetitive boilerplate work. I was wasting 150+ hours a year copying data from intake forms to Word docs.</p>
                     
                     <h4 className="font-bold uppercase mb-2">The Solution</h4>
                     <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">
                        • Google Form for client intake<br/>
                        • Apps Script (written by AI) auto-generates draft<br/>
                        • Auto-fills classification, disclaimers, dates<br/>
                        • Exports formatted Word doc & PDFs to Drive folder
                     </p>
                     
                     <div className="flex gap-4">
                        <Link to="/tech/trademark-generator" className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-bold uppercase text-sm border-2 border-black dark:border-white hover:bg-brand-teal hover:border-brand-teal transition-colors">View Tutorial</Link>
                        <button className="px-4 py-2 bg-white text-black dark:bg-black dark:text-white font-bold uppercase text-sm border-2 border-black dark:border-white hover:bg-brand-gray transition-colors">Get Code</button>
                     </div>
                  </div>
               </div>

               {/* Project 2 */}
               <div className="border-2 border-black dark:border-white p-8 grid md:grid-cols-12 gap-8 shadow-brutal-lg dark:shadow-[8px_8px_0px_0px_#ffffff]">
                  <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-black dark:border-white pb-6 md:pb-0 md:pr-6">
                     <div className="font-mono text-xs font-bold uppercase text-brand-teal mb-2">Apps Script + AI</div>
                     <h3 className="text-3xl font-black uppercase mb-4">Demand Letter QA System</h3>
                     <div className="inline-block bg-yellow-200 text-black text-xs font-bold uppercase px-2 py-1 mb-6">🚧 Beta Testing</div>
                     <div className="space-y-2 font-mono text-sm">
                        <div className="font-bold">Impact:</div>
                        <ul className="list-disc pl-4 space-y-1">
                           <li>Catches 95% of common errors</li>
                           <li>Saves 10 min revision per letter</li>
                           <li>Validates calculations</li>
                        </ul>
                     </div>
                  </div>
                  <div className="md:col-span-8">
                     <h4 className="font-bold uppercase mb-2">The Problem</h4>
                     <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">When drafting 20+ demand letters a week, small errors slip through: missing exhibits, inconsistent dates, math mistakes.</p>
                     
                     <h4 className="font-bold uppercase mb-2">The Solution</h4>
                     <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">
                        • 10-point automated quality checklist<br/>
                        • Regex parsing to check date consistency<br/>
                        • Formula validation for damage calculations<br/>
                        • Generates a "Pass/Fail" report before submission
                     </p>
                     
                     <div className="flex gap-4">
                        <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-bold uppercase text-sm border-2 border-black dark:border-white hover:bg-brand-teal hover:border-brand-teal transition-colors">Build Log</button>
                        <button className="px-4 py-2 bg-white text-black dark:bg-black dark:text-white font-bold uppercase text-sm border-2 border-black dark:border-white hover:bg-brand-gray transition-colors">GitHub</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 6: SNIPPET LIBRARY */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-8">Code Snippet Library</h2>
            <p className="font-mono text-sm mb-8">Ready-to-use code for common automation tasks. Copy, modify, deploy.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {SNIPPETS.map((snip, i) => (
                  <div key={i} className="bg-white dark:bg-black border-2 border-black dark:border-white p-4 hover:-translate-y-1 transition-transform cursor-pointer">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-bold uppercase text-brand-teal border border-black dark:border-white px-1">{snip.lang}</span>
                        {snip.lines > 0 && <span className="text-[10px] font-mono text-gray-400">{snip.lines} lines</span>}
                     </div>
                     <h4 className="font-bold uppercase text-sm mb-2">{snip.title}</h4>
                     <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-gray-500 hover:text-brand-amber">
                        <Code size={12}/> View Code
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 7: RESOURCES */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-white dark:bg-black">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">Resources That Actually Help</h2>
            <div className="space-y-4">
               {RESOURCES.map((res, i) => (
                  <div key={i} className="border-2 border-black dark:border-white p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-brutal-sm">
                     <div>
                        <div className="flex items-center gap-3 mb-1">
                           <h3 className="font-bold uppercase text-lg">{res.name}</h3>
                           <span className="text-[10px] font-mono border border-gray-400 px-1 rounded-sm">{res.type}</span>
                        </div>
                        <p className="font-mono text-sm text-gray-600 dark:text-gray-300">{res.note}</p>
                     </div>
                     <div className="flex flex-col items-end">
                        <StarRating rating={res.rating} />
                        <span className="text-[10px] font-mono uppercase text-gray-400 mt-1">My Rating</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 8: HONEST FAQ */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-brand-gray dark:bg-zinc-900">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">The Honest FAQ</h2>
            <div className="space-y-6">
               {FAQS.map((faq, i) => (
                  <div key={i} className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-brutal-sm">
                     <h3 className="font-bold uppercase text-brand-teal mb-2">Q: {faq.q}</h3>
                     <p className="font-mono text-sm text-gray-700 dark:text-gray-300">A: {faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 9: LEARNING UPDATE */}
      <section className="py-20 border-b-2 border-black dark:border-white bg-black text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block px-3 py-1 bg-brand-teal text-white border border-white font-mono text-xs font-bold uppercase mb-6">Live Learning Log</div>
            <h2 className="text-4xl font-black uppercase mb-8">What I'm Learning Now (Dec 2024)</h2>
            <div className="bg-zinc-900 border-2 border-white p-8 text-left max-w-2xl mx-auto">
               <h3 className="font-bold uppercase text-brand-amber mb-4">Focus: Python for Web Scraping</h3>
               <p className="font-mono text-sm mb-6 text-gray-300">
                  Goal: Automate case law research by scraping legal databases (using AI to help write the scrapers).
               </p>
               <div className="space-y-2 font-mono text-sm mb-6">
                  <div className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Python Basics (AI-Assisted)</div>
                  <div className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> BeautifulSoup for HTML Parsing</div>
                  <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 border border-white rounded-full"/> Selenium for Dynamic Content (In Progress)</div>
               </div>
               <div className="border-t border-gray-700 pt-4">
                  <div className="text-xs font-bold uppercase mb-2">Lessons Learned This Month:</div>
                  <p className="font-mono text-xs text-gray-400">"JavaScript-rendered content is tricky. Rate limiting is a real concern. Letting AI handle the boilerplate code saves hours."</p>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 10: DISCLAIMERS */}
      <section className="py-12 bg-white dark:bg-black text-center">
         <div className="max-w-3xl mx-auto px-4">
            <div className="bg-brand-amber/10 border-2 border-brand-amber p-6">
               <div className="flex items-center justify-center gap-2 mb-4 text-brand-amber">
                  <AlertTriangle size={24} />
                  <h3 className="font-black uppercase text-lg">Important Disclaimers</h3>
               </div>
               <div className="text-left space-y-4 font-mono text-xs text-gray-600 dark:text-gray-400">
                  <p><strong>⚠️ CODE QUALITY:</strong> I use AI to write code. It works, but might not be "best practice". Use at your own risk.</p>
                  <p><strong>⚠️ TESTING:</strong> Always test in a sandbox environment first. I am not responsible for data loss.</p>
                  <p><strong>⚠️ LEGAL/ETHICAL:</strong> Check your jurisdiction's rules on automation. Don't automate legal judgment.</p>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-20 bg-brand-teal text-white border-t-2 border-black dark:border-white">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">Ready to Start?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-black">
               <div className="bg-white p-8 border-2 border-black shadow-brutal-lg">
                  <h3 className="font-black uppercase mb-4">Just Show Code</h3>
                  <p className="font-mono text-sm mb-6">Browse library and copy-paste snippets.</p>
                  <button className="w-full py-2 bg-black text-white font-bold uppercase hover:bg-brand-gray hover:text-black transition-colors">Browse Projects</button>
               </div>
               <div className="bg-white p-8 border-2 border-black shadow-brutal-lg">
                  <h3 className="font-black uppercase mb-4">Guide Me</h3>
                  <p className="font-mono text-sm mb-6">Follow the Week-by-Week beginner path.</p>
                  <button className="w-full py-2 bg-black text-white font-bold uppercase hover:bg-brand-gray hover:text-black transition-colors">Start Path 1</button>
               </div>
               <div className="bg-white p-8 border-2 border-black shadow-brutal-lg">
                  <h3 className="font-black uppercase mb-4">Explore</h3>
                  <p className="font-mono text-sm mb-6">Filter tutorials by time and difficulty.</p>
                  <button className="w-full py-2 bg-black text-white font-bold uppercase hover:bg-brand-gray hover:text-black transition-colors">All Tutorials</button>
               </div>
            </div>
            <div className="mt-12">
               <p className="font-mono text-sm mb-4">Questions? Join the community.</p>
               <a href="mailto:nikhilgoyal.advo@gmail.com" className="inline-flex items-center gap-2 font-bold uppercase border-b-2 border-white hover:text-brand-gray transition-colors">
                  <Mail size={18}/> Email Me
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};