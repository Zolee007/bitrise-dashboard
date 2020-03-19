import { FetchResult, useFetchData } from "./useFetchData";
import { BaseUrl } from "configs/Config";
import { UserResponse, User } from "types/User";

const UserEndpoint = `${BaseUrl}/me`;

export function useFetchUser(depends: unknown[]): FetchResult<User> {
  const result = useFetchData<UserResponse, User>(UserEndpoint, (response) => response.data, depends);
  return result;
}
