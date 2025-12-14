import { Project, Service, Stat, NavItem, Article } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Knowledge', path: '/knowledge' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const STATS: Stat[] = [
  { value: '10+', label: 'Automation Tools Built' },
  { value: '1000+', label: 'Hours Saved' },
  { value: '40+', label: 'Points Weekly at EvenUp' },
  { value: '2', label: 'Ventures in Progress' },
];

export const SKILLS = [
  'Google Apps Script', 'n8n', 'Claude AI', 'Gemini', 
  'Canva', 'Google Sheets', 'Case Companion AI', 'Cursor', 'ChatGPT',
  'Zapier', 'Legal Research'
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