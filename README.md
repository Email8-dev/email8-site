# README.md: Email8:Site — email8.dev

> The Email8 public website at [email8.dev](https://email8.dev): every
> product, app, and SDK of the vertical, with its domain invariants
> and inherited security posture front and center. Built on
> `@sentin8/site-engine` (Docusaurus v3). Program design of record:
> `design/sentin8-websites-design.md` (WEB §4.5).

## 1. Summary

email8.dev is the Email8 vertical's product site: a landing page
detailing all four products and one apps, per-product
pages with use cases and API surfaces, the vertical's security
invariants, developer lifecycle, samples, and a **Reference** section
harvested at build time from each unit repo's own docs — the
repositories stay the source of truth.

## 2. Motivation

A mail platform's guarantees matter: one data core, DKIM-signed outbound, TLS-only listeners, and authenticated access on every protocol. This site is that layer, harvested so marketing never drifts from the code.

## 3. Architecture

```mermaid
graph TD
    SJ["site.json"] --> BUILD["docusaurus build"]
    ENGINE["@sentin8/site-engine (pinned)"] --> BUILD
    DOCS["docs/** (hand-authored)"] --> BUILD
    REPOS["Email8-dev repos (public)"] -- "harvest.mjs" --> REF["docs/reference/ (gitignored)"]
    REF --> BUILD
    BUILD --> PAGES["GitHub Pages (email8.dev)"]
```

## 4. Content map

| Route | Content |
|---|---|
| `/` | Hero · product cards · apps · SDK · invariant pillars · platform showcase |
| `/docs/` | Vertical overview |
| `/docs/products/{unit}` | Per product: use cases · API surface |
| `/docs/apps/{app}` | Per app: purpose, what it demonstrates |
| `/docs/security/` | Vertical invariants + inherited platform pillars |
| `/docs/developers/` · `/docs/samples/` | Dev story · first calls |
| `/docs/reference/{unit}/` | Harvested README/DESIGN/BUSINESS per unit |

## 5. Development

```bash
npm install
npm run harvest   # renders docs/reference/ from sibling repos (offline)
npm start
npm run build     # fails on broken links
```

Adding a unit: edit `site.json` → add `docs/products/{slug}.md` →
the harvester picks up the repo trio automatically.

## 6. Deployment

Push to `main` → `ci.yml` calls `Sentin8/sentin8-ci site.yml@ci-v1` →
harvest → build → GitHub Pages. Weekly scheduled rebuild refreshes
harvested content. Custom domain via `static/CNAME` (operator DNS
step: WEB-10).

---

**Design attribution:** Email8:Site and its underlying concepts were designed by Hamid Jahanzad <Hamid@Jahanzad.com>.
