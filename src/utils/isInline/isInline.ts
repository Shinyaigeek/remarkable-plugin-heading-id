import { TagToken, TextToken } from "remarkable/lib";

export interface InlineToken {
  type: "inline";
  content?: string;
  level: number;
}

export const isInline = (token: TagToken): token is InlineToken =>
  token.type === "inline";
