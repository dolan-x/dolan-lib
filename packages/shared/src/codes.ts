export enum Codes {
  // Success
  Success = 1000,
  // Failure
  Fail = 2000,
  NotFound = 2001,
  InternalServerError = 2002,
  // Users
  UserDoesNotExist = 2000,
  WrongPassword = 2001,
  UserExists = 2002,
  InvalidToken = 2003,
  // Posts
  PostDoesNotExist = 3000,
  PostExists = 3001,
  // Tags
  TagDoesNotExist = 4000,
  TagExists = 4001,
  // Categories
  CategoryDoesNotExist = 5000,
  CategoryExists = 5001,
  // Pages
  PageDoesNotExist = 6000,
  PageExists = 6001,
  // Authors
  AuthorDoesNotExist = 7000,
  AuthorExists = 7001,
}

export const STATUS_MESSAGES = new Map<Codes, string>([
  [Codes.Success, "Success"],
  [Codes.Fail, "Failed"],
  [Codes.NotFound, "Not found"],
  [Codes.InternalServerError, "Internal server error"],
  [Codes.UserDoesNotExist, "User does not exist"],
  [Codes.WrongPassword, "Wrong password"],
  [Codes.UserExists, "User exists"],
  [Codes.InvalidToken, "Invalid token"],
  [Codes.PostDoesNotExist, "Post does not exist"],
  [Codes.PostExists, "Post exists"],
  [Codes.TagDoesNotExist, "Tag does not exist"],
  [Codes.TagExists, "Tag exists"],
  [Codes.CategoryDoesNotExist, "Category does not exist"],
  [Codes.CategoryExists, "Category exists"],
  [Codes.PageDoesNotExist, "Page does not exist"],
  [Codes.PageExists, "Page exists"],
  [Codes.AuthorDoesNotExist, "Author does not exist"],
  [Codes.AuthorExists, "Author exists"],
]);
export const STATUS_CODES = new Map<Codes, number>([
  [Codes.Success, 200],
  [Codes.Fail, 400],
  [Codes.NotFound, 404],
  [Codes.InternalServerError, 500],
  [Codes.UserDoesNotExist, 404],
  [Codes.WrongPassword, 400],
  [Codes.UserExists, 400],
  [Codes.InvalidToken, 400],
  [Codes.PostDoesNotExist, 404],
  [Codes.PostExists, 400],
  [Codes.TagDoesNotExist, 404],
  [Codes.TagExists, 400],
  [Codes.CategoryDoesNotExist, 404],
  [Codes.CategoryExists, 400],
  [Codes.PageDoesNotExist, 404],
  [Codes.PageExists, 400],
  [Codes.AuthorDoesNotExist, 404],
  [Codes.AuthorExists, 400],
]);
