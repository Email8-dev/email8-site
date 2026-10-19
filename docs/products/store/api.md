---
title: "Email8:Store - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Email8-dev/email8-store/edit/main/docs/openapi.json
---
Sentin8 Email8:Store - mail/collaboration data core + JMAP API.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**47 endpoints** across 3 groups.

## store

### `POST /jmap`

`POST /jmap` - the method-call batch.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | JMAP request/response batch (RFC 8620 §3.6) | - |
| 401 | Not authenticated | - |

### `GET /jmap/download/{account_id}/{blob_id}/{name}`

`GET /jmap/download/&#123;account_id&#125;/&#123;blob_hash&#125;/&#123;name&#125;` - blob download.

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `account_id` | path | yes | string |
| `blob_id` | path | yes | string |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The raw blob bytes | - |

### `GET /jmap/eventsource`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | JMAP EventSource SSE stream (push notifications) | - |

### `GET /jmap/session`

`GET /jmap/session` - the RFC 8620 session resource.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | JMAP session (capabilities + endpoint URLs) | - |
| 401 | Not authenticated | - |

### `POST /jmap/upload/{account_id}`

`POST /jmap/upload/&#123;account_id&#125;` - blob upload (RFC 9404).

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `account_id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 201 | Blob created | - |

### `GET /jmap/ws`

`GET /jmap/ws` - RFC 8887 JMAP over WebSocket. After the upgrade the server accepts JMAP `Request` frames as text messages and replies with `Response` frames; unsolicited `StateChange` pushes are emitted when the changelog advances. Auth is via the `access_token` query param (browsers cannot set headers on the upgrade request).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 101 | WebSocket upgrade (JMAP over WS) | - |

### `GET /v1/admin/{page}`

`GET /v1/admin/ui/&#123;page&#125;` - RFW definition for the requested page.

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `page` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | RFW page definition | - |
| 403 | Policy deny | - |
| 404 | Unknown page | - |

### `GET /v1/health`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Liveness (version, build) | - |

### `POST /v1/internal/acl/grant`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Granted | - |

### `POST /v1/internal/acl/revoke`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Revoked | - |

### `GET /v1/internal/acl/rights`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Effective rights | - |

### `POST /v1/internal/blob-quota`

`POST /v1/internal/blob-quota` - upload quota gate.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Quota verdict | - |

### `POST /v1/internal/changes`

`POST /v1/internal/changes` - changelog window (JMAP/IMAP sync).

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | State changes | - |

### `POST /v1/internal/email/keywords`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Keywords set | - |

### `POST /v1/internal/email/store`

`POST /v1/internal/email/store` - store the raw blob for an APPEND (IMAP/POP3 upload path): bytes → Storage, blob-hash returned.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Blob stored | - |

### `GET /v1/internal/email/{env_id}/{account_id}/{email_id}`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `env_id` | path | yes | string |
| `account_id` | path | yes | string |
| `email_id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The email | - |
| 404 | Unknown email | - |

### `POST /v1/internal/emails/copy`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Copied | - |

### `POST /v1/internal/emails/destroy`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Destroyed | - |

### `POST /v1/internal/ingest`

`POST /v1/internal/ingest` - local delivery filing.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Ingested | - |

### `POST /v1/internal/ingest/append`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Appended | - |

### `GET /v1/internal/mailbox/emails`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Emails in the mailbox | - |

### `GET /v1/internal/mailboxes`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Mailboxes | - |

### `POST /v1/internal/mailboxes`

`POST /v1/internal/mailboxes` - create a mailbox.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Mailbox created | - |

### `POST /v1/internal/resolve`

`POST /v1/internal/resolve` - RCPT resolution (sub-addressing, aliases, catch-all, group expansion).

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Resolved address | - |

### `POST /v1/internal/sieve/delete`

`POST /v1/internal/sieve/delete` - remove a script row.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Deleted | - |

### `POST /v1/internal/sieve/get`

`POST /v1/internal/sieve/get` - one script's source (from Storage).

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Script | - |

### `POST /v1/internal/sieve/list`

`POST /v1/internal/sieve/list` - the account's scripts + active flag.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Scripts | - |

### `POST /v1/internal/sieve/put`

`POST /v1/internal/sieve/put` - store a compiled script (blob → Storage, row upsert).

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Stored | - |

### `POST /v1/internal/sieve/rename`

`POST /v1/internal/sieve/rename` - rename a script.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Renamed | - |

### `POST /v1/internal/sieve/setactive`

`POST /v1/internal/sieve/setactive` - flip the active script (only one may be active; the row flips + the account pointer updates).

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Activated | - |

### `POST /v1/internal/submit`

`POST /v1/internal/submit` - enqueue a submission into the Mta queue. Store proxies to Mta (it owns the queue); the response is Mta's.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Submitted | - |


## policy

### `GET /v1/admin/attributes`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Principal attributes of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/attributes`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute stored | - |
| 400 | Invalid attribute definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/attributes`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy sets of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/disable`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets disabled | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/enforce`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to enforce mode | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/shadow`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to shadow mode | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The policy set | - |
| 403 | Caller lacks the admin scope | - |
| 404 | Unknown policy set name | - |

### `PUT /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set stored | - |
| 400 | Invalid policy set definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set deleted | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/{name}/test`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dry-run decision trace | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | ReBAC relations of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/relations`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation stored | - |
| 400 | Invalid relation definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/relations`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations/check`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `subject` | query | yes | string |
| `relation` | query | yes | string |
| `object` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The check verdict | - |
| 403 | Caller lacks the admin scope | - |


## email8-store

### `POST /v1/admin/{page}`

`POST /v1/admin/&#123;page&#125;` - data for the admin viewer pages.

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `page` | path | yes | string |
| `target_env_id` | query | no | string |
| `account_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Page data | - |
| 400 | Missing target_env_id | - |
| 403 | Missing email8 admin scope | - |
| 404 | Unknown page | - |

