// Hardcoded content matching the prototype seed data. Used while the API is deferred.
// Replace with real API calls (see ./public.ts) once apps/api is fleshed out.

import type {
  AboutSection,
  CareerEntry,
  Project,
  SiteSettings,
  StackCategory,
} from './types';

export const SITE_FIXTURE: SiteSettings = {
  handle: 'vierra',
  heroSubtitle: '// full-stack engineer',
  heroStatus: '// available q3-q4',
  heroLocation: 'grid//37.7749°n',
  heroStack: 'ts · react · node',
  heroCommitsYr: 1847,
  hudShow: true,
  hudGrid: true,
  contactEmail: 'hi@vierra.dev',
  contactSocials: [
    { label: 'github', href: '#' },
    { label: 'x', href: '#' },
    { label: 'bluesky', href: '#' },
    { label: 'read.cv', href: '#' },
    { label: 'discord', href: '#' },
  ],
  footerLine: '// hand-rolled by vierra · no frameworks were harmed',
  buildHash: 'a1f3.42',
};

export const PROJECTS_FIXTURE: Project[] = [
  {
    id: 'p1',
    num: '01',
    status: 'live',
    title: 'nullport',
    tag: '// edge proxy + auth',
    description:
      'A tiny, mean reverse proxy with built-in auth, rate limiting, and a config file you can read in one breath. Powers a few startups whose names I am contractually told not to say.',
    stack: ['typescript', 'node', 'fastify', 'redis'],
    accent: 'purple',
    previewKind: 'lines',
    caseStudyUrl: null,
    sortOrder: 1,
  },
  {
    id: 'p2',
    num: '02',
    status: 'live',
    title: 'glyph.fm',
    tag: '// realtime collab editor',
    description:
      'Multiplayer markdown editor with CRDT sync and a presence layer that does not lie. Built because Notion asked me a security question once.',
    stack: ['typescript', 'yjs', 'next', 'postgres'],
    accent: 'pink',
    previewKind: 'wave',
    caseStudyUrl: null,
    sortOrder: 2,
  },
  {
    id: 'p3',
    num: '03',
    status: 'beta',
    title: 'chrono.sh',
    tag: '// cli time tracker',
    description:
      'A time tracker that lives in your shell, syncs over git, and refuses to nag you. Has more keybinds than features, which is the correct ratio.',
    stack: ['go', 'sqlite', 'bubbletea'],
    accent: 'cyan',
    previewKind: 'bars',
    caseStudyUrl: null,
    sortOrder: 3,
  },
  {
    id: 'p4',
    num: '04',
    status: 'live',
    title: 'spectrasrv',
    tag: '// observability dashboard',
    description:
      'A drop-in React dashboard for OTel traces, tuned for tiny VPS budgets. Ships logs, metrics, and a status grid that loads before you blink. Used by my own homelab and at least 3 strangers.',
    stack: ['react', 'typescript', 'otel', 'd3'],
    accent: 'purple',
    previewKind: 'grid',
    caseStudyUrl: null,
    sortOrder: 4,
  },
  {
    id: 'p5',
    num: '05',
    status: 'beta',
    title: 'noctilux',
    tag: '// shader playground',
    description:
      'A WebGPU shader sketchbook with a hot-reloading uniform inspector. I made this because I wanted a smaller version of Shadertoy with fewer bouncing balls.',
    stack: ['typescript', 'webgpu', 'react', 'wgsl'],
    accent: 'pink',
    previewKind: 'spiral',
    caseStudyUrl: null,
    sortOrder: 5,
  },
  {
    id: 'p6',
    num: '06',
    status: 'archived',
    title: 'gridtalk',
    tag: '// p2p chat protocol',
    description:
      'A peer-to-peer chat protocol that worked great until I tried to onboard my mom. Archived with love. The crypto still holds up; the UX did not.',
    stack: ['go', 'libp2p', 'noise'],
    accent: 'cyan',
    previewKind: 'pulse',
    caseStudyUrl: null,
    sortOrder: 6,
  },
];

