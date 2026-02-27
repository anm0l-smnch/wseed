# WSEED Website — Project Memory

## What this is
A static HTML/CSS/JS website for the **WSEED** (World Sectoral Economy-Environment Database) research project. Hosted on **GitHub Pages** at the custom domain **wseed.world**.

---

## File structure
```
website/
├── index.html          ← About / homepage
├── research.html       ← Paper title, abstract, figure carousel, downloads
├── data.html           ← Dataset download, figures, appendix, citation
├── people.html         ← 5 team members with photos, bios, links
├── CNAME               ← Contains: wseed.world  (for GitHub Pages custom domain)
├── .gitignore
├── MEMORY.md           ← This file
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    ├── hero.png            ← Full-width banner (surface air temperature map)
    ├── chancel.jpg
    ├── mohren.jpg
    ├── odersky.jpeg
    ├── piketty.jpeg
    ├── somanchi.jpg
    ├── fig1.png – fig10.png   ← Paper figures for carousel
```

> **Note:** `app.html` was deliberately deleted. Remove any reference to it if it reappears.

---

## Pages summary

### index.html (About)
- Nav logo: **WSEED** (links to index.html)
- Hero section (`.hero`):
  - `.wseed-label` → "World Sectoral Economy-Environment Database (WSEED)" — bold, teal, serif, centered, `white-space: nowrap`, full-bleed centering via `width:100vw; left:50%; transform:translateX(-50%)`
  - `img/hero.png` — full-width, no cropping (`width:100%` only, no `max-height` or `object-fit`)
  - `.img-caption` → "Surface air temperature anomalies in 2024... [Source](https://climate.copernicus.eu/global-climate-highlights-2024): C3S / ECMWF."
- Three body paragraphs (justified):
  1. "A new global economic-environment dataset with historic data (1970–2025)..."
  2. "Developed by [linked names], WSEED collects and harmonizes..." (ends at "population.")
  3. "The WSEED database is accompanied by a research paper titled ["Prosperity Within Limits?..."](research.html)..." (paper title hyperlinked to research.html)
- `<hr>` then a small footer note linking to Data and Research pages

### research.html (Research)
- Paper title: *Prosperity Within Limits? Planetary Habitability, Global Convergence and Structural Transformation, 2026–2100*
- Authors: Lucas Chancel, Cornelia Mohren, Moritz Odersky, Thomas Piketty, Anmol Somanchi — 2026
- Abstract block (teal left-border box, justified)
- **Figure carousel** (`#figCarousel`): 10 slides — fig1.png through fig10.png in numerical order, auto-advances every 5s, pauses on hover, prev/next buttons, dot indicators, "Figure X / 10" counter
- Downloads: "Working Paper" (primary btn) + "Slides" (secondary btn) — both `href="#"` until URLs are ready

### data.html (Data)
- "Full WSEED Dataset" section — single white "Full dataset" button (`href="#"`)
- "Main Figures and Tables" section
- "Appendix Materials" section
- "Replication Package" section
- Citation box with paper full title
- **"Data Structure" section was deliberately deleted — do not re-add**

### people.html (People)
- `<main style="max-width: 900px;">` — intentionally wider than default 760px to fit Somanchi's long role text
- 5 people in order: Chancel, Mohren, Odersky, Piketty, Somanchi
- Photos: circular crop (`object-fit: cover`); Mohren and Somanchi have `style="object-position: top"` to avoid head-cropping
- All names hyperlinked (Odersky → ResearchGate; others → personal sites)
- Emails in obfuscated format: `name[at]domain[dot]ext`

---

## CSS key notes (css/style.css)
- `--accent: #1B7A8A` (teal)
- `--max-w: 760px` (main content width, except people.html which overrides to 900px)
- `p { text-align: justify }` — applied globally
- `.hero-img`: `width: 100%` only — **no** `max-height`, **no** `object-fit` (removing these was intentional to show full image without cropping)
- `.wseed-label`: serif, 1.9rem, bold, teal, `white-space: nowrap`, `width: 100vw`, centered via `left:50%; transform:translateX(-50%)`
- `.img-caption`: 0.78rem, muted colour, `margin-top: -28px`
- Carousel styles: `.carousel`, `.carousel-track`, `.carousel-slide`, `.carousel-btn`, `.carousel-footer`, `.carousel-dots`, `.carousel-dot`, `.carousel-counter`

---

## JS key notes (js/main.js)
Four self-contained IIFEs:
1. **Scroll progress bar** — `#progress-bar` width tracks scroll %
2. **Mobile nav toggle** — `.nav-toggle` / `.nav-links` hamburger menu
3. **Carousel** — reads slide/dot counts dynamically from DOM (no hardcoded totals), auto-advances every 5000ms, pauses on `mouseenter`, `#carouselCurrent` counter
4. **Active nav link** — highlights current page link by matching `location.pathname`

---

## People & links
| Name | Website | Email |
|------|---------|-------|
| Lucas Chancel | https://lucaschancel.com/en/ | lucas.chancel[at]sciencespo[dot]fr |
| Cornelia Mohren | https://sites.google.com/philosophy-economics.de/cornelia-mohren/home | cornelia.mohren[at]psemail[dot]eu |
| Moritz Odersky | https://www.researchgate.net/profile/Moritz_Odersky | moritz.odersky[at]psemail[dot]eu |
| Thomas Piketty | http://piketty.pse.ens.fr/en/ | thomas.piketty[at]ehess[dot]fr |
| Anmol Somanchi | https://sites.google.com/view/anmolsmnch | anmol.somanchi[at]psemail[dot]eu |

---

## Git & deployment
- Repo: **new GitHub repo** (not yet created/pushed as of last session)
- Custom domain: **wseed.world** — set via `CNAME` file (already in repo)
- DNS: needs A records pointed to GitHub Pages IPs (or CNAME to `<username>.github.io`)
- GitHub Pages: enable in repo Settings → Pages → deploy from `main` branch root

---

## Things still TODO
- [ ] Push to GitHub and create the repo
- [ ] Set up DNS for wseed.world
- [ ] Add real URLs to all download buttons (Working Paper, Slides, Full dataset, etc.)
- [ ] Add download links for Main Figures, Appendix, Replication Package on data.html
- [ ] Photos and bios are complete ✓

---

## Design reference
- Inspiration site: https://whce.world
- Style: clean, minimal academic, serif headings, teal accent, no frameworks
