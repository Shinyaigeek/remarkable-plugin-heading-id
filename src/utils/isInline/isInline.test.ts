import { HeadingOpenToken, LinkOpenToken, TextToken } from "remarkable/lib";
import { InlineToken, isInline } from "./isInline";

describe("isInline", () => {
  test("with <h1 /> open", () => {
    const h1OpenToken: HeadingOpenToken = {
      type: "heading_open",
      hLevel: 1,
      level: 0,
    };

    expect(isInline(h1OpenToken)).toBeFalsy();
  });

  test("with <h2 /> open", () => {
    const h1OpenToken: HeadingOpenToken = {
      type: "heading_open",
      hLevel: 2,
      level: 0,
    };

    expect(isInline(h1OpenToken)).toBeFalsy();
  });

  test("with <a /> open", () => {
    const linkOpenToken: LinkOpenToken = {
      type: "link_open",
      level: 0,
      href: "https://shinyaigeek.dev",
    };

    expect(isInline(linkOpenToken)).toBeFalsy();
  });

  test("with text open", () => {
    const h1OpenToken: InlineToken = {
      type: "inline",
      level: 0,
    };

    expect(isInline(h1OpenToken)).toBeTruthy();
  });
});