export const CAREER_FIXTURE: CareerEntry[] = [
  {
    id: 'c1',
    slug: 'agency',
    fromYear: 2018,
    toYear: '2020',
    role: 'Junior Dev → IC2',
    org: 'the agency years',
    tag: 'origin',
    color: '#22d3ee',
    description:
      'Built websites for clients who wanted "kind of like Apple, but cheaper, and by Friday." Learned the value of saying no, and Tailwind.',
    stats: [
      { k: 'sites shipped', v: '40+' },
      { k: 'all-nighters', v: 'too many' },
      { k: 'levelup', v: 'jr → ic2' },
    ],
    sortOrder: 1,
  },
  {
    id: 'c2',
    slug: 'cyantech',
    fromYear: 2020,
    toYear: '2022',
    role: 'Software Engineer',
    org: 'cyantech (acq.)',
    tag: 'first eng hire',
    color: '#a855f7',
    description:
      'First eng hire. Wrote the original API in a weekend, then spent two years apologizing for it. Eventually rewrote it. Apologized less.',
    stats: [
      { k: 'team grew', v: '1 → 14' },
      { k: 'rewrites', v: '2 (worth it)' },
      { k: 'exit', v: 'acquired' },
    ],
    sortOrder: 2,
  },
  {
    id: 'c3',
    slug: 'hexgrid',
    fromYear: 2022,
    toYear: '2024',
    role: 'Full-Stack Engineer',
    org: 'hexgrid systems',
    tag: 'platform',
    color: '#ec4899',
    description:
      'Shipped the developer portal end-to-end. Designed a plugin runtime so internal teams could ship without bothering us. They still bothered us, but for cooler reasons.',
    stats: [
      { k: 'plugins shipped', v: '23' },
      { k: 'p99 dropped', v: '−68%' },
      { k: 'docs written', v: 'finally' },
    ],
    sortOrder: 3,
  },
  {
    id: 'c4',
    slug: 'nullspace',
    fromYear: 2024,
    toYear: 'now',
    role: 'Senior Engineer',
    org: 'nullspace labs',
    tag: 'current',
    color: '#a855f7',
    description:
      'Lead on the platform team. Rewrote the ingestion pipeline in Node + Go workers, cut p99 from 800ms → 40ms, and got to delete 12k lines of legacy code in the process. Best week of my year.',
    stats: [
      { k: 'p99 latency', v: '800ms → 40ms' },
      { k: 'lines deleted', v: '12,184' },
      { k: 'pages handled', v: '47 (so far)' },
    ],
    sortOrder: 4,
  },
];

export const STACK_FIXTURE: StackCategory[] = [
  {
    id: 's1',
    category: '// languages',
    items: ['typescript', 'javascript', 'go', 'python', 'elixir (lurking)'],
    sortOrder: 1,
  },
  {
    id: 's2',
    category: '// frontend',
    items: ['react / next', 'react native', 'tailwind', 'three.js', 'css (begrudgingly)'],
    sortOrder: 2,
  },
  {
    id: 's3',
    category: '// backend',
    items: ['node / bun', 'express / fastify', 'postgres', 'redis', 'nats'],
    sortOrder: 3,
  },
  {
    id: 's4',
    category: '// infra',
    items: ['docker / k8s', 'terraform', 'cloudflare', 'aws (reluctantly)', 'nix'],
    sortOrder: 4,
  },
  {
    id: 's5',
    category: '// tooling',
    items: ['neovim btw', 'zellij', 'lazygit', 'ripgrep', 'fzf everything'],
    sortOrder: 5,
  },
  {
    id: 's6',
    category: '// observability',
    items: ['otel', 'grafana', 'tempo', 'loki', 'print statements (real)'],
    sortOrder: 6,
  },
  {
    id: 's7',
    category: '// learning',
    items: ['zig', 'compilers', 'wasm runtimes', 'distributed consensus'],
    sortOrder: 7,
  },
  {
    id: 's8',
    category: '// retired',
    items: ['jquery', 'php (mostly)', 'aws lambda cold starts', 'that one yaml file'],
    sortOrder: 8,
  },
];

export const ABOUT_FIXTURE: AboutSection = {
  bodyMd:
    "I'm a <em>full-stack engineer</em> who <cy>talks to databases</cy> and <pu>argues with TypeScript</pu> for a living. Six years deep, currently shipping infra and product code that other devs actually want to use. I build things that don't fall over at 3am — and when they do, I'm usually the one who picked up the pager.\n\nPretty into: small APIs, weird CLIs, observability, and shaving milliseconds off cold starts. Not into: standups longer than the work itself.",
  idCardRows: [
    { label: 'handle', value: 'vierra' },
    { label: 'class', value: 'full-stack/sys' },
    { label: 'level', value: 'senior · 6y' },
    { label: 'status', value: '█ online', accent: 'ok' },
    { label: 'specialty', value: 'distributed sys' },
    { label: 'side quest', value: 'homelab + compilers', accent: 'pink' },
    { label: 'cats', value: '2 (deployed)' },
    { label: 'last seen', value: 'just now' },
  ],
};
