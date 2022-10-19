// import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

// TODO: add proper types
// Note: importing the "Plugin" type causes a build error

export const remarkDolanRaw: any = () => {
  return (tree: any) => {
    visit(tree, "code", (node: any) => {
      if (node.lang === "raw") {
        node.type = "html";
      }
    });
  };
};
