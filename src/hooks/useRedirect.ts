import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useRedirect(path: string): { pathname: string } {
  const location = useLocation<{ from: { pathname: string } }>();
  const redirectTo = useMemo(() => {
    const { from } = location.state || { from: { pathname: path } };
    return from;
  }, [location.state, path]);
  return redirectTo;
}
