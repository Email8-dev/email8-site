---
sidebar_position: 1
---

# Samples

First calls against a running email8 deployment — through the BFF
proxy (JMAP/Webmail) and over the standard protocols.

## 1. Read a mailbox over JMAP (Webmail path)

```bash
curl -c jar.txt https://bff.{env}.{org}.example.com/v1/sign-in \
  -H 'content-type: application/json' \
  -d '{"email": "you@example.com", "password": "…"}'

curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/store/v1/jmap \
  -H 'content-type: application/json' \
  -d '{
    "using": ["urn:ietf:params:jmap:core", "urn:ietf:params:jmap:mail"],
    "methodCalls": [[
      "Email/query",
      { "filter": { "inMailbox": "<mailbox-id>" }, "limit": 20 },
      "c1"
    ]]
  }'
```

JMAP batches calls; the state token tracks what the client has
seen.

## 2. Send through submission

```bash
curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/mta/v1/send \
  -H 'content-type: application/json' \
  -d '{
    "from": "you@example.com",
    "to": ["them@example.net"],
    "subject": "Hello",
    "text": "Sent from a signed, DKIM-aligned domain.",
    "idempotency_key": "msg-001"
  }'
```

The MTA signs the outbound message with the domain's DKIM key (a
secret reference) and queues it — delivery state is queryable.

## 3. IMAP from a standard client

```
Host: imap.{env}.{org}.example.com   Port: 993 (IMAPS)
User: you@example.com                Auth: platform identity
```

Gate terminates TLS on 993, discovers the healthy Access instance,
and pipes the session — your client sees a standard IMAP server.

## 4. From Dart (the Webmail pattern)

```dart
final ctx = await fetchRuntimeContext();
final bff = Bff8ApiClient(origin: ctx.origin);

final mailbox = await bff.post('store', '/v1/jmap', body: jmapQuery);
```

## 5. From Rust (vertical consumer)

```rust
use email8_sdk::jmap::EmailQuery;

let messages = store_client
    .jmap_query(EmailQuery::inbox(mailbox_id, 20))
    .await?;
```

Protocol and event contracts come from the vertical's shared SDK
plane.