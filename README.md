# VEXAutoSort

Website for VEXAutoSort, an autonomous robotic arm that sorts VEX hardware using imitation learning.

Static site (HTML/CSS/JS), no build step, no dependencies. Repo: https://github.com/HenryW0225/AutoSort

## Files

| File | What it is |
|------|------------|
| `index.html` | Home: boot animation, hero, about, what-we-offer, world map |
| `team.html` | Team members |
| `sponsors.html` | Sponsors and backers |
| `timeline.html` | Project timeline (scroll-synced side images) |
| `contact.html` | Contact form and social links |
| `styles.css` | All styling |
| `app.js` | Shared interactions (nav, reveals, stats, tilt, etc.) |
| `map.js` | Interactive world map |
| `vexsort-logo.svg` | Logo (also used as the favicon) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Run locally

Don't just double-click `index.html`. The separate CSS/JS and page links need a server.
Open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit **http://localhost:8000**. Edit a file, save, refresh. No rebuild needed.

## Deploy as a GitHub Pages project site

This is a **project site**, so it won't touch any personal `username.github.io` site.

1. Push these files to the repo root.
2. Repo **Settings → Pages**.
3. **Source:** "Deploy from a branch", branch **main**, folder **/ (root)**, Save.
4. About a minute later it's live at `https://<username>.github.io/<repo>/`.

## Connect the custom domain (vexautosort.com)

1. At your registrar's DNS settings:
   - Apex domain (`vexautosort.com`): four **A records** to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (confirm current IPs in GitHub's docs).
   - `www`: a **CNAME** to `<org-or-username>.github.io`.
2. Repo **Settings → Pages → Custom domain**: enter `vexautosort.com`, Save.
3. Once the DNS check passes, tick **Enforce HTTPS**.

## To fill in later

- **Images**: placeholders are labeled in the page text (`PHOTO SLOT`, `LOGO SLOT`, the "photo coming soon" panels, and the `P0`-`P4` timeline panels). Replace the placeholder `<div>`s with `<img>` tags.
- **Contact form**: opens the visitor's email app via `mailto:` to `team@vexautosort.com`. Set up email forwarding for that address (Squarespace domains support this), or swap in a service like Formspree to collect messages on the site.
- **Sponsors and team**: confirm the sponsor names on `sponsors.html` and the map contact list in `map.js` are accurate before publishing.

## Notes

- Respects `prefers-reduced-motion`.
- Responsive down to mobile (nav collapses to a menu button).
- No tracking, no ads. The only external dependency is Google Fonts.
