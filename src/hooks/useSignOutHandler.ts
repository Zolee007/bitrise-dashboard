import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { signOut } from "services/AuthService";
import { useRedirect } from "./useRedirect";

export function useSignOutHandler(clearToken?: boolean): VoidFunction {
  const history = useHistory();
  const redirectTo = useRedirect("/");
  return useCallback(() => {
    signOut(clearToken);
    if (redirectTo) {
      history.replace(redirectTo);
    }
  }, [history, redirectTo, clearToken]);
}
