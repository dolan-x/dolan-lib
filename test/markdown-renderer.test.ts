import { describe, expect, it } from "vitest";
import { renderMarkdown } from "@dolan-x/markdown-renderer";
import { gfm, raw } from "./fixtures/markdown-renderer";

describe("markdown-renderer", () => {
  it("works", async () => {
    expect(await renderMarkdown("# Hello")).toMatchInlineSnapshot("\"<h1>Hello</h1>\"");
  });
  it("should render gfm", async () => {
    expect(await renderMarkdown(gfm)).toMatchSnapshot("markdown-renderer-gfm");
  });
  it("should render raw", async () => {
    expect(await renderMarkdown(raw)).toMatchSnapshot("markdown-renderer-raw");
  });
});
