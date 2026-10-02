# Naresh Palem — Data Analyst & Power BI Portfolio

A modern, production-ready portfolio website for a **Data Analyst & Power BI Developer** with 4+ years of experience.

Dark enterprise design, animated scroll sections, skills with proficiency bars, an experience timeline, two project case studies, and a mailto-based contact form. Deploys to **Render** as a static site — no server, no database.

---

## Stack

| Layer | Tech |
|---|---|
| Build | Vite 5 |
| Styling | Tailwind CSS 3 (custom `azure` / `mint` theme) + glassmorphism |
| Animations | AOS (scroll reveal), Typed.js (rotating job titles), vanilla canvas particles |
| Icons | Lucide (tree-shaken, explicit registry) |
| Hosting | Render Static Site (Docker + Nginx also included) |

---

## Project structure

```text
.
├── render.yaml                  # Render blueprint (static site)
├── .gitignore
├── README.md
└── frontend-app/
    ├── .env.example             # copy to .env — all personal data lives here
    ├── Dockerfile               # optional: Node build → Nginx runtime
    ├── nginx.conf
    ├── index.html               # SEO / OG / JSON-LD defaults
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js       # colour palette, fonts, keyframes
    ├── vite.config.js
    ├── public/
    │   ├── favicon.svg
    │   ├── site.webmanifest
    │   ├── robots.txt
    │   ├── sitemap.xml
    │   └── images/
    │       ├── naresh.jpg            # hero portrait
    │       ├── naresh-icon.png       # circular avatar (navbar + footer)
    │       ├── naresh-square.jpg     # Open Graph share image
    │       ├── project-retail.svg        # project 1 mockup
    │       └── project-manufacturing.svg # project 2 mockup
    └── src/
        ├── main.js              # entry point: renders every section
        ├── css/style.css        # base + component classes
        ├── data/                # ← EDIT YOUR CONTENT HERE
        │   ├── profile.js       # name, title, contact, hero copy, KPIs
        │   ├── skills.js        # 6 skill groups with % levels
        │   ├── experience.js    # work timeline + "open to work" card
        │   ├── projects.js      # 2 project case studies
        │   ├── education.js     # degree + language proficiency
        │   ├── interests.js     # interest cards
        │   └── social.js        # email / phone / WhatsApp / socials
        ├── js/
        │   ├── icons.js         # Lucide icon registry (add icons here)
        │   ├── theme.js         # dark / light toggle
        │   ├── seo.js           # syncs meta + JSON-LD from profile
        │   ├── particles.js     # canvas background
        │   └── interactions.js  # scroll progress, nav, bars, form
        └── sections/            # one module per section of the page
            ├── navbar.js  hero.js  about.js  skills.js
            ├── experience.js  projects.js  education.js
            ├── interests.js  contact.js  footer.js
```

---

## Run locally

```bash
cd frontend-app
npm install
npm run dev        # http://localhost:5173
```

Production build + local preview:

```bash
npm run build      # outputs to frontend-app/dist
npm run preview    # http://localhost:4173
```

> **Windows / PowerShell note:** if `npm` is blocked by your execution policy, use `npm.cmd` instead of `npm`.

---

## Editing your content

**Almost everything lives in `frontend-app/src/data/`.** You should never need to touch the section modules.

| Want to change | Edit |
|---|---|
| Name, job title, email, phone, tagline, KPI cards | `src/data/profile.js` |
| Skill names and proficiency % | `src/data/skills.js` |
| Job history | `src/data/experience.js` |
| Project case studies | `src/data/projects.js` |
| Degree / languages | `src/data/education.js` |
| Interest cards | `src/data/interests.js` |
| Social links | `src/data/social.js` |
| Colours | `tailwind.config.js` + `.env` `VITE_THEME_*` |

### ⚠️ Placeholder content to replace before you go live

Three data files contain **invented content** written so the layout reads properly. Replace them with your real details:

