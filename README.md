# VexSort

Website for VexSort — an autonomous robotic arm that sorts VEX hardware using imitation learning.

Static site (HTML/CSS/JS), no build step, no dependencies. Repo: https://github.com/HenryW0225/AutoSort

## Files

| File | What it is |
|------|------------|
| `index.html` | Home — boot animation, hero, about, what-we-offer, world map |
| `team.html` | Team members |
| `sponsors.html` | Sponsors / backers |
| `timeline.html` | Project timeline (scroll-synced side images) |
| `contact.html` | Contact form + social links |
| `styles.css` | All styling |
| `app.js` | Shared interactions (nav, reveals, stats, tilt, etc.) |
| `map.js` | Interactive world map |
| `vexsort-logo.svg` | Logo (also used as the favicon) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Run locally

Don't just double-click `index.html` — the separate CSS/JS and page links need a server.
Open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit **http://localhost:8000**. Edit a file, save, refresh — no rebuild needed.

## Deploy as a GitHub Pages project site

This is a **project site**, so it won't touch any personal `username.github.io` site.

1. Push these files to the repo root.
2. Repo **Settings → Pages**.
3. **Source:** "Deploy from a branch", branch **main**, folder **/ (root)**, Save.
4. ~1 min later it's live at `https://<username>.github.io/<repo>/`.

## Connect a custom domain (after you buy one)

1. At your registrar's DNS settings:
   - Apex domain (`vexsort.com`): four **A records** → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (confirm current IPs in GitHub's docs).
   - `www`: a **CNAME** → `<username>.github.io`.
2. Repo **Settings → Pages → Custom domain**: enter your domain, Save.
3. Once the DNS check passes, tick **Enforce HTTPS**.

## To fill in later

- **Images**: placeholders are labeled in the page text (`PHOTO SLOT`, `LOGO SLOT`, `IMAGE — …`, and the `P0`–`P4` timeline panels). Replace the placeholder `<div>`s with `<img>` tags.
- **Contact form**: front-end only right now. Wire it to a free service like Formspree to actually receive messages.
- **Social links**: Instagram and Discord point to `#`; email and GitHub are set. Update the `href`s in `contact.html` and the footer.
- **Sponsors / team / map**: swap placeholder names and the map contact list (in `map.js`) for real ones.

## Notes

- Respects `prefers-reduced-motion`.
- Responsive down to mobile (nav collapses to a menu button).
- No tracking, no ads; only external dependency is Google Fonts.
