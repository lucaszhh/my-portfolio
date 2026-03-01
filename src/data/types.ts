export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Badge = {
  label: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  stack?: string[];
  link?: LinkItem;
};

export type ProjectItem = {
  id: string;
  name: string;
  year?: string;
  description: string[];
  stack?: string[];
  links?: LinkItem[];
};

export type Metric = {
  id: string;
  value: string;
  label: string;
  description?: string;
  link?: LinkItem;
};

export type EducationItem = {
  id: string;
  title: string;
  org: string;
  year: string;
  details?: string[];
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  results: string[];
  stack: string[];
};
