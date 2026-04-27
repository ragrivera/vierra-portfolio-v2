import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const projectStatus = pgEnum('project_status', ['live', 'beta', 'archived']);
export const projectAccent = pgEnum('project_accent', ['purple', 'pink', 'cyan']);
export const previewKind = pgEnum('preview_kind', [
  'lines',
  'wave',
  'bars',
  'grid',
  'spiral',
  'pulse',
]);

export const siteSettings = pgTable('site_settings', {
  id: integer('id').primaryKey().default(1),
  handle: text('handle').notNull(),
  heroSubtitle: text('hero_subtitle'),
  heroStatus: text('hero_status'),
  heroLocation: text('hero_location'),
  heroStack: text('hero_stack'),
  heroCommitsYr: integer('hero_commits_yr'),
  hudShow: boolean('hud_show').notNull().default(true),
  hudGrid: boolean('hud_grid').notNull().default(true),
  contactEmail: text('contact_email'),
  contactSocials: jsonb('contact_socials')
    .$type<{ label: string; href: string }[]>()
    .notNull()
    .default([]),
  footerLine: text('footer_line'),
  buildHash: text('build_hash'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  num: text('num').notNull(),
  title: text('title').notNull(),
  tag: text('tag'),
  description: text('description'),
  status: projectStatus('status').notNull(),
  accent: projectAccent('accent').notNull(),
  previewKind: previewKind('preview_kind').notNull(),
  stack: text('stack').array().notNull().default([]),
  caseStudyUrl: text('case_study_url'),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const careerEntries = pgTable('career_entries', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull(),
  fromYear: integer('from_year').notNull(),
  toYear: text('to_year').notNull(), // numeric string or "now"
  role: text('role').notNull(),
  org: text('org').notNull(),
  tag: text('tag'),
  color: text('color').notNull(),
  description: text('description'),
  stats: jsonb('stats')
    .$type<{ k: string; v: string }[]>()
    .notNull()
    .default([]),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const stackCategories = pgTable('stack_categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  category: text('category').notNull(),
  items: text('items').array().notNull().default([]),
  sortOrder: integer('sort_order').notNull().default(0),
});

export const aboutSection = pgTable('about_section', {
  id: integer('id').primaryKey().default(1),
  bodyMd: text('body_md').notNull(),
  idCardRows: jsonb('id_card_rows')
    .$type<{ label: string; value: string; accent?: 'ok' | 'pink' }[]>()
    .notNull()
    .default([]),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type CareerEntry = typeof careerEntries.$inferSelect;
export type NewCareerEntry = typeof careerEntries.$inferInsert;
export type StackCategory = typeof stackCategories.$inferSelect;
export type NewStackCategory = typeof stackCategories.$inferInsert;
export type AboutSection = typeof aboutSection.$inferSelect;
export type SiteSettings = typeof siteSettings.$inferSelect;
