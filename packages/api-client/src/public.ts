// Public read API. Currently returns hardcoded fixtures because apps/api is deferred.
// When the Hono API lands, swap each function body for a typed `hc(...)` fetch
// against the corresponding /public/* route. The signatures here will not change.

import {
  ABOUT_FIXTURE,
  CAREER_FIXTURE,
  PROJECTS_FIXTURE,
  SITE_FIXTURE,
  STACK_FIXTURE,
} from './fixtures';
import type {
  AboutSection,
  CareerEntry,
  Project,
  SiteSettings,
  StackCategory,
} from './types';

export async function getSite(): Promise<SiteSettings> {
  return SITE_FIXTURE;
}

export async function listProjects(): Promise<Project[]> {
  return [...PROJECTS_FIXTURE].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function listCareer(): Promise<CareerEntry[]> {
  return [...CAREER_FIXTURE].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function listStack(): Promise<StackCategory[]> {
  return [...STACK_FIXTURE].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getAbout(): Promise<AboutSection> {
  return ABOUT_FIXTURE;
}
