import type { Plugin } from "unified";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

export function getRenderer<P extends Plugin[]> (options?: { plugins: P }) {
  const plugins = options?.plugins || [];
  const renderer = unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(plugins)
    .use(rehypeStringify);
  return renderer;
}
export const defaultRenderer = getRenderer();
export async function renderMarkdown (md: string) {
  return String(await defaultRenderer.process(md));
}
