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
  proxy.ts                Gates every route behind a valid session cookie
  app/
    layout.tsx          Root layout, SEO metadata, dark mode init script, reads session
    page.tsx            Homepage — assembles all sections
    login/               Sign-in page
    unauthorized/         Shown when a Google account isn't on the allowlist
    api/auth/            signin / callback / signout routes (Google OAuth)
    projects/[slug]/     Dynamic project case-study page
  components/            Navbar, Hero, About, Experience, Projects,
                          ProjectCard, Education, Contact, Footer, FadeIn
  lib/
    session.ts            Session cookie signing/verification (jose)
    google-auth.ts        Google OAuth URL building + code exchange
    allowlist.ts           Fetches the master viewer list from Google Sheets
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

## Restricted Access (Google Sign-In)

The entire site is gated behind Google sign-in (`src/proxy.ts`). Only emails
listed in a master Google Sheet can view the site. The sheet is fetched live
on every login and every request, so adding a new row grants access
immediately — no redeploy needed.

- **Master viewer list**: the Google Sheet at
  `https://docs.google.com/spreadsheets/d/<ALLOWLIST_SHEET_ID>/edit`, with
  two columns: `User Name` and `Email`. It must be shared as "Anyone with the
  link can view" so the app can read it via CSV export. Add a row to invite
  a new viewer.
- The signed-in viewer's name (from the sheet, not their Google profile) is
  shown in the navbar, with a "Sign out" link.

### Required environment variables

| Variable | Description |
| --- | --- |
| `AUTH_SECRET` | Random secret used to sign session cookies. Generate with `openssl rand -base64 32`. |
| `GOOGLE_CLIENT_ID` | OAuth Client ID from Google Cloud Console. |
| `GOOGLE_CLIENT_SECRET` | OAuth Client Secret from Google Cloud Console. |
| `ALLOWLIST_SHEET_ID` | Optional. Overrides the default Google Sheet ID used as the viewer allowlist (see `src/lib/allowlist.ts`). |

Set these in `.env.local` for local development (already gitignored) and in
your Vercel project's Environment Variables for production.

### Setting up the Google OAuth Client

1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and
   create a project (or use an existing one).
2. Go to **APIs & Services → OAuth consent screen** and configure it
   (External user type is fine; you don't need to publish/verify the app
   since only a small allowlisted group will sign in — just add your own
   Google account as a test user if the app is left in "Testing" mode).
3. Go to **APIs & Services → Credentials → Create Credentials → OAuth client
   ID**, application type **Web application**.
4. Under **Authorized redirect URIs**, add one entry per environment you use:
   - `http://localhost:3000/api/auth/callback` (local dev)
   - `https://<your-vercel-domain>/api/auth/callback` (production)
5. Save, then copy the generated **Client ID** and **Client Secret** into
   `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`.

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra config needed.
4. Add `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET` under
   Project Settings → Environment Variables (see above).
5. (Optional) Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` if you want a functional
   contact form.
6. Deploy, then add the production redirect URI to the Google OAuth client
   (step 4 above) using your real Vercel domain.

Or via CLI:

```bash
npm install -g vercel
vercel
```

## Build

```bash
npm run build
```
