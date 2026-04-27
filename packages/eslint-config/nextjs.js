import react from './react.js';

export default [
  ...react,
  {
    rules: {
      // Next.js specific overrides can go here. The full next/core-web-vitals
      // config is also pulled in via apps/{web,cms}/eslint.config.js when needed.
    },
  },
];
