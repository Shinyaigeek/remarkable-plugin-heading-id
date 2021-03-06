import { HeadingOpenToken, TagToken } from "remarkable/lib";

export const isHeadingOpenToken = (
  token: TagToken
): token is HeadingOpenToken => token.type === "heading_open";
