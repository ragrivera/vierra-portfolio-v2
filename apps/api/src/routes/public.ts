import { Hono } from 'hono';

// Stubbed read routes. To be wired to Drizzle queries against @vierra/db once
// the local Postgres is seeded. For now they return 501 so that consumers can
// see the intended shape of the API surface.

export const publicRoutes = new Hono()
  .get('/site', (c) => c.json({ error: 'not_implemented' }, 501))
  .get('/projects', (c) => c.json({ error: 'not_implemented' }, 501))
  .get('/career', (c) => c.json({ error: 'not_implemented' }, 501))
  .get('/stack', (c) => c.json({ error: 'not_implemented' }, 501))
  .get('/about', (c) => c.json({ error: 'not_implemented' }, 501));
