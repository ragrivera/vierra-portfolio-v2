import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { projects } from '@vierra/db/schema';
import { z } from 'zod';

export const projectSelect = createSelectSchema(projects);
export const projectInsert = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const projectUpdate = projectInsert.partial();

export const projectReorder = z.object({
  ids: z.array(z.string().uuid()),
});

export type ProjectSelect = z.infer<typeof projectSelect>;
export type ProjectInsert = z.infer<typeof projectInsert>;
export type ProjectUpdate = z.infer<typeof projectUpdate>;
