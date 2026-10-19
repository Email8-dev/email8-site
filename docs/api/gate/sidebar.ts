import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "email8-gate",
      link: {
        type: "doc",
        id: "api/gate/email-8-gate",
      },
      items: [
        {
          type: "doc",
          id: "api/gate/gate-telemetry-spec",
          label: "Spec wrapper for the inline `/v1/gate/telemetry` closure.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gate/gate-health-spec",
          label: "Spec wrapper for the inline `/v1/health` closure.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-ui",
      link: {
        type: "doc",
        id: "api/gate/email-8-gate",
      },
      items: [
        {
          type: "doc",
          id: "api/gate/get-admin-ui",
          label: "`GET /v1/admin/ui/gate` — RFW definition of the telemetry page.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gate/admin-data",
          label: "`POST /v1/admin/gate` — page data: counters + listener table split by\nthe sub-endpoint path the RFW widgets post to.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/gate/email-8-gate",
      },
      items: [
        {
          type: "doc",
          id: "api/gate/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gate/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gate/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gate/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gate/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gate/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gate/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gate/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gate/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gate/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gate/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gate/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gate/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gate/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gate/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
