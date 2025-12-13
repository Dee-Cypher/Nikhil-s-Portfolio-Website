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

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  label: string;
  value: string;
}