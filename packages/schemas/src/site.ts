import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { siteSettings } from '@vierra/db/schema';
import { z } from 'zod';

export const siteSelect = createSelectSchema(siteSettings);
export const siteUpsert = createInsertSchema(siteSettings).omit({ id: true, updatedAt: true });
export const siteUpdate = siteUpsert.partial();

export type SiteSelect = z.infer<typeof siteSelect>;
export type SiteUpsert = z.infer<typeof siteUpsert>;
export type SiteUpdate = z.infer<typeof siteUpdate>;
