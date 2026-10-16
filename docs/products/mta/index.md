---
sidebar_position: 2
---

# Email8:Mta — SMTP/LMTP transfer engine

The mail transfer engine: SMTP/LMTP protocol handling, the durable
delivery queue (message + recipient state machine with scheduled
retries), DKIM signing, and DMARC/TLS-RPT report generation.

## Use cases

- **Inbound/outbound transfer** — SMTP sessions terminate at the
  MTA (via Gate for the well-known ports); LMTP hands local delivery
  to Store.
- **Durable queue** — every message + recipient pair carries its own
  state machine; failed deliveries retry on schedule until
  terminal; nothing silently drops.
- **DKIM signing** — every outbound message signs with the domain's
  key (keys are secret references); alignment is verifiable.
- **DMARC & TLS-RPT** — aggregate reports generate on the declared
  schedule for the domain's senders and receivers.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/mta/) — the maintainer's README in the consolidated reference section.

