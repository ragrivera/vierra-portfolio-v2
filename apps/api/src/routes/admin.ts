import { Hono } from 'hono';

// Stubbed admin routes. Will use @hono/zod-validator with @vierra/schemas
// for body validation, and a requireEditor middleware (verifies a Supabase JWT
// or a Postgres-backed session — TBD when CMS auth is built).

export const adminRoutes = new Hono()
  .patch('/site', (c) => c.json({ error: 'not_implemented' }, 501))
  .post('/projects', (c) => c.json({ error: 'not_implemented' }, 501))
  .patch('/projects/:id', (c) => c.json({ error: 'not_implemented' }, 501))
  .delete('/projects/:id', (c) => c.json({ error: 'not_implemented' }, 501))
  .post('/projects/reorder', (c) => c.json({ error: 'not_implemented' }, 501))
  .post('/career', (c) => c.json({ error: 'not_implemented' }, 501))
  .patch('/career/:id', (c) => c.json({ error: 'not_implemented' }, 501))
  .delete('/career/:id', (c) => c.json({ error: 'not_implemented' }, 501))
  .post('/stack', (c) => c.json({ error: 'not_implemented' }, 501))
  .patch('/stack/:id', (c) => c.json({ error: 'not_implemented' }, 501))
  .delete('/stack/:id', (c) => c.json({ error: 'not_implemented' }, 501))
  .patch('/about', (c) => c.json({ error: 'not_implemented' }, 501));
