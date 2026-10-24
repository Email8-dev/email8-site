# Email8:Site - Business Requirements & Functionality

> Audience: product owners, business analysts, and anyone evaluating what
> Email8:Site **does for the business**. For architecture read `README.md`;
> for wire-level detail read `DESIGN.md`.

## 1. Business Purpose

Email8:Site is the **public face of the Email product line**
(email8.dev). It delivers:

- **A marketable story** - what the product is (email on Sentin8), why
  it is trustworthy (TLS everywhere, DKIM-signed outbound, shared data
  core), and what the pillars are - written for evaluators, not
  engineers.
- **Self-serve documentation** - product guides, security notes, SDK
  docs, developer resources, and samples for every unit of the
  vertical.
- **Always-truthful reference material** - API reference pages are
  generated from each service's OpenAPI spec at build time, so the
  documented API can never quietly drift from the shipped API.
- **Searchable content** - local search over the whole site.

## 2. Business Scope (What the Site Provides)

| # | Capability area | What the business gets |
|---|---|---|
| 1 | Landing story | Tagline, five pillar cards (one data core, signed outbound, full-protocol access, TLS on every port, JMAP), accent-branded theme |
| 2 | Product pages | Per-service overviews + security pages for Mta, Store, Access, Gate |
| 3 | App page | Webmail product page + security note |
| 4 | SDK page | Email8 Rust SDK overview and reference |
| 5 | Developer pages | Developers/getting-started content |
| 6 | Samples | Sample index |
| 7 | Security hub | Top-level security index |
| 8 | API reference | Generated OpenAPI docs per service (Mta/Store/Access/Gate) from harvested specs |
| 9 | Reference section | Harvested per-repo docs (README/overview/security) for each service, the SDK, and Webmail |
| 10 | Discovery | Local search, sidebar navigation, sitemap, translations scaffolding |

**What the site does NOT do (business boundary):**

| Out of scope | Owned by |
|---|---|
| Any mail functionality | The email8 services (the site is static content) |
| Service hosting or reverse proxy | The platform (the site deploys as its own static bundle) |
| OpenAPI authoring | The services' repos (`docs/openapi.json`); the site only mirrors them |
| Design-system implementation | The shared site engine (`@sentin8/site-engine`) |
| Docs content for other verticals | Those verticals' own sites |

## 3. Business Capabilities

### 3.1 Story-telling (marketing pillar content)

| Capability | Business rule |
|---|---|
| Truthful pillars | Pillar texts state guarantees that map 1:1 to shipped features (data-core separation, DKIM signing, protocol coverage, PQ TLS, JMAP) - no aspirational claims |
| Consistent branding | Accent color `#3E8FB0`, shared engine chrome - Email8 reads as part of the Sentin8 product family |
| Showcase credibility | Platforms like Sentin8 featured as the foundation |

### 3.2 Product & security documentation

| Capability | Business rule |
|---|---|
| Per-service product pages | One overview + one security page per unit (mta/store/access/gate); apps and SDK follow the same pattern |
| Security pages | Each unit's page states its trust posture (TLS, auth model, isolation) - a business-facing answer to "is this safe to depend on?" |
| Reference harvesting | Reference docs pulled from each repo at build time (`harvest`), so service docs and website stay in lockstep |

### 3.3 API reference automation

| Capability | Business rule |
|---|---|
| Spec harvest | `openapi/{mta,store,access,gate}-spec.json` copied from the sibling repositories' `docs/openapi.json` |
| Generated pages | `docusaurus-plugin-openapi-docs` renders per-endpoint pages (request schemas, status codes) for every service |
| Drift-proofing | Regenerating is part of `make build` - the site cannot ship yesterday's API |

### 3.4 Navigation & discovery

