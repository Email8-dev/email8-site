---
sidebar_position: 1
---

# Webmail - the browser mail client

The browser mail experience: mail, calendar, and contacts over the
JMAP API through the BFF proxy - the flagship consumer of the
email8 services.

## What it demonstrates

- **JMAP-native** - the app drives Store's JMAP API (batched calls,
  state tokens) through the BFF; no IMAP stack in the browser.
- **Thin by design** - the session cookie is the user's only
  credential; every fetch is CSRF-guarded; branding derives from the
  runtime context.
- **Collaboration** - calendars and contacts render beside mail from
  the same data core the CalDAV/CardDAV endpoints serve.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/webmail/) - the maintainer's README in the consolidated reference section.

