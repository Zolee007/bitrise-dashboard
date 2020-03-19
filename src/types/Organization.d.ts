import { Response } from "./Response";

export type OrganizationResponse = Response<Organization[]>;

export type Organization = {
  name: string;
  slug: string;
  owners: OrganizationOwner[];
  avatar_icon_url: string | null;
  concurrency_count: number | null;
};

export type OrganizationOwner = {
  username: string;
  slug: string;
  email: string;
};
