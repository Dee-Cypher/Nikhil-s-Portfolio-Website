import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check, X, ArrowRight, Clock, Shield, BookOpen,
  CheckCircle2, AlertCircle, Search
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
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-brand-text/5">
        <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-surface border border-brand-text/10 rounded-full font-bold uppercase text-xs mb-6 text-brand-green tracking-wider shadow-glass">
              Open Source Philosophy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-8 tracking-tight">
              I Don't Believe In<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">Gatekeeping</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Everything I know, I share. Everything I build, I document. If you're looking for someone who hoards trade secrets, you're in the wrong place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: FIT CHECK */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            {/* GOOD FIT */}
            <div className="glass-card bg-brand-surface border border-brand-text/10 p-8 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-[50px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-brand-green/20 text-brand-green p-3 rounded-xl border border-brand-green/30 shadow-glow">
                  <Check size={24} strokeWidth={3} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase text-brand-text">You're A Great Fit If...</h2>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "You're drowning in manual work", desc: "Losing 10-20 hours/week to copy-paste tasks and data entry." },
                  { title: "You want internal tools that work", desc: "You need specific tools your team will actually use, not generic software." },
                  { title: "You need a bridge", desc: "You need someone who speaks both 'Lawyer' and 'Developer'." },
                  { title: "You value documentation", desc: "You want runbooks, video guides, and full transparency." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-brand-green flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold uppercase text-sm mb-1 text-brand-text">{item.title}</div>
                      <div className="text-sm text-brand-muted">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* BAD FIT */}
            <div className="glass-card bg-brand-surface border border-brand-text/10 p-8 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-brand-orange/20 text-brand-orange p-3 rounded-xl border border-brand-orange/30 shadow-glow">
                  <X size={24} strokeWidth={3} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase text-brand-text">We're Not A Fit If...</h2>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "You need 24/7 instant support", desc: "I work effectively across timezones, but I am not a 24/7 helpdesk." },
                  { title: "You want zero involvement", desc: "I build WITH you. I need your domain expertise and feedback." },
                  { title: "You need enterprise infra", desc: "If you need 99.999% uptime for millions of users, hire a DevOps team." },
                  { title: "You hate documentation", desc: "I document everything. If that annoys you, it won't work." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <X className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold uppercase text-sm mb-1 text-brand-text">{item.title}</div>
                      <div className="text-sm text-brand-muted">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="py-20 border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-brand-text">Three Rules I Never Break</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "No Black Boxes", desc: "Every system comes with source code, docs, and training. If I build it, you own it completely.", color: "text-brand-blue" },
              { icon: Clock, title: "Start Small, Prove Value", desc: "No massive 6-month contracts. We build a small win in Week 1, prove ROI, then scale.", color: "text-brand-orange" },
              { icon: Shield, title: "Teach While Building", desc: "Weekly demos and recorded walkthroughs. You get the tool AND the knowledge to maintain it.", color: "text-brand-green" }
            ].map((rule, i) => (
              <div key={i} className="glass-card bg-brand-surface border border-brand-text/5 p-8 rounded-2xl hover:-translate-y-2 transition-transform shadow-glass hover:bg-brand-text/[0.02]">
                <div className={`w-16 h-16 mx-auto bg-brand-text/5 rounded-2xl flex items-center justify-center mb-6 shadow-glow ${rule.color}`}>
                  <rule.icon size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-brand-text">{rule.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-brand-text">My 4-Week Sprint Process</h2>
            <p className="text-brand-muted">Ship fast. Measure impact. Iterate.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-blue/50 before:to-transparent">
            {[
              { week: "Week 1", title: "Discovery & Audit", desc: "2-hour workflow mapping. We identify the biggest time sinks. You get a visual map and ROI potential.", commit: "2-3 hours" },
              { week: "Week 2", title: "Blueprint & Approval", desc: "I design the architecture. You review wireframes. We align on scope so there are no surprises.", commit: "1-2 hours" },
              { week: "Week 3", title: "Build & Iterate", desc: "I build the prototype. You see weekly demos. You break things, I fix them in real-time.", commit: "1 hour" },
              { week: "Week 4", title: "Deploy & Train", desc: "Production launch. Complete runbook documentation. Live team training session. Handoff.", commit: "2-3 hours" }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-blue/50 bg-brand-bg group-hover:bg-brand-blue group-hover:text-brand-surface transition-colors shadow-glow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-brand-blue">
                  <span className="font-bold text-xs">{i + 1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-surface border border-brand-text/10 p-6 rounded-2xl shadow-glass hover:bg-brand-text/[0.02] transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-brand-blue uppercase">{step.week}</span>
                    <span className="text-[10px] bg-brand-text/5 border border-brand-text/10 px-2 py-1 uppercase rounded text-brand-muted">Your Time: {step.commit}</span>
                  </div>
                  <h3 className="font-bold uppercase text-xl mb-2 text-brand-text">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-brand-blue/10 border border-brand-blue/30 text-center shadow-glow rounded-2xl backdrop-blur-sm max-w-2xl mx-auto">
            <p className="font-bold uppercase text-brand-blue mb-2">Post-Launch Guarantee</p>
            <p className="text-sm text-brand-muted">30 Days of support included. If I broke it, I fix it for free.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: EXPECTATIONS */}
      <section className="py-20 border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold uppercase mb-12 text-center text-brand-text">The Honest Version</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-brand-surface/50 p-8 rounded-2xl border border-brand-text/5">
              <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-brand-text">
                <CheckCircle2 className="text-brand-green" /> What You Get
              </h3>
              <ul className="space-y-4 text-sm text-brand-muted">
                <li className="p-4 border-l-2 border-brand-green bg-brand-green/5 rounded-r-lg">
                  <strong className="text-brand-green">Custom Automation:</strong> Built specifically for your workflow, not off-the-shelf.
                </li>
                <li className="p-4 border-l-2 border-brand-green bg-brand-green/5 rounded-r-lg">
                  <strong className="text-brand-green">Full Ownership:</strong> Source code, admin access, no licensing fees.
                </li>
                <li className="p-4 border-l-2 border-brand-green bg-brand-green/5 rounded-r-lg">
                  <strong className="text-brand-green">Human-Friendly:</strong> Intuitive interfaces your team will actually use.
                </li>
              </ul>
            </div>
            <div className="bg-brand-surface/50 p-8 rounded-2xl border border-brand-text/5">
              <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-brand-text">
                <AlertCircle className="text-brand-orange" /> What You Don't Get
              </h3>
              <ul className="space-y-4 text-sm text-brand-muted">
                <li className="p-4 border-l-2 border-brand-orange bg-brand-orange/5 rounded-r-lg">
                  <strong className="text-brand-orange">A Magic Wand:</strong> Automation takes time to build right. Expect 3-6 weeks.
                </li>
                <li className="p-4 border-l-2 border-brand-orange bg-brand-orange/5 rounded-r-lg">
                  <strong className="text-brand-orange">24/7 Hotline:</strong> I'm one person. Response time is 24-48 hours.
                </li>
                <li className="p-4 border-l-2 border-brand-orange bg-brand-orange/5 rounded-r-lg">
                  <strong className="text-brand-orange">Cheap Labor:</strong> You pay for expertise and solutions, not just hours.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING */}
      <section className="py-20 border-b border-brand-text/5 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase mb-4 text-brand-text">Pricing Philosophy</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              I don't bill by the hour. It punishes efficiency. I bill by the project: <strong className="text-brand-text">Fixed Scope. Fixed Price. No Surprises.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Automation Scripts", range: "$500 - $1,500", time: "1-2 Weeks", ex: ["PDF Generation", "Scheduled Emails", "Data Validation"], color: "border-brand-text/10" },
              { title: "Workflow Systems", range: "$2,500 - $5,000", time: "3-4 Weeks", ex: ["Case Assignment Logic", "Doc Gen Pipeline", "CRM Integration"], feat: true, color: "border-brand-blue/50 shadow-glow" },
              { title: "Complex Builds", range: "$5,000 - $10k+", time: "6-8 Weeks", ex: ["Custom Dashboards", "Verdict Extraction", "Multi-Tool Sync"], color: "border-brand-text/10" }
            ].map((tier, i) => (
              <div key={i} className={`relative flex flex-col p-8 border bg-brand-surface rounded-2xl shadow-glass ${tier.color} ${tier.feat ? 'transform md:-translate-y-4 z-10' : 'bg-opacity-50'}`}>
                {tier.feat && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-brand-surface px-4 py-1 font-bold uppercase text-xs rounded-full shadow-glow">Most Common</div>}
                <h3 className="text-xl font-bold uppercase mb-2 text-brand-text">{tier.title}</h3>
                <div className="text-3xl font-bold text-brand-blue mb-2">{tier.range}</div>
                <div className="text-[10px] uppercase font-bold text-brand-muted mb-6">Timeline: {tier.time}</div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.ex.map((e, j) => (
                    <li key={j} className="text-sm text-brand-muted flex items-center gap-2">
                      <ArrowRight size={14} className="text-brand-orange shrink-0" /> {e}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="w-full py-3 bg-brand-text/5 border border-brand-text/10 text-brand-text font-bold uppercase text-center rounded-xl hover:bg-brand-blue hover:text-brand-surface hover:border-brand-blue transition-all">
                  Get A Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PAST RESULTS (PROJECT GRID) */}
      <section className="py-20 border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold uppercase mb-4 text-brand-text">What Happens When We Work Together</h2>
              <p className="text-brand-muted">Social proof. Real results. Actual code.</p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 border rounded-full font-bold uppercase text-[10px] transition-all ${filter === cat
                    ? 'bg-brand-blue text-brand-surface border-brand-blue shadow-glow'
                    : 'bg-brand-text/5 text-brand-muted border-brand-text/10 hover:border-brand-text/30 hover:text-brand-text'
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

    </div>
  );
};