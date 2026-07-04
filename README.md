# Chin Hei Wu — Portfolio

Personal portfolio site for Chin Hei Wu, Mechanical Design Engineer. Built with
Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for scroll/hover animations
- `next/image` for optimized images

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

Navigation is a persistent left sidebar (top bar on mobile) with one page per
section — there's no single scrolling homepage.

```
src/
  app/
    layout.tsx          Root layout, SEO metadata, dark mode init script
    page.tsx            Homepage — Hero only
    about/               About page
    experience/           Experience timeline page
    projects/             Projects grid page
    projects/[slug]/     Dynamic project case-study page
    education/            Education page
    contact/              Contact page
    viewers/             Public page listing names from the master Google Sheet
  components/            Sidebar, Hero, About, Experience, Projects,
                          ProjectCard, Education, Contact, Footer, FadeIn
  lib/
    allowlist.ts           Fetches the viewer list from Google Sheets (for /viewers)
  data/
    projects.ts          Project content — edit this to add/update case studies
    experience.ts         Work experience timeline content
    education.ts          Education + skills content
public/
  images/projects/[project-slug]/   Placeholder images per project
```

## Updating Content

- **Projects**: edit `src/data/projects.ts`. Each project has `insight`,
  `objective`, `keyFeatures`, `processImages`, `prototypeImages`, `outcome`,
  and an optional `youtubeIds` array for embedded 3D animations.
- **Experience / Education**: edit `src/data/experience.ts` and
  `src/data/education.ts`.
- **Images**: replace the placeholder SVGs under `public/images/projects/**`
  with real photos/renders (each placeholder file's on-image caption shows
  its exact expected path). Recommended hero image size is 1600x1200 (4:3).
- **Social links / contact info**: update `src/components/Footer.tsx` and
  `src/components/Contact.tsx`.
- **OG image**: replace `public/images/og-image.svg` with a real 1200x630
  image and update the reference in `src/app/layout.tsx`.

## Contact Form

The contact form falls back to a `mailto:` link by default. To make it submit
directly (e.g. via [Formspree](https://formspree.io)):

1. Create a Formspree form and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Set the environment variable `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to that URL,
   locally in `.env.local` and in your Vercel project settings.

## Viewers Page

`/viewers` (linked in the footer) publicly lists the names from a master
Google Sheet, fetched live on every request — add a row to the sheet and it
shows up immediately, no redeploy needed. Only names are shown, not emails.

- **Master viewer list**: the Google Sheet at
  `https://docs.google.com/spreadsheets/d/<ALLOWLIST_SHEET_ID>/edit`, with
  two columns: `User Name` and `Email`. It must be shared as "Anyone with the
  link can view" so the app can read it via CSV export.
- Override which sheet is used with the optional `ALLOWLIST_SHEET_ID`
  environment variable (see `src/lib/allowlist.ts`).

> Note: this site previously had a Google Sign-In gate restricting the whole
> site to allowlisted viewers. That was removed — the site is fully public
> again, and `/viewers` is just an informational page, not an access control.

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra config needed.
4. (Optional) Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` if you want a functional
   contact form.
5. Deploy.

Or via CLI:

```bash
npm install -g vercel
vercel
```

## Build

```bash
npm run build
```
