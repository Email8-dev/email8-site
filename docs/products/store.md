---
sidebar_position: 3
---

# Email8:Store — the mail data core

The mail plane's data core: mailboxes, messages, folders, contacts,
calendars (the `email8` schema), plus the JMAP API — the
authenticated read/write surface every other mail service composes
against.

## Use cases

- **One data core** — MTA delivers into it; Access serves it;
  Webmail reads it through JMAP — never direct table access between
  services.
- **JMAP API** — the modern, batched mail protocol: pushes, pulls,
  and state tokens — the same surface Webmail and third-party
  clients consume.
- **Collaboration data** — contacts and calendars live beside mail
  in the same schema, served over CalDAV/CardDAV through Access.
- **Tenant isolation** — every mailbox row FORCE-RLS'd on `env_id`;
  a mailbox leak is a database-level impossibility, not an
  application convention.

## Deep dive

[Store reference](/docs/reference/store/) — harvested from
`Email8-dev/email8-store`.