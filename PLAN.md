# Portfolio Site Plan

## Site
- A static Jekyll GitHub user site at `leekantowski.github.io`, published from `main` and the repository root (`baseurl: ""`).
- Root-level Jekyll structure: Markdown pages, reusable layouts/includes, CSS and site assets; no separate app or build framework.
- Pages: Home, About, Work Experience, and Contact, with shared navigation and footer.

## Content
- Draft a concise first-person introduction from the supplied résumé, then present education, roles, responsibilities, and accomplishments using only the details and metrics supplied.
- Organize education and experience in a clear career timeline. Include the supplied volunteer work and interests where they fit.
- Link to the supplied LinkedIn profile and New York Times feature without fetching personal information from either URL.
- Publish `lee.kantowski@berkeley.edu` as a `mailto:` link. Omit the résumé phone number by default.

## Design
- Clean, professional, McKinsey-inspired visual direction with restrained colors, readable typography, a single-column responsive layout, and a light/dark theme toggle.
- Use the references for inspiration: a clear timeline and polished personality, while avoiding the book hover feature and unnecessary complexity.
- Use semantic HTML, accessible contrast, and minimal JavaScript.

## Technical and verification
- Add GitHub Pages-compatible Jekyll configuration, SEO tags, sitemap, favicon, and a README covering content updates, local preview, and Lighthouse.
- Keep all website files directly in the project root; do not add a backend, database, contact form backend, trackers, or unrelated framework.
- Verify the root structure and GitHub Pages build path, check navigation and layouts at 375px and 1280px, and run Lighthouse if the available environment supports it.

## Assumptions
- The GitHub username is `leekantowski` (without the `@` used in the answer).
- The public email and supplied profile links are intentional; the phone number is not included unless requested.
- The About copy will be newly drafted from supplied facts, not fetched or embellished.
