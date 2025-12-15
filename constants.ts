import { Project, Service, Stat, NavItem, Article, Domain, Integration, Philosophy, ArticlePreview } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { 
    label: 'Knowledge Base', 
    path: '/knowledge',
    children: [
      { label: 'Law', path: '/law' },
      { label: 'Tech', path: '/tech' }
    ]
  },
  { label: 'Work', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const STATS: Stat[] = [
  { number: '200+', label: 'Trademark Apps', sublabel: 'Filed & Prosecuted' },
  { number: '500+', label: 'Agreements', sublabel: 'Drafted & Negotiated' },
  { number: '80%', label: 'Success Rate', sublabel: 'Opposition Proceedings' },
  { number: '250+', label: 'Disputes', sublabel: 'Resolved via Arbitration' },
  { number: '2.5+', label: 'Years', sublabel: 'Legal Practice' },
  { number: '10+', label: 'Tools Built', sublabel: 'Automation Projects' },
  { number: '100%', label: 'Free', sublabel: 'All Knowledge Shared' },
  { number: '2', label: 'Domains', sublabel: 'Law • Tech' },
];

export const SKILLS = [
  'Trademark Law', 'Contract Drafting', 'IP Strategy',
  'Personal Injury', 'Demand Letters', 'Legal Ops',
  'Google Apps Script', 'n8n', 'Claude AI', 'System Design'
];

export const DOMAINS: Domain[] = [
  {
    id: 'law',
    name: 'Law & Legal Practice',
    icon: 'Scale',
    tagline: 'IP Law + Personal Injury',
    bulletPoints: [
      'Trademark registration & IP protection strategies',
      'Personal injury demand letter drafting',
      'Contract drafting frameworks and clause libraries',
      'Case law analysis and legal research methods',
      'Office action responses and examiner objections'
    ],
    idealFor: 'Law students, IP practitioners, personal injury attorneys'
  },
  {
    id: 'tech',
    name: 'Technology & Automation',
    icon: 'Terminal',
    tagline: 'Learning & Building',
    bulletPoints: [
      'Google Apps Script for legal workflows',
      'Automation for trademark applications',
      'n8n workflow automation (no-code)',
      'AI tools for legal analysis (Claude, ChatGPT)',
      'Quality assurance systems for demand letters'
    ],
    idealFor: 'Legal professionals, automation beginners, efficiency seekers'
  }
];

export const INTEGRATIONS: Integration[] = [
  {
    id: 1,
    icon: 'Target',
    title: 'Pattern Recognition',
    lawApplication: 'Case precedents, contract patterns',
    financeApplication: '',
    techApplication: 'Code patterns, workflow bottlenecks',
    takeaway: 'All legal work involves recognizing underlying structures and replicating success'
  },
  {
    id: 2,
    icon: 'Shield',
    title: 'Risk Management',
    lawApplication: 'Due diligence, liability protection',
    financeApplication: '',
    techApplication: 'Error handling, data validation',
    takeaway: 'Managing downside is universal—whether in contracts, cases, or code'
  },
  {
    id: 3,
    icon: 'Zap',
    title: 'Leverage & Efficiency',
    lawApplication: 'Clause libraries, template contracts',
    financeApplication: '',
    techApplication: 'Automation scripts, reusable workflows',
    takeaway: 'Build once, benefit forever—the power of systems thinking'
  },
  {
    id: 4,
    icon: 'MessageSquare',
    title: 'Clear Communication',
    lawApplication: 'Persuasive arguments, precise language',
    financeApplication: '',
    techApplication: 'Clean code, documentation',
    takeaway: 'Clarity compounds trust in every domain'
  }
];

export const PHILOSOPHY: Philosophy[] = [
  {
    id: 1,
    icon: 'BookOpen',
    title: 'Teach to Learn',
    description: 'I document every project publicly for a selfish reason: teaching forces clarity. If I can\'t explain how I built something, I don\'t actually understand it. That\'s why everything I learn gets published here—free, detailed, step-by-step.'
  },
  {
    id: 2,
    icon: 'Cog',
    title: 'Systems > Hustle',
    description: "I don't work 80-hour weeks. I build systems that work while I sleep. If you do something more than twice, script it. If you draft the same contract 50 times, template it. Manual work doesn't scale. Systems do."
  },
  {
    id: 3,
    icon: 'Users',
    title: 'Learning in Public',
    description: "I'm not a legal tech expert. I'm a lawyer learning to code. I share projects that aren't perfect, tools that have bugs, tutorials where I got stuck. If you're 10 steps ahead of me, this won't help. If you're where I was 6 months ago, it might be exactly what you need."
  }
];

export const LAW_ARTICLES_PREVIEW: ArticlePreview[] = [
  {
    id: '1',
    category: 'Trademark Law',
    title: 'How to Respond to a Trademark Office Action (Step-by-Step)',
    summary: 'Examiner objections aren\'t rejections. Here\'s how to craft responses that anticipate concerns and increase approval odds. Based on 200+ successful filings.',
    readTime: '12 min read',
    tags: ['trademark', 'office-action', 'IP-law'],
    link: '/law/trademark-response'
  },
  {
    id: '2',
    category: 'Personal Injury',
    title: 'Anatomy of a Strong PI Demand Letter: What Works',
    summary: 'Breaking down the structure of effective personal injury demand letters. Medical chronology, liability narrative, settlement valuation—how each section builds the case.',
    readTime: '15 min read',
    tags: ['personal-injury', 'demand-letters', 'settlement'],
    link: '/law/pi-demand-letter'
  },
  {
    id: '3',
    category: 'Contract Drafting',
    title: 'Licensing Agreement Template: The 10 Clauses You Need',
    summary: 'Free template based on 500+ drafted agreements. What to include, what to avoid, and how to protect both parties in trademark licensing deals.',
    readTime: '10 min read',
    tags: ['contracts', 'licensing', 'templates'],
    link: '/law/licensing-template'
  }
];

export const TECH_ARTICLES_PREVIEW: ArticlePreview[] = [
  {
    id: '1',
    category: 'Automation Tutorial',
    title: 'Your First Legal Automation: Email to Google Sheets in 30 Minutes',
    summary: 'Complete tutorial for lawyers with zero coding experience. Build a system that captures client inquiries from email and organizes them in a searchable sheet.',
    readTime: '25 min read',
    tags: ['automation', 'google-apps-script', 'tutorial'],
    link: '/tech/email-to-sheets'
  },
  {
    id: '2',
    category: 'Project Walkthrough',
    title: 'Building a Trademark Application Template Generator (With Code)',
    summary: 'How I reduced trademark filing prep from 45 minutes to 5 minutes. Full code walkthrough, common pitfalls, and downloadable template.',
    readTime: '20 min read',
    tags: ['legal-tech', 'trademark', 'automation'],
    link: '/tech/trademark-generator'
  },
  {
    id: '3',
    category: 'Learning Journey',
    title: '30 Days of Google Apps Script: What I Learned',
    summary: 'Honest account of learning to code as a lawyer. What worked, what didn\'t, resources that actually helped, and mistakes to avoid.',
    readTime: '8 min read',
    tags: ['learning', 'apps-script', 'journey'],
    link: '/tech/learning-journey'
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'How I Built an Automated Verdict Extraction System (Step-by-Step)',
    category: 'Legal Tech Insights',
    summary: 'A deep dive into using AI to extract, categorize, and organize verdict data into a searchable database, reducing research time by 70%.',
    readTime: '8 min read',
    date: 'Oct 24, 2023',
    tags: ['Automation', 'AI', 'Legal Tech']
  },
  {
    id: '2',
    title: '5 No-Code Tools Every Legal Professional Should Know',
    category: 'No-Code Tips',
    summary: 'Stop doing repetitive work. Here are the top tools that require zero coding knowledge but deliver massive efficiency gains.',
    readTime: '5 min read',
    date: 'Nov 02, 2023',
    tags: ['No-Code', 'Productivity', 'Tools']
  },
  {
    id: '3',
    title: 'From Chaos to System: My Process for Workflow Automation',
    category: 'Productivity & Systems',
    summary: 'How to audit your current chaos, blueprint a solution, and execute a workflow system that scales.',
    readTime: '10 min read',
    date: 'Dec 15, 2023',
    tags: ['Systems Thinking', 'Workflow', 'Operations']
  },
  {
    id: '4',
    title: 'Using AI for Legal Research: A Practical Guide',
    category: 'Automation Tutorials',
    summary: 'Integrating Claude and Gemini into your legal research workflow without compromising data privacy or accuracy.',
    readTime: '7 min read',
    date: 'Jan 10, 2024',
    tags: ['AI', 'Research', 'Guide']
  },
  {
    id: '5',
    title: 'Building in Public: Lessons from Jotrishi',
    category: 'Productivity & Systems',
    summary: 'The journey of building an organic food brand from Noida for a global audience, and how systems thinking applies to D2C.',
    readTime: '6 min read',
    date: 'Feb 01, 2024',
    tags: ['Entrepreneurship', 'Building in Public']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Verdict Extraction Engine',
    category: 'Legal Tech Automation',
    description: 'An AI agent that scans court dockets, extracts verdict data, and builds a searchable knowledge graph—replacing 20 hours of paralegal research weekly.',
    image: 'https://picsum.photos/id/1/800/600',
    timeline: 'Built in 14 days. Running 8+ months.',
    tools: ['Google Apps Script', 'Claude AI', 'Google Sheets'],
    impact: '20 hours/week saved. Zero missed verdicts.',
    featured: true,
  },
  {
    id: '2',
    title: 'Case Assignment Predictor',
    category: 'Workflow Systems',
    description: 'A logic-gate system that assigns cases based on attorney capacity, complexity scores, and historical win rates. No more gut-feel distribution.',
    image: 'https://picsum.photos/id/20/800/600',
    timeline: '3 weeks',
    tools: ['Google Apps Script', 'Predictive Analytics'],
    impact: '40% faster case velocity in Q4.',
    featured: true,
  },
  {
    id: '3',
    title: 'Workstation Navigator',
    category: 'Workflow Systems',
    description: 'An interactive tutorial portal that turns 3-month ramp-up into 3 weeks. Gamified training with progress tracking and auto-provisioning.',
    image: 'https://picsum.photos/id/4/800/600',
    timeline: '1 month',
    tools: ['Interactive Video', 'LMS'],
    impact: 'New hire productivity: 3 months → 3 weeks.',
    featured: false,
  },
  {
    id: '4',
    title: 'NTD Drafting System',
    category: 'AI-Powered Tools',
    description: 'LLM-powered tool that ingests medical records and police reports to generate preliminary demand letters. Human review still required—but first drafts are 10x more consistent.',
    image: 'https://picsum.photos/id/3/800/600',
    timeline: 'Ongoing',
    tools: ['AI Models', 'Document Automation'],
    impact: '10x drafting consistency. Hours saved per letter.',
    featured: false,
  },
  {
    id: '5',
    title: 'Jotrishi Organics',
    category: 'Personal Ventures',
    description: 'D2C organic food brand connecting Haridwar\'s women farmers with conscious consumers. Full-stack launch: supply chain automation, Shopify headless, and marketing workflows.',
    image: 'https://picsum.photos/id/6/800/600',
    timeline: 'Live',
    tools: ['Shopify', 'Branding', 'Supply Chain'],
    impact: 'Profitable in 3 months. 100% women-sourced.',
    featured: false,
  }
];

export const SERVICES: Service[] = [
  {
    id: 'legal',
    title: 'Legal Tech Automation',
    target: 'For Law Firms Drowning in Manual Work',
    icon: 'legal',
    offerings: [
      'Document generation that writes itself',
      'Verdict & settlement databases you can actually search',
      'CMS migrations without the data loss nightmares',
      'AI-powered discovery that finds what humans miss',
    ]
  },
  {
    id: 'workflow',
    title: 'Workflow Engineering',
    target: 'For Teams Running on Duct Tape & Spreadsheets',
    icon: 'workflow',
    offerings: [
      'n8n/Zapier integrations that actually work',
      'Internal tools your team will actually use',
      'Bottleneck audits that find the 10hrs/week you\'re losing',
      'Dashboards that tell you what to do, not just what happened',
    ]
  },
  {
    id: 'nocode',
    title: 'Second Brain Setup',
    target: 'For Founders Who Can\'t Afford to Forget',
    icon: 'nocode',
    offerings: [
      'Notion/Obsidian systems that grow with your brain',
      'PKM coaching so you never lose an idea again',
      'Content pipelines: write once, publish everywhere',
      'Digital garden setup for public thought leadership',
    ]
  }
];