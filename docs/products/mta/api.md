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

**19 endpoints** across 4 groups.

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


## admin-ui

### `GET /v1/admin/{page}`

`GET /v1/admin/ui/&#123;page&#125;` - RFW definitions.

Gate: `email8:admin:queue`

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


## meta

### `GET /v1/health`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Liveness (version, build) | - |

