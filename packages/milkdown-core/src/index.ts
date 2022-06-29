import type { Ctx, MilkdownPlugin } from "@milkdown/core";
import { Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { gfm } from "@milkdown/preset-gfm";
import { emoji } from "@milkdown/plugin-emoji";
import { indent } from "@milkdown/plugin-indent";
import { math } from "@milkdown/plugin-math";
import { slash } from "@milkdown/plugin-slash";
import { tooltip } from "@milkdown/plugin-tooltip";
import { upload } from "@milkdown/plugin-upload";
import { menu } from "@milkdown/plugin-menu";
import { history } from "@milkdown/plugin-history";
import { clipboard } from "@milkdown/plugin-clipboard";
import { prism } from "@milkdown/plugin-prism";

const plugins: MilkdownPlugin[] = [
  nord,
  gfm,
  emoji,
  indent,
  math,
  slash,
  tooltip,
  upload,
  menu,
  history,
  clipboard,
  prism,
].flat();

interface CreateMilkdownOptions{
  extendConfig: (ctx: Ctx) => void
}
export function createMilkdownCore (root: HTMLElement, options?: CreateMilkdownOptions): Editor {
  return Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      options?.extendConfig && options.extendConfig(ctx);
    })
    .use(plugins.flat());
}
