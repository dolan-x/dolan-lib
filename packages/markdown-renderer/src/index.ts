import type { Processor } from "unified";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

import { remarkDolanRaw } from "./raw-plugin";

export interface GetRendererOptions {
  modifyRemark?: (instance: Processor) => void
  modifyRehype?: (instance: Processor) => void
}
export function getRenderer (options: GetRendererOptions = {}) {
  const renderer = unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkDolanRaw);
  options.modifyRemark?.(renderer);
  renderer.use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex);
  options.modifyRehype?.(renderer);
  renderer.use(rehypeStringify, { allowDangerousHtml: true });
  return renderer;
}
export const defaultRenderer = getRenderer();
export async function renderMarkdown (md: string) {
  return String(await defaultRenderer.process(md));
}
export function renderMarkdownSync (md: string) {
  return String(defaultRenderer.processSync(md));
}
