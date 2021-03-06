import { HeadingOpenToken, LinkOpenToken, TextToken } from "remarkable/lib";
import { isHeadingOpenToken } from "./isHeadingOpenToken";

describe("isHeadingOpenToken", () => {
  test("with <h1 /> open", () => {
    const h1OpenToken: HeadingOpenToken = {
      type: "heading_open",
      hLevel: 1,
      level: 0,
    };

    expect(isHeadingOpenToken(h1OpenToken)).toBeTruthy();
  });


  test("with <h2 /> open", () => {
    const h1OpenToken: HeadingOpenToken = {
      type: "heading_open",
      hLevel: 2,
      level: 0,
    };

    expect(isHeadingOpenToken(h1OpenToken)).toBeTruthy();
  });


  test("with <a /> open", () => {
    const linkOpenToken: LinkOpenToken = {
      type: "link_open",
      level: 0,
      href: "https://shinyaigeek.dev"
    };

    expect(isHeadingOpenToken(linkOpenToken)).toBeFalsy();
  });


  test("with text open", () => {
    const h1OpenToken: TextToken = {
      type: "text",
      level: 0,
    };

    expect(isHeadingOpenToken(h1OpenToken)).toBeFalsy();
  });
});