| Capability | Business rule |
|---|---|
| Sidebar generation | `makeSidebars()` derives navigation from `site.json` units/apps/sdks declarations |
| Search | Local search plugin indexes the full docs tree |
| Section taxonomy | `products/`, `apps/`, `sdk/`, `developers/`, `samples/`, `security/`, `reference/`, `api/` - a predictable browsing model |

## 4. Business Events (Outbound)

None - the site is a static content project. There are no emitted
platform events, no telemetry of its own, no backend.

| Channel | Content |
|---|---|
| Build outputs | Static Docusaurus bundle ready for any static hosting |
| Harvest inputs | `docs/openapi.json` from each sibling repo at build time |

**Inbound:** none.

## 5. Business Rules & Invariants

1. **Content mirrors shipped reality**: marketing pillars, product
   pages, and reference material describe implemented features only.
2. **API specs are harvested, never hand-edited**: `openapi/*.json`
   are build artifacts of the services' specs; editing them in the
   site is a defect.
3. **Declarative site shape**: `site.json` (vertical, org, domain,
   pillars, units, apps, sdks, showcase) is the single source that
   drives config + sidebars; page layouts come from the shared site
   engine.
4. **Every unit gets the full treatment**: a unit appearing in
   `site.json` needs product page(s), a reference folder, and (for
   services) an API section - partial coverage is a failed build
   story, not a permanent state.
5. **Brand consistency**: the site renders through the shared engine
   with only `site.json` deltas; custom theming forks are rejected
   defaults.

## 6. Target-User Roles & Use Cases

| Persona | What they do with Email8:Site |
|---|---|
| Prospects / evaluators | Read the pillars, product pages, and security story to decide on adoption |
| Developers integrating email8 | Follow product/SDK/developers pages; consult generated API reference |
| Existing operators | Look up endpoint semantics and security posture per service |
| Sales / marketing | Use the landing story and pillar content as the product narrative |
| Docs maintainers | Update `site.json` + docs md files; the engine and harvest do the rest |

## 7. KPIs / Success Criteria

| Category | Target |
|---|---|
| Truthfulness | Zero documented APIs that don't exist; zero shipped APIs missing from the reference |
| Freshness | Build-time harvest keeps reference pages ≤ one build behind the services |
| Discoverability | Local search covers all docs; sidebar reaches any page in ≤3 clicks |
| Brand coherence | Shared-engine chrome with Email8 accent - indistinguishable quality from sibling vertical sites |
| Maintainability | New units added by editing `site.json` + docs, not site code |

## 8. Dependencies & Reliance on Other Services

| Relied on | For |
|---|---|
| `@sentin8/site-engine` (pinned) | Site config factory, sidebars, chrome, harvest scripts |
| Sibling repos (`email8-mta/store/access/gate`) | `docs/openapi.json` specs harvested at build |
| Sibling repos' README/docs | Reference-section content |
| Docusaurus v3 (+ openapi-docs plugin, mermaid theme, local search) | Static site generation |
| Static hosting | Deployment of `build/` output |

## 9. Acceptance Criteria

1. `npm run build` produces a complete static site: landing, five
   pillars, per-unit products/security, apps, SDK, developers, samples,
   security index, reference tree, and generated API sections for all
   four services.
2. The harvested OpenAPI sections match the current service specs
   (re-harvest regenerates them without manual edits).
3. Navigation (`site.json`-driven sidebars) exposes every section;
   local search returns results across products and API pages.
4. Running the harvest (`npm run harvest`) updates reference + API
   inputs from the sibling repos without site-code changes.
5. The rendered site uses the shared engine chrome with the Email8
   accent (`#3E8FB0`) and the declared tagline.

## 10. Open Business Questions

- Hosting target and domain certificate handling for email8.dev when
  pushed to production.
- Blog/changelog section cadence (structure ready, content cadence is
  a business decision).
- Localization scope beyond the translation scaffolding.

---

**Architecture & Design:** email8:site and its underlying concepts were designed by [Hamid Jahanzad](https://www.linkedin.com/in/hamidjahanzad/).