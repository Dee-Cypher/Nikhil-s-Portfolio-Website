import { Project, Service, Stat, NavItem, Article } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Knowledge', path: '/knowledge' }, // New Section
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const STATS: Stat[] = [
  { value: '10+', label: 'Automation Architectures' },
  { value: '1000+', label: 'Billable Hours Saved' },
  { value: 'Top 1%', label: 'Efficiency Rating' },
  { value: '∞', label: 'Knowledge Shared' },
];

export const SKILLS = [
  'Google Apps Script', 'System Architecture', 'Legal Engineering', 'Claude AI', 'Gemini Ultra', 
  'React', 'TypeScript', 'n8n Workflows', 'Prompt Engineering', 'Data Privacy',
  'Zapier Logic', 'Contract Analysis'
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Death of the Billable Hour: Automating Discovery',
    category: 'Law',
    summary: 'Why manual document review is costing firms millions and how simple regex patterns combined with LLMs can solve it.',
    readTime: '5 min read',
    date: 'Oct 24, 2023',
    tags: ['Automation', 'Legal Tech', 'Future of Law']
  },
  {
    id: '2',
    title: 'Building a Second Brain in Notion for Lawyers',
    category: 'Skills',
    summary: 'A step-by-step guide to organizing case law, client notes, and procedural knowledge into a queryable database.',
    readTime: '12 min read',
    date: 'Nov 02, 2023',
    tags: ['Notion', 'Productivity', 'Knowledge Management']
  },
  {
    id: '3',
    title: 'Variables vs. Constants: Life Lessons from Coding',
    category: 'Life',
    summary: 'How understanding scope and immutability in TypeScript changed how I approach personal relationships and habit building.',
    readTime: '8 min read',
    date: 'Dec 15, 2023',
    tags: ['Philosophy', 'Coding', 'Mindset']
  },
  {
    id: '4',
    title: 'Reverse Engineering the Court System API',
    category: 'Tech',
    summary: 'A technical deep dive into scraping public court records responsibly to build predictive analytics models.',
    readTime: '15 min read',
    date: 'Jan 10, 2024',
    tags: ['Scraping', 'Python', 'Legal Data']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Verdict Extraction Engine',
    category: 'Legal Tech',
    description: 'An autonomous agent that monitors court dockets, extracts verdict data using NLP, and populates a firm-wide knowledge graph.',
    image: 'https://picsum.photos/id/1/800/600',
    timeline: 'Deployed in 14 days',
    tools: ['Google Apps Script', 'Claude 3.5', 'PostgreSQL'],
    impact: 'Eliminated 20hrs/week of paralegal research time.',
    featured: true,
  },
  {
    id: '2',
    title: 'Algorithmic Case Distribution',
    category: 'Workflow',
    description: 'A logic-gate system that assigns cases based on attorney capacity, case complexity score, and historical performance metrics.',
    image: 'https://picsum.photos/id/20/800/600',
    timeline: '3 week sprint',
    tools: ['Python', 'Pandas', 'Internal API'],
    impact: 'Increased case velocity by 40% in Q4.',
    featured: true,
  },
  {
    id: '3',
    title: 'Onboarding.OS',
    category: 'Workflow',
    description: 'A gamified, interactive portal for new hires that automates account provisioning and training modules.',
    image: 'https://picsum.photos/id/3/800/600',
    timeline: '1 month',
    tools: ['Notion API', 'React', 'Loom'],
    impact: 'Reduced ramp-up time from 3 months to 3 weeks.',
    featured: false,
  },
  {
    id: '4',
    title: 'Auto-Demand Writer',
    category: 'Legal Tech',
    description: 'Fine-tuned LLM wrapper that ingests medical records and police reports to draft preliminary demand letters.',
    image: 'https://picsum.photos/id/4/800/600',
    timeline: 'Ongoing Beta',
    tools: ['OpenAI API', 'LangChain', 'Next.js'],
    impact: 'Drafting consistency improved by factor of 10.',
    featured: false,
  },
  {
    id: '5',
    title: 'Jotrishi Organics',
    category: 'Ventures',
    description: 'Full-stack D2C brand launch including supply chain automation and Shopify headless implementation.',
    image: 'https://picsum.photos/id/6/800/600',
    timeline: 'Live',
    tools: ['Shopify', 'Liquid', 'Marketing Automation'],
    impact: 'Profitable within 3 months of launch.',
    featured: false,
  }
];

export const SERVICES: Service[] = [
  {
    id: 'legal',
    title: 'Legal Engineering',
    target: 'Forward-thinking Law Firms',
    icon: 'legal',
    offerings: [
      'Automated Document Generation Pipelines',
      'Verdict & Settlement Data Warehousing',
      'Case Management System (CMS) Migrations',
      'LLM Integration for Discovery',
    ]
  },
  {
    id: 'workflow',
    title: 'System Architecture',
    target: 'Operations Teams & Startups',
    icon: 'workflow',
    offerings: [
      'Cross-Platform API Integrations (n8n/Zapier)',
      'Custom Internal Tool Development',
      'Operational Bottleneck Audits',
      'Dashboard & Analytics Implementation',
    ]
  },
  {
    id: 'nocode',
    title: 'Knowledge Systems',
    target: 'Founders & Solopreneurs',
    icon: 'nocode',
    offerings: [
      'Second Brain Setup (Notion/Obsidian)',
      'Personal Knowledge Management (PKM) Coaching',
      'Automated Content Distribution Systems',
      'Digital Garden Cultivation',
    ]
  }
];