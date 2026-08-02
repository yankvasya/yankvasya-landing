# yankvasya.dev

Minimalistic personal landing page / CV for Vasily Yankovsky (yankvasya).

Built with **Astro** — fast, static, and easy to deploy.

## 🚀 Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Install dependencies                        |
| `npm run dev`   | Start local dev server at `localhost:4321`  |
| `npm run build` | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally     |

## ✏️ Editing content

All content (profile, projects, experience, contacts) lives in a single file:

```
src/data/site.ts
```

Edit that file to update your bio, projects, links, or work history — no need to touch the markup.

## 🎨 Design

- Dark, minimalistic dev/terminal aesthetic
- Green accent (`#4ade80`)
- Monospace accents + Inter for body
- Scroll-reveal animations, typing effect in the hero
- Fully responsive, respects `prefers-reduced-motion`
