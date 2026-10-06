# Lee Kantowski — Portfolio

A static Jekyll site for `leekantowski.github.io`. The pages are written in Markdown with YAML front matter, and the site's reusable structure and visual styles live in Jekyll layouts, includes, and CSS.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, and `contact.md` to update page copy.
- Edit `_data/navigation.yml` to change the shared navigation.
- Edit `assets/css/site.css` to adjust visual styles.
- Edit `assets/js/theme.js` to adjust the light/dark theme toggle.
- Update `_config.yml` if the site's title, description, or GitHub Pages address changes.

## Preview locally

The `github-pages` gem in the `Gemfile` matches GitHub Pages' Jekyll environment.

1. Install Ruby and Bundler.
2. Install the site's dependencies with `bundle install`.
3. Start the local preview with `bundle exec jekyll serve`.
4. Open `http://localhost:4000` in a browser.

The site uses an empty `baseurl`, as required for a GitHub user site.

## Publish with GitHub Pages

The intended repository is named `leekantowski.github.io`. Keep the Jekyll files at the repository root. In the repository's GitHub Pages settings, choose **Deploy from a branch**, select `main`, and choose `/(root)`. GitHub Pages then builds the site with Jekyll; no separate application or manual build output is needed.

## Lighthouse

Run Lighthouse in Chrome DevTools against the local preview or published site. Test both mobile and desktop, and review Performance, Accessibility, Best Practices, and SEO. The target is 90 or higher in each category; actual scores can vary with browser and network conditions.

## Verification

The GitHub Pages-compatible Jekyll build completed successfully. All four pages were checked at 375px and 1280px widths with no horizontal overflow, working navigation, and one primary heading per page. The theme toggle was checked for switching and persistence.

Local mobile Lighthouse results:

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Home | 100 | 100 | 100 | 100 |
| About | 100 | 100 | 100 | 100 |
| Work Experience | 100 | 100 | 100 | 100 |
| Contact | 100 | 100 | 100 | 100 |

These results are from a local static preview, not a published GitHub Pages deployment. The repository is on `main`, and all website source files are at its root.
