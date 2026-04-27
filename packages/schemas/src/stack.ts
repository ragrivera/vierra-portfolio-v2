import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { stackCategories } from '@vierra/db/schema';
import { z } from 'zod';

export const stackSelect = createSelectSchema(stackCategories);
export const stackInsert = createInsertSchema(stackCategories).omit({ id: true });
export const stackUpdate = stackInsert.partial();

export type StackSelect = z.infer<typeof stackSelect>;
export type StackInsert = z.infer<typeof stackInsert>;
export type StackUpdate = z.infer<typeof stackUpdate>;
