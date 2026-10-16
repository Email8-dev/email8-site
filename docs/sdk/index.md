---
sidebar_position: 1
---

# email8 Rust SDK

The shared vertical plane: IMAP/SMTP protocol handling, ical
parsing, the mail event contracts, and typed clients - consumed by
every email8 service and by external integrators as a pinned git
tag.

```rust
use email8_sdk::imap::codec;
use email8_sdk::events::MessageDelivered;
```

## What's in the plane

| Import path | Role |
|---|---|
| `email8_sdk::imap` | IMAP protocol codec and parsing |
| `email8_sdk::smtp` | SMTP/LMTP protocol codec |
| `email8_sdk::ical` | calendar (iCalendar) parsing |
| `email8_sdk::events` | the mail-plane event contracts |
| `email8_sdk::clients` | typed clients over the service APIs |

## Why a shared plane

Every email8 service links the same protocol codecs - a message
received by MTA, stored by Store, served by Access over IMAP, and
shown by Webmail over JMAP carries byte-identical structure end to
end. The SDK plane is the single source of that truth (SDD's
shared-plane linkage boundary keeps it a `{vertical}-sdk`, not
dissolved per-service crates).

## Deep dive

[email8-sdk reference](/docs/reference/sdk/) - harvested from
`Email8-dev/email8-sdk`.