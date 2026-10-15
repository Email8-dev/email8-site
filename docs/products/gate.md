---
sidebar_position: 5
---

# Email8:Gate — the TLS front door

The raw-TCP front door for the well-known mail ports (SMTP
submission 587, SMTPS 465, IMAPS 993, and the rest of the set):
Gate terminates the TLS/TCP listener set with the platform's
post-quantum certificates and discovers the healthy MTA/Access
instances at runtime.

## Use cases

- **One front door** — every mail port terminates here; Gate
  discovers the active MTA/Access instances from the runtime
  registry and pipes or proxies to them.
- **PQ-TLS everywhere** — the listener set carries the platform's
  X25519MLKEM768 + ML-DSA-65 certificates; a classical connection
  is refused, not negotiated.
- **Runtime routing** — instances scale and restart (Captain
  upgrades) without Gate reconfiguration — the registry keys are the
  source of truth.

## Deep dive

[Gate reference](/docs/reference/gate/) — harvested from
`Email8-dev/email8-gate`.