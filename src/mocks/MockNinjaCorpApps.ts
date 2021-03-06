/* eslint-disable @typescript-eslint/camelcase */
import { App } from "types/App";

// * Endpoint: /organizations/7cff6a494fa461ac/apps?sort_by=last_build_at
export const MockNinjaCorpApps: App[] = [
  {
    slug: "6bf5b2870ff2b5c6",
    title: "sample-apps-android-sdk22",
    project_type: "android",
    provider: "gitlab-self-hosted",
    repo_owner: "gaborszakacs",
    repo_url: "git@54.174.144.36:gaborszakacs/sample-apps-android-sdk22.git",
    repo_slug: "sample-apps-android-sdk22",
    is_disabled: false,
    status: 1,
    is_public: false,
    owner: {
      account_type: "organization",
      name: "NinjaCorp",
      slug: "7cff6a494fa461ac",
    },
    avatar_url: null,
  },
  {
    slug: "a9320cc65d7846dc",
    title: "NinjaCorp fast building app",
    project_type: "android",
    provider: "github",
    repo_owner: "bitrise-samples",
    repo_url: "https://github.com/bitrise-samples/sample-apps-android-sdk22",
    repo_slug: "sample-apps-android-sdk22",
    is_disabled: false,
    status: 1,
    is_public: false,
    owner: {
      account_type: "organization",
      name: "NinjaCorp",
      slug: "7cff6a494fa461ac",
    },
    avatar_url: null,
  },
];
