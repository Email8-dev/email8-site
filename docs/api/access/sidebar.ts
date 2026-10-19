import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "dav",
      link: {
        type: "doc",
        id: "api/access/email-8-access",
      },
      items: [
        {
          type: "doc",
          id: "api/access/dispatch-root",
          label: "The bare `/dav` entry — axum's `Path<String>` cannot match zero\npath arguments, so the collection root gets its own wrapper.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/access/dispatch",
          label: "The main DAV dispatcher: `/dav/{*path}` any-method.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/access/email-8-access",
      },
      items: [
        {
          type: "doc",
          id: "api/access/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/access/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/access/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/access/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/access/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/access/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/access/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/access/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/access/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/access/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/access/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/access/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/access/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/access/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/access/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "meta",
      link: {
        type: "doc",
        id: "api/access/email-8-access",
      },
      items: [
        {
          type: "doc",
          id: "api/access/health",
          label: "health",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
