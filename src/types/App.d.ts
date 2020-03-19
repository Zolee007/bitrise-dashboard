import { Response } from "./Response";

export type AppResponse = Response<App[]>;

export type App = {
  title: string;
  slug: string;
  status: number;
  project_type: string;
  provider: string;
  repo_owner: string;
  repo_slug: string;
  repo_url: string;
  owner: AppOwner;
  avatar_url: string | null;
  is_public: boolean;
  is_disabled: boolean;
};

export type AppOwner = {
  name: string;
  slug: string;
  account_type: string;
};
