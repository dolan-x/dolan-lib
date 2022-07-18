import type { $Fetch } from "ohmyfetch";

export class PostsModule {
  #fetch: $Fetch;
  constructor ($fetch: $Fetch) {
    this.#fetch = $fetch;
  }
}
