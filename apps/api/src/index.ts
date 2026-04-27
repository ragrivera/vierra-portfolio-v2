import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { publicRoutes } from './routes/public';
import { adminRoutes } from './routes/admin';

const app = new Hono();

app.use('*', logger());
app.use(
  '*',
  cors({
    origin: (process.env.ALLOWED_ORIGINS ?? 'http://localhost:1803,http://localhost:1804').split(
      ',',
    ),
    credentials: true,
  }),
);

app.get('/health', (c) => c.json({ ok: true, service: 'vierra-api', ts: new Date().toISOString() }));

const routes = app.route('/public', publicRoutes).route('/admin', adminRoutes);

const port = Number(process.env.API_PORT ?? 1800);

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`▲ vierra-api listening on http://localhost:${info.port}`);
});

export type AppType = typeof routes;
