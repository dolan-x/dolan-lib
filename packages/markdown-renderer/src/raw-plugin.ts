import { visit } from "unist-util-visit";
import type { Plugin } from "unified";

export const remarkDolanRaw: Plugin = () => {
  return function transformer (tree) {
    visit(tree, "code", (node: any) => {
      if (node.lang === "dolan-raw") {
        node.type = "html";
      }
    });
  };
};
