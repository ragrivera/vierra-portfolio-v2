// Public content types consumed by apps/web. Mirrors @vierra/db's $inferSelect shapes
// but kept loose-typed here so the web app doesn't take a hard dep on Drizzle internals
// when (later) reading from the live API instead of fixtures.

import type { Social, IdCardRow } from '@vierra/types';

export type ProjectStatus = 'live' | 'beta' | 'archived';
export type ProjectAccent = 'purple' | 'pink' | 'cyan';
export type PreviewKind = 'lines' | 'wave' | 'bars' | 'grid' | 'spiral' | 'pulse';

export type Project = {
  id: string;
  num: string;
  title: string;
  tag: string | null;
  description: string | null;
  status: ProjectStatus;
  accent: ProjectAccent;
  previewKind: PreviewKind;
  stack: string[];
  caseStudyUrl: string | null;
  sortOrder: number;
};

export type CareerStat = { k: string; v: string };

export type CareerEntry = {
  id: string;
  slug: string;
  fromYear: number;
  toYear: string; // either "2024" or "now"
  role: string;
  org: string;
  tag: string | null;
  color: string; // hex
  description: string | null;
  stats: CareerStat[];
  sortOrder: number;
};

export type StackCategory = {
  id: string;
  category: string;
  items: string[];
  sortOrder: number;
};

export type AboutSection = {
  bodyMd: string;
  idCardRows: IdCardRow[];
};

export type SiteSettings = {
  handle: string;
  heroSubtitle: string | null;
  heroStatus: string | null;
  heroLocation: string | null;
  heroStack: string | null;
  heroCommitsYr: number | null;
  hudShow: boolean;
  hudGrid: boolean;
  contactEmail: string | null;
  contactSocials: Social[];
  footerLine: string | null;
  buildHash: string | null;
};
