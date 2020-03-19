import { User } from "types/User";
import { LocalStorageTokenKey, LocalStorageUserKey } from "utils/Constants";

export function authenticate(token: string): void {
  setToken(token);
  setCurrentUser(null);
}

export function signOut(clearToken?: boolean): void {
  if (clearToken) {
    setToken(null);
  }
  setCurrentUser(null);
}

function setToken(token?: string | null): void {
  if (token) {
    localStorage.setItem(LocalStorageTokenKey, token);
  } else {
    localStorage.removeItem(LocalStorageTokenKey);
  }
}

export function token(): string {
  return localStorage.getItem(LocalStorageTokenKey) || "";
}

export function isSignedIn(): boolean {
  return Boolean(localStorage.getItem(LocalStorageTokenKey) && localStorage.getItem(LocalStorageUserKey));
}

export function currentUser(): User | null {
  const userJson = localStorage.getItem(LocalStorageUserKey);
  return userJson ? (JSON.parse(userJson) as User) : null;
}

export function setCurrentUser(user?: User | null): void {
  if (user) {
    localStorage.setItem(LocalStorageUserKey, JSON.stringify(user));
  } else {
    localStorage.removeItem(LocalStorageUserKey);
  }
}
