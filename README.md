# Curriculum Vitae

A personal CV site — education with an attachable thesis, and a projects tab.
React + TypeScript + Material UI, built with Vite.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000/curriculum-vitae-web/
npm run build    # production build into dist/
```

## Adding your content

All content lives in `src/data/`. You never need to touch a component.

| What you want to add | Where |
| --- | --- |
| Name, role, bio, email, links | `src/data/profile.ts` |
| A degree | `src/data/education.ts` |
| A skill or tool | `src/data/skills.ts` |
| Your thesis | the `thesis` field on a degree in `src/data/education.ts` |
| A project | `src/data/projects.ts` |

**Your thesis.** Fill in the `thesis` field on the relevant degree. The
attachment block appears automatically; degrees without one show nothing. To
link the PDF, put the file in `public/` and set `pdfUrl: '/your-thesis.pdf'`.

**A skill.** Drop a string into the right group's `items` in `skills.ts`. To
make one stand out, use the object form instead: `{ name: 'Go', primary: true }`
— it renders with a brass-tinted border. Add a group by copying one object;
groups render in the order they are listed.

**A project.** Copy one object in `projects.ts`, give it a unique `id`, and edit
the fields. Snapshots go in `public/projects/`, referenced as
`/projects/your-file.png`. Any number of images works — a selector appears on
the image when there is more than one. `githubUrl`, `liveUrl`, `role`, and
`year` are all optional.

`src/types.ts` documents every available field.

## Design

Six colour tokens in `src/theme.ts` drive the whole page — change them there to
reskin it. Type is Fraunces (display), Inter Tight (body), JetBrains Mono
(dates, tags, labels).

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`. Two things to check first:

1. **Repo name.** `base` in `vite.config.ts` is `/curriculum-vitae-web/` and
   must match your repository name.
2. **Pages source.** In the repo settings, set Pages → Build and deployment →
   Source to **GitHub Actions**.

## Screenshots

`node screenshot.mjs <url> [label] [--width=1440] [--height=1000] [--full]`
saves to `temporary screenshots/`, auto-incremented.
