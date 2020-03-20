/* eslint-disable @typescript-eslint/camelcase */
import { Organization } from "types/Organization";

// * Endpoint: /organizations
export const MockOrganizations: Organization[] = [
  {
    name: "bjornbORG",
    slug: "f57e770b0b6d7eb6",
    avatar_icon_url: "https://bitrise-public-content-production.s3.amazonaws.com/org-icons/default_avatar-10.png",
    concurrency_count: null,
    owners: [
      {
        slug: "cb4ddefb8eed7e76",
        username: "norbert",
        email: "norbert.kovach@bitrise.io",
      },
      {
        slug: "da67280971d16120",
        username: "abudabitest",
        email: "norbert.kovach+abudabitest@bitrise.io",
      },
    ],
  },
  {
    name: "NinjaCorp",
    slug: "7cff6a494fa461ac",
    avatar_icon_url: null,
    concurrency_count: null,
    owners: [
      {
        slug: "f0aa1db2bc8d7952",
        username: "ninja",
        email: "ninja@bitrise.io",
      },
    ],
  },
  {
    name: "SAMLOrg",
    slug: "6345241944df6e29",
    avatar_icon_url: "https://bitrise-public-content-production.s3.amazonaws.com/org-icons/default_avatar-07.png",
    concurrency_count: null,
    owners: [
      {
        slug: "f0aa1db2bc8d7952",
        username: "ninja",
        email: "ninja@bitrise.io",
      },
    ],
  },
];
