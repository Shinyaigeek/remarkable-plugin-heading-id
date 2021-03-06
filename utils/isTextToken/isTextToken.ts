import { TagToken, TextToken } from "remarkable/lib";

export const isTextToken = (
  token: TagToken
): token is TextToken => token.type === "text";
