---
title: "Email8:Mta - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Email8-dev/email8-mta/edit/main/docs/openapi.json
---
Sentin8 Email8:Mta - SMTP/LMTP transfer engine, queue, DKIM, reports.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**2 endpoints**.

## email8-mta

### `POST /v1/admin/{page}`

`POST /v1/admin/&#123;page&#125;` - data endpoints.

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `page` | path | yes | string |
| `target_env_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Page data | - |
| 400 | Missing target_env_id | - |
| 403 | Missing email8 admin scope | - |
| 404 | Unknown page | - |

### `POST /v1/internal/submit`

`POST /v1/internal/submit` - the JMAP/Store submit path.

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | string | yes |  |
| `blob_hash` | string | yes |  |
| `env_id` | string | yes |  |
| `hold_until` | string,null | no | Delayed send (`sendAt`). |
| `idempotency_key` | string,null | no |  |
| `recipients` | string[] | yes |  |
| `return_path` | string | yes |  |
| `size` | integer | yes |  |
| `source` | string | yes |  |
| `user_sub` | string | yes | Sentin8:Auth user `sub` - re-verified by Mta from claims. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Queued | `SubmitResponse` |
| 401 | Token verification failed | - |
| 403 | Missing `email8:submission:send` scope or env mismatch | - |
| 404 | Blob not found in Storage | - |

