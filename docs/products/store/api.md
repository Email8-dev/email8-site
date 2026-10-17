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

**1 endpoint**.

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

