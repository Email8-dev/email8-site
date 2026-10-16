---
sidebar_position: 4
---

# Email8:Access — mailbox protocol services

The mailbox access protocols: IMAP (with full CAPABILITY handling),
POP3, ManageSieve, and the CalDAV/CardDAV/WebDAV collaboration
endpoints — every protocol reads mail data through Store's
authenticated APIs.

## Use cases

- **Standard clients** — Thunderbird, Apple Mail, Outlook — connect
  over IMAPS/POP3S through Gate; authentication is per-user through
  the platform's identity discipline.
- **Sieve filtering** — users author vacation replies and filter
  rules over ManageSieve; scripts apply deterministically in the
  delivery path.
- **Calendar & contacts sync** — CalDAV/CardDAV serve the same
  collaboration data Webmail shows over JMAP — one truth, two
  protocol surfaces.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/access/) — the maintainer's README in the consolidated reference section.

