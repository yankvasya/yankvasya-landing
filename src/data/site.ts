// Central data for the landing page.
// Edit this file to update content without touching markup.

export const profile = {
  name: 'Vasily Yankovsky',
  handle: 'yankvasya',
  role: 'Frontend Developer',
  location: 'Nha Trang, Vietnam',
  tagline:
    'I build fast, clean and maintainable web interfaces — mostly with Vue.',
  bio: [
    'Frontend developer with 4+ years of experience, 3 of them on a single large product — a multi-brand publisher platform (Clickadilla, MyBid, Onclicka) built on Vue.',
    'I take tasks from idea to production on my own: I owned key product redesigns (Ad Codes, Payments) and migrated ~40 components to the Composition API. I onboarded new developers and regularly reviewed my teammates’ code.',
  ],
  contacts: {
    telegram: 'https://t.me/yankvasya',
    linkedin: 'https://www.linkedin.com/in/yankvasya',
    github: 'https://github.com/yankvasya',
    email: 'yankvasya@gmail.com',
  },
};

export interface Project {
  name: string;
  description: string;
  github: string;
  live?: string;
  stack: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'dashpod',
    description:
      'Podcast app — a clean way to discover, follow and play your favorite podcasts.',
    github: 'https://github.com/yankvasya/dashpod',
    live: 'https://dashpod.yankvasya.dev/',
    stack: ['TypeScript', 'Vue', 'Vite'],
    featured: true,
  },
  {
    name: 'transfer-music',
    description:
      'Transfer your playlists between music streaming services in a few clicks.',
    github: 'https://github.com/yankvasya/transfer-music',
    live: 'https://transfermusic.yankvasya.dev/',
    stack: ['TypeScript', 'Vue', 'Vite'],
    featured: true,
  },
  {
    name: 'shop-base',
    description:
      'A Shopify app experiment — exploring the Shopify API and building a shop app.',
    github: 'https://github.com/yankvasya/shop-base',
    stack: ['TypeScript', 'Shopify API'],
    featured: false,
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  stack: string[];
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: 'Lofty',
    role: 'Frontend Developer (Vue)',
    period: 'Mar 2023 — Mar 2026',
    stack: ['Vue 2/3', 'TypeScript', 'Pinia', 'Tailwind', 'Vite'],
    highlights: [
      'Owned key redesigns of the publisher platform (Ad Codes, Payments) across Clickadilla, MyBid and Onclicka.',
      'Migrated ~40 admin components from vue-class-component to the Composition API.',
      'Built a CRM section for managers from scratch — reporting tabs, filters and inline-editing comments.',
      'Designed UI for 3 new Telegram Mini Apps formats (Video, Banner, Inpage).',
      'Diagnosed a CI/CD degradation that dropped parallel builds from 3–5 to 1.',
    ],
  },
  {
    company: 'Echo',
    role: 'Middle Frontend Developer (Vue)',
    period: 'Oct 2022 — Jan 2023',
    stack: ['Nuxt 3', 'TypeScript', 'Pinia', 'Tailwind', 'i18n'],
    highlights: [
      'Built key components and features of an SSR app on Nuxt 3 with a focus on performance.',
      'Implemented complex forms with file upload, validation and error handling.',
      'Added English localization (i18n) for an international audience.',
    ],
  },
  {
    company: 'ProContext',
    role: 'Frontend Developer (Vue)',
    period: 'Jan 2022 — Sep 2022',
    stack: ['Vue 3', 'TypeScript', 'Vuex', 'Vitest', 'Storybook'],
    highlights: [
      'Developed and maintained an SPA automation system; wrote tests (Vitest) and documented via Storybook.',
      'Created 5+ marketing landing pages from scratch with a focus on speed and responsive UI.',
      'Built a Telegram bot on Node.js integrating third-party APIs.',
    ],
  },
];
