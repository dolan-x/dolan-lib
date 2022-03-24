import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index",
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    "rehype-stringify",
    "remark-breaks",
    "remark-gfm",
    "remark-html",
    "remark-parse",
    "remark-rehype",
    "unified",
  ],
});
