import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { careerEntries } from '@vierra/db/schema';
import { z } from 'zod';

export const careerSelect = createSelectSchema(careerEntries);
export const careerInsert = createInsertSchema(careerEntries).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const careerUpdate = careerInsert.partial();

export type CareerSelect = z.infer<typeof careerSelect>;
export type CareerInsert = z.infer<typeof careerInsert>;
export type CareerUpdate = z.infer<typeof careerUpdate>;
