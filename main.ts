import Remarkable, { HeadingOpenToken, TagToken, TextToken } from "remarkable/lib";
import { idx, incrementIdx } from "./context";
import { isHeadingOpenToken } from "./utils/isHeadingOpenToken/isHeadingOpenToken";
import { isInline } from "./utils/isInline/isInline";

interface PluginOptions {
  createId?: (level: 1 | 2 | 3 | 4 | 5 | 6, content: string, idx: number) => string;
}

export const remarkablePluginHeadingId = (
  md: Remarkable,
  options: PluginOptions = {}
) => {
  const renderer = md.renderer.rules.heading_open;

  md.renderer.rules.heading_open = (
    tokens: HeadingOpenToken[],
    tokensIdx: number
  ) => {
    const headingOpenToken = tokens[tokensIdx];
    if (!isHeadingOpenToken(headingOpenToken)) {
      throw new Error(
        "remarkablePluginHeadingId should take heading tag token, but got" +
          JSON.stringify(headingOpenToken)
      );
    }

    const defaultResult = renderer(tokens, tokensIdx);

    // TODO textToken is inferred as HeadingOpenToken, but should be inferred TagToken
    const textToken = tokens[tokensIdx + 1] as TagToken;

    if (!isInline(textToken)) {
      throw new Error(
        "remarkablePluginHeadingId should take text token next to heading open token, but got" +
        JSON.stringify(textToken)
      );
    }

    const headingTagContent = textToken.content ?? "";

    const result = (() => {
      if (!options.createId) {
        return defaultResult.replace(">", ` id="${headingTagContent}">`);
      } else {
        return defaultResult.replace(
          ">",
          ` id="${options.createId(
            headingOpenToken.hLevel as 1 | 2 | 3 | 4 | 5 | 6,
            headingTagContent,
            idx
          )}">`
        );
      }
    })();

    incrementIdx();

    return result;
  };
};
