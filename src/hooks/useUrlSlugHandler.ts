import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";

export type SlugTranformer = (slug: string | null) => string;
export type SlugCallback = (slug: string | null) => void;

export type SlugHandler = {
  slug?: string | null;
  handler: SlugCallback;
};

export function useUrlSlugHandler(tranformer: SlugTranformer): SlugHandler {
  const { slug } = useParams();
  const history = useHistory();
  const handler = useCallback((slug) => history.replace(tranformer(slug)), [history, tranformer]);
  return { slug, handler };
}
