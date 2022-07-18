import type { $Fetch } from "ohmyfetch";
import { $fetch } from "ohmyfetch";

import { PostsModule } from "./modules";

export class ApiClient {
  #fetch: $Fetch;

  posts: PostsModule;

  private constructor (endpoint: string) {
    this.#fetch = $fetch.create({
      baseURL: endpoint,
    });
    this.posts = new PostsModule(this.#fetch);
  }

  static create (endpoint: string) {
    return new ApiClient(endpoint);
  }
}
