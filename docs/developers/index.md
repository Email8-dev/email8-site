---
sidebar_position: 1
---

# Developers — building on email8

## The single-repo story

Clone any email8 service and build — the platform SDK and the
email8 SDK arrive as pinned git dependencies; committed `.sqlx`
caches mean no live database is needed to compile:

```bash
git clone https://github.com/Email8-dev/email8-mta.git
cd email8-mta
cargo build
cargo test     # offline
```

## The vertical lifecycle

```bash
make infra-up        # platform TLS-only PG 18 + Valkey
sentin8-cli db bootstrap
vertical init        # creates the email8 database + schemas
vertical enroll      # registers services, scopes, admin UIs, triggers
make start           # captain spawns the fleet
```

No migration code exists — greenfield: schema changes rewrite the
init SQL and re-run `vertical init`.

## Integration surface

- **Rust**: the `email8-sdk` shared plane (IMAP/SMTP/ical protocols,
  event contracts) — see the [SDK page](/docs/sdk/)
- **JMAP clients**: the authenticated API on Store — the modern
  client surface
- **Standard protocols**: IMAP/POP3/Sieve/CalDAV through Gate
- **Events**: `email8:{service}:{resource}:{operation}` over
  Sentin8:Bus

## Deep dive

Every service's full docs live in its [reference section](/docs/reference/) —
harvested from the public repositories at build time.