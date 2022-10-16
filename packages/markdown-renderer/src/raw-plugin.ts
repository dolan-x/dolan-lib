import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

export const remarkDolanRaw: Plugin = () => {
  return (tree) => {
    visit(tree, "code", (node: any) => {
      if (node.lang === "dolan-raw") {
        node.type = "html";
      }
    });
  };
};
