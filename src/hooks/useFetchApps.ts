import { useMemo } from "react";

import { FetchResult, useFetchData } from "./useFetchData";
import { BaseUrl } from "configs/Config";
import { App, AppResponse } from "types/App";

export function useFetchApps(slug: string | null, depends: unknown[]): FetchResult<App[]> {
  const endpoint = useMemo(
    () =>
      slug ? `${BaseUrl}/organizations/${slug}/apps?sort_by=last_build_at` : `${BaseUrl}/apps?sort_by=last_build_at`,
    [slug],
  );
  return useFetchData<AppResponse, App[]>(endpoint, (response) => response.data, depends);
}
