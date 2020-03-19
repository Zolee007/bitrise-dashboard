import { useMemo } from "react";

import { FetchResult, useFetchData } from "./useFetchData";
import { BaseUrl } from "configs/Config";
import { Build, BuildResponse } from "types/Build";

export function useFetchBuilds(slug: string | null, depends: unknown[]): FetchResult<Build[]> {
  const endpoint = useMemo(() => (slug ? `${BaseUrl}/builds?owner_slug=${slug}` : `${BaseUrl}/builds`), [slug]);
  return useFetchData<BuildResponse, Build[]>(
    endpoint,
    (response) => {
      response.data.forEach((build) => (build.repository.status = build.status));
      return response.data;
    },
    depends,
  );
}
