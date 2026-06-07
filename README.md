# John Campbell — Portfolio

An interactive portfolio for an Unreal Engine developer (simulations, VR training,
AI helpers, digital twins). Inspired by robin-noguier.com: a tilted 3D card deck
you navigate by scroll, drag, click, or arrow keys, with click-to-open case studies
and an About panel.

Built with **React + Vite + Framer Motion**. Hosted free on **GitHub Pages**.

---

## Run it locally

```bash
npm install      # first time only
npm run dev      # start dev server -> http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

---

## How to add / edit your work

**All your projects live in [`src/data/projects.js`](src/data/projects.js).**
Each project is one object in the array. Add, remove, or reorder them and the
carousel, the right-hand menu, and the case studies all update automatically.

### Adding your own images & videos

1. Drop the file into the **`public/media/`** folder
   (e.g. `public/media/aurora.mp4`, `public/media/aurora-shot1.jpg`).
2. Reference it in `projects.js` with a leading slash:

   ```js
   {
     id: 'aurora',
     title: 'Aurora',
     // ...
     image: '/media/aurora.jpg',          // still image on the card
     // or:
     video: '/media/aurora.mp4',          // looping video on the card
     poster: '/media/aurora-poster.jpg',  // shown before the video loads
     gallery: [                           // extra shots in the case study
       '/media/aurora-1.jpg',
       '/media/aurora-2.jpg',
     ],
   }
   ```

If you leave `image`/`video` out, a colored placeholder card is shown so the
layout always looks complete. Videos autoplay muted and loop, so keep them short
and compressed (an `.mp4`, ideally under ~10 MB each).

### Editing your bio & contact links

Open [`src/components/About.jsx`](src/components/About.jsx) and edit the `SKILLS`
and `LINKS` arrays and the bio paragraphs near the top.

### Changing colors / fonts

Design tokens (colors, fonts, the signature red) live at the top of
[`src/index.css`](src/index.css) under `:root`. Each project's `accent` color in
`projects.js` tints its card glow, title, and case-study header.

---

## Publishing to GitHub Pages

This repo is set up to **deploy automatically** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Every time you push to `main`, the site rebuilds and goes live.

### One-time setup

1. Create a GitHub repository named **`<your-username>.github.io`**
   (this exact name makes it your main site at `https://<your-username>.github.io`).
2. Push this project to it (see commands below).
3. On GitHub: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
4. Done. The first push triggers a build; after ~1–2 minutes your site is live.

### Pushing the code

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

After that, day-to-day publishing is just:

```bash
git add .
git commit -m "Add new project"
git push
```

> **Using a different repo name** (e.g. `portfolio`)? Then your site lives at
> `https://<username>.github.io/portfolio/`, and you must change `base` in
> [`vite.config.js`](vite.config.js) from `'/'` to `'/portfolio/'`.

### Custom domain (optional)

Add a file `public/CNAME` containing your domain (e.g. `johncampbell.dev`), point
your domain's DNS at GitHub Pages, and set the domain under Settings → Pages.

---

## Controls

- **Scroll wheel / drag / arrow keys** — move between projects
- **Click a card or a menu item** — jump to that project
- **Click the centered card or "Open case study"** — open the full case study
- **Esc** — close any open panel
