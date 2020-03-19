import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { useRedirect } from "./useRedirect";
import { setCurrentUser } from "services/AuthService";
import { User } from "types/User";

export function useSignInHandler(user?: User | null): VoidFunction {
  const history = useHistory();
  const redirectTo = useRedirect("/");
  return useCallback(() => {
    setCurrentUser(user);
    history.push(redirectTo);
  }, [history, redirectTo, user]);
}
