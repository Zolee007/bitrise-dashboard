import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { useRedirect } from "./useRedirect";
import { authenticate } from "services/AuthService";

export function useAuthHandler(token: string): VoidFunction {
  const history = useHistory();
  const redirect = useRedirect("/");
  return useCallback(() => {
    if (token) {
      authenticate(token);
      history.replace(redirect);
    }
  }, [history, redirect, token]);
}
