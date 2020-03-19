import userImage from "assets/images/user.png";
import { currentUser } from "services/AuthService";
import { App } from "types/App";

export function getAppAvatarUrl(app?: App | null): string | null {
  return app?.avatar_url || getAppOwnerAvatarUrl(app);
}

export function getAppOwnerAvatarUrl(app?: App | null): string | null {
  const user = currentUser();
  switch (app?.owner.account_type) {
    case "user":
      return app.owner.slug === user?.slug ? user.avatar_url || userImage : null;

    default:
      return null;
  }
}

export function getAppShortName(app?: App | null): string {
  return app?.title.toUpperCase()[0] || "-";
}

export function getAppColor(app?: App | null): string {
  switch (app?.owner.account_type) {
    case "user":
      return "primary";
    case "organization":
      return "secondary";
    default:
      return "skeleton";
  }
}
