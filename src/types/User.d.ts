import { Response } from "./Response";

export type UserResponse = Response<User>;

export type User = {
  username: string;
  slug: string;
  email: string;
  unconfirmed_email: string;
  avatar_url: string | null;
  is_chat_available: boolean;
};
