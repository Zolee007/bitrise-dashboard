import { App } from "types/App";
import { Build } from "types/Build";

export function getBuildStatusColor(build?: Build | App | null): string {
  switch (build?.status) {
    case 1:
      return "green";
    case 2:
      return "red";
    case 3:
    case 4:
      return "orange";
    default:
      return "gray";
  }
}
