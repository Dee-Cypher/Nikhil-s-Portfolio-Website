export interface Project {
  id: string;
  title: string;
  category: 'Legal Tech' | 'Workflow' | 'AI' | 'Ventures';
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
  category: 'Law' | 'Tech' | 'Life' | 'Skills';
  summary: string;
  readTime: string;
  date: string;
  tags: string[];
  content?: string; // For future expansion
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  label: string;
  value: string;
}