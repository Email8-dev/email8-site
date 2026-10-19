import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/mta/email-8-mta",
      },
      items: [
        {
          type: "doc",
          id: "api/mta/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/mta/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/mta/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/mta/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/mta/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mta/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mta/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mta/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/mta/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/mta/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/mta/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mta/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/mta/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/mta/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/mta/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "email8-mta",
      link: {
        type: "doc",
        id: "api/mta/email-8-mta",
      },
      items: [
        {
          type: "doc",
          id: "api/mta/admin-data",
          label: "`POST /v1/admin/{page}` — data endpoints.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mta/submit",
          label: "`POST /v1/internal/submit` — the JMAP/Store submit path.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-ui",
      items: [
        {
          type: "doc",
          id: "api/mta/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}` — RFW definitions.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "meta",
      items: [
        {
          type: "doc",
          id: "api/mta/health",
          label: "health",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
