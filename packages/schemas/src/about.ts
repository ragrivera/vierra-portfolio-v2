import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { aboutSection } from '@vierra/db/schema';
import { z } from 'zod';

export const aboutSelect = createSelectSchema(aboutSection);
export const aboutUpsert = createInsertSchema(aboutSection).omit({ id: true });
export const aboutUpdate = aboutUpsert.partial();

export type AboutSelect = z.infer<typeof aboutSelect>;
export type AboutUpsert = z.infer<typeof aboutUpsert>;
export type AboutUpdate = z.infer<typeof aboutUpdate>;
