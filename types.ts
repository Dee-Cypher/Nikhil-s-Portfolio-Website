export interface Project {
  id: string;
  title: string;
  category: 'Legal Tech Automation' | 'Workflow Systems' | 'AI-Powered Tools' | 'Personal Ventures';
  description: string;
  image: string;
  timeline: string;
  role?: string;
  tools: string[];
  impact: string;
  link?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  target: string;
  offerings: string[];
  icon: 'legal' | 'workflow' | 'nocode';
}

export interface Article {
  id: string;
  title: string;
  category: 'Legal Tech Insights' | 'No-Code Tips' | 'Productivity & Systems' | 'Automation Tutorials';
  summary: string;
  readTime: string;
  date: string;
  tags: string[];
  content?: string; // For future expansion
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Stat {
  number: string;
  label: string;
  sublabel: string;
}

export interface Domain {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description?: string;
  bulletPoints: string[];
  idealFor: string;
}

export interface Integration {
  id: number;
  icon: string;
  title: string;
  lawApplication: string;
  financeApplication: string;
  techApplication: string;
  takeaway: string;
}

export interface Philosophy {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ArticlePreview {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  tags: string[];
  link: string;
}