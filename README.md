# Personal portfolio

Server-rendered portfolio site built with Nuxt 4, Tailwind CSS v4, and Nuxt Content v3.
Dark-only, terminal-flavoured, one typeface.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # production build into .output/
pnpm preview    # serve the production build locally
pnpm lint       # eslint
pnpm typecheck  # vue-tsc via nuxt typecheck
```

## Where the content lives

| What | Where | Notes |
| --- | --- | --- |
| Name, tagline, email, GitHub, LinkedIn, CV path | `app/composables/useSiteConfig.ts` | Replace every `PLACEHOLDER` |
| About paragraphs | `app/pages/index.vue` | Two `[PLACEHOLDER]` paragraphs |
| Projects | `content/projects/NN.slug.md` | Frontmatter + Markdown body. `NN.` prefix sets the order; the slug becomes `/projects/slug` |
| Work history | `content/experience/NN.company.yml` | Sorted newest first by `start`. Omit `end` for a current role |
| Education | `content/education/NN.school.yml` | |
| Skills | `content/skills.yml` | Groups render as `name: item, item` |
| CV download | `public/cv/anastasios-fortis-cv.pdf` | Replace the placeholder PDF |
| Social preview image | `public/og.png` | 1200x630 |

Frontmatter and YAML fields are validated by the zod schemas in `shared/content-schemas.ts`.
A typo in a field name or a bad date format shows up as an error in `pnpm dev`.

### Project frontmatter

```yaml
title: Project name
description: One sentence shown in listings and as the meta description.
date: "2024-03"          # YYYY or YYYY-MM, quoted
featured: true           # shows on the home page (first three, in file order)
status: active           # active | wip | archived
tech: [kotlin, android]
repo: https://github.com/you/repo   # optional
url: https://example.com            # optional live link
image: /images/project.png          # optional og:image, under public/
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel, add a new project and import the repo. The Nuxt preset is detected automatically
   and the build command is `pnpm build`.
3. Set the environment variable `NUXT_PUBLIC_SITE_URL` to your production URL
   (for example `https://anastasiosfortis.com`). It is used for canonical and Open Graph URLs.
4. Use Node 22 in the project settings if it is not already the default.

Nuxt Content stores its index in SQLite. Locally it lives in `.data/`; on Vercel it is rebuilt
into `/tmp` on each cold start, which is fast for a site this size. `better-sqlite3` is a
native module, so `package.json` allows its build script under `pnpm.onlyBuiltDependencies`.
