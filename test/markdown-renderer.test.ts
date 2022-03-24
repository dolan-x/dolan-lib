import { describe, expect, it } from "vitest";
import { renderMarkdown } from "@dolan-x/markdown-renderer";
import { gfm, github } from "./assets/markdown-renderer";

describe("markdown-renderer", () => {
  it("works", async() => {
    expect(await renderMarkdown("# Hello")).toMatchInlineSnapshot("\"<h1>Hello</h1>\"");
  });
  it("should render gfm", async() => {
    expect(await renderMarkdown(gfm)).toMatchSnapshot("markdown-renderer-gfm");
  });
  it("should render github", async() => {
    expect(await renderMarkdown(github)).toMatchSnapshot("markdown-renderer-github");
  });
});
