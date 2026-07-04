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

```
src/
  app/
    layout.tsx          Root layout, SEO metadata, dark mode init script
    page.tsx            Homepage — assembles all sections
    projects/[slug]/     Dynamic project case-study page
  components/            Navbar, Hero, About, Experience, Projects,
                          ProjectCard, Education, Contact, Footer, FadeIn
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

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra config needed.
4. (Optional) Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` under Project Settings →
   Environment Variables if you want a functional contact form.
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
# Portfolio
