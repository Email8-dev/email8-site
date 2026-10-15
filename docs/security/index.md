---
sidebar_position: 1
---

# Security

Email8 inherits the [Sentin8 security model](https://sentin8.dev/docs/security)
by construction — every service runs the platform's 8-step
authorization pipeline, connects to PostgreSQL through
certificate-only identity, and stores every table behind FORCE RLS
on `env_id`.

## The vertical's own invariants

1. **One data core** — Store owns mailboxes, messages, folders,
   contacts, and calendars; MTA, Access, and Webmail compose through
   its authenticated APIs, never raw tables.
2. **Signed outbound** — the MTA DKIM-signs every outbound message
   (keys as secret references) and generates DMARC/TLS-RPT reports
   — deliverability and domain alignment are built in.
3. **TLS on every port** — Gate terminates the well-known mail ports
   with the platform's post-quantum certificates; no plaintext
   listener exists.
4. **Authenticated access on every protocol** — IMAP, POP3, Sieve,
   CalDAV, and JMAP all authenticate per-user; there is no
   unauthenticated read path to a mailbox.
5. **Durable delivery** — the queue's per-recipient state machine
   retries until terminal; an unauditable drop is an action that
   never happened.

Read the platform's five pillars at
[sentin8.dev/docs/security](https://sentin8.dev/docs/security).