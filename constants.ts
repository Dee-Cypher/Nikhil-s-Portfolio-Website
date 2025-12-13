import { Project, Service, Stat, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
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
  'Google Apps Script', 'Notion', 'n8n', 'Claude AI', 'Gemini', 
  'Canva', 'Google Sheets', 'Case Companion AI', 'Cursor', 'ChatGPT',
  'Zapier', 'Slack'
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Verdict Extraction System',
    category: 'Legal Tech',
    description: 'AI-powered tool extracting, categorizing, and organizing legal verdict data into a searchable database.',
    image: 'https://picsum.photos/id/1/800/600',
    timeline: '2 weeks',
    tools: ['Google Apps Script', 'Claude/GPT', 'Google Sheets'],
    impact: 'Reduced verdict research time by 70%. Adopted as standard team tool.',
    featured: true,
  },
  {
    id: '2',
    title: 'Case Assignment Predictor',
    category: 'Workflow',
    description: 'Predictive system for optimizing case distribution based on historical data and complexity.',
    image: 'https://picsum.photos/id/20/800/600',
    timeline: '3 weeks',
    tools: ['Google Apps Script', 'Predictive Analytics'],
    impact: 'More equitable workload distribution and better team point target achievement.',
    featured: true,
  },
  {
    id: '3',
    title: 'Interactive Tutorial Portal',
    category: 'Workflow',
    description: 'Onboarding system for Workstation platform to streamline new hire training.',
    image: 'https://picsum.photos/id/3/800/600',
    timeline: '1 month',
    tools: ['Notion', 'Loom', 'React'],
    impact: 'Decreased onboarding time by 40%.',
    featured: false,
  },
  {
    id: '4',
    title: 'NTD Writing System',
    category: 'Legal Tech',
    description: 'AI-assisted demand letter automation tailored for personal injury claims.',
    image: 'https://picsum.photos/id/4/800/600',
    timeline: '3 weeks',
    tools: ['OpenAI API', 'Python', 'Google Docs'],
    impact: 'Drafting speed increased by 2x.',
    featured: false,
  },
  {
    id: '5',
    title: 'Jotrishi Brand Development',
    category: 'Ventures',
    description: 'Complete website, branding, and positioning for an organic food brand.',
    image: 'https://picsum.photos/id/6/800/600',
    timeline: 'Ongoing',
    tools: ['Framer', 'Canva', 'Shopify'],
    impact: 'Launched online presence reaching global customers.',
    featured: false,
  }
];

export const SERVICES: Service[] = [
  {
    id: 'legal',
    title: 'Legal Tech Automation',
    target: 'Law firms, legal tech companies, solo practitioners',
    icon: 'legal',
    offerings: [
      'Document automation systems',
      'Legal research database setup',
      'Case management workflow optimization',
      'AI integration for legal processes',
    ]
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    target: 'Small businesses, startups, operations teams',
    icon: 'workflow',
    offerings: [
      'n8n workflow design and implementation',
      'Google Apps Script custom solutions',
      'Process audit and optimization',
      'Tool integration (connecting existing tools)',
    ]
  },
  {
    id: 'nocode',
    title: 'No-Code Solutions',
    target: 'Entrepreneurs, small teams, non-technical founders',
    icon: 'nocode',
    offerings: [
      'Notion workspace design',
      'Automated reporting dashboards',
      'Content systems and databases',
      'AI tool setup and prompt libraries',
    ]
  }
];
