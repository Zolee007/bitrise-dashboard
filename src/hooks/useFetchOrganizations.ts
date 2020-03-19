import { useMemo } from "react";

import { FetchResult, useFetchData } from "./useFetchData";
import { BaseUrl } from "configs/Config";
import { Organization, OrganizationResponse } from "types/Organization";

export function useFetchOrganizations(depends: unknown[]): FetchResult<Organization[]> {
  const endpoint = useMemo(() => `${BaseUrl}/organizations`, []);
  return useFetchData<OrganizationResponse, Organization[]>(endpoint, (response) => response.data, depends);
}