1. **`src/data/experience.js`** — the three employers (`Cognit Analytics Solutions`, `Bluepeak Analytics`, `Southern Tech Solutions`) are placeholders. Swap in your real companies, titles and dates.
2. **`src/data/projects.js`** — both clients (`Sundar Retail Chain`, `Vertex Manufacturing Ltd`) are fictional, and the metrics are illustrative. Replace with your real projects and numbers.
3. **`src/data/interests.js`** — the interests section on your resume was empty, so these are plausible placeholders.
4. **`src/data/social.js`** — the LinkedIn / GitHub / Facebook URLs are placeholders. Set real ones in `.env`.

---

## Environment variables

Copy the example and edit:

```bash
cd frontend-app
cp .env.example .env      # Windows PowerShell:  Copy-Item .env.example .env
```

`.env` is git-ignored. Every variable must start with `VITE_` for Vite to expose it to the browser.

---

## Deploy to Render

### Option A — Blueprint (fastest, uses `render.yaml`)

1. Push this repo to GitHub.
2. Render dashboard → **New** → **Blueprint**.
3. Select your repo (`Nareshpalem1644/Naresh_portfolio`).
4. Render reads `render.yaml`, creates a Static Site, builds and deploys.
5. Your site appears at `https://naresh-portfolio.onrender.com`.

### Option B — Manual Static Site

**New → Static Site**, then:

| Field | Value |
|---|---|
| Name | `naresh-portfolio` |
| Repository | your repo |
| **Root Directory** | `frontend-app` |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `dist` |

### Option C — Docker

A `Dockerfile` and `nginx.conf` are included. Use **New → Web Service**, set **Root Directory** to `frontend-app` and Render will build with Docker automatically.

---

## Live site

**https://naresh-portfolio-pm4f.onrender.com**

Deployed from `main` as a Render **Web Service** (Docker + nginx). Any push to `main`
triggers an automatic rebuild and redeploy (~1m20s).

Render service settings currently in use:

| Field | Value |
|---|---|
| Runtime | Docker (`frontend-app/Dockerfile`) |
| Root Directory | `frontend-app` |
| Dockerfile Path | *(default — resolves to `frontend-app/Dockerfile`)* |
| Branch | `main` |
| Instance Type | **Free** |

> **Free tier caveat:** Render's free Web Service instances spin down after ~15 minutes
> of inactivity, so the first visitor after a quiet period waits ~30-60 seconds while
> the container restarts. If that matters, either attach a custom domain, or go back to
> a Render **Static Site** (*New → Static Site*, root dir `frontend-app`, build
> `npm ci && npm run build`, publish `dist`) — static sites never sleep. See
> `render.yaml` for the Static Site Blueprint.

### About the `-pm4f` suffix

Render appends a random 4-character suffix to the hostname of every newly created
service, so a bare `naresh-portfolio.onrender.com` cannot be claimed through the
dashboard. For a clean address you need a **custom domain**
(*Settings → Custom Domains*), e.g. `nareshpalem.dev`, then update the canonical URL
as described below.

---

## After your first deploy

1. **Domain is already set.** The canonical URL, Open Graph tags, `robots.txt` and
   `sitemap.xml` all point at the Render URL. If you later attach a custom domain,
   update `VITE_WEBSITE` (Render → *Environment*) **and** the same URL in `index.html`,
   `public/robots.txt` and `public/sitemap.xml`, then redeploy.

2. **Replace placeholder content** (see the warning box above).

3. **Swap the photos.** Drop your files into `frontend-app/public/images/` keeping the same names, or update the `VITE_PORTRAIT` / `VITE_PORTRAIT_ICON` variables.

---

## Contact form

The form has no backend — it opens the visitor's email client with a prefilled message to `VITE_EMAIL`. Nothing is sent to a server, which keeps the site fully static and free. Swap in a service like Formspree or Web3Forms if you'd rather collect submissions.

---

## Quality checks

Last verified locally:

- `npm run build` — clean, no errors
- Browser console — **no errors or warnings**
- Lighthouse — **Accessibility 100 · Best Practices 100 · SEO 100**
- Bundle — ~8.9 kB CSS (gzip) + ~27 kB JS (gzip)

---

© Naresh Palem