import { body } from "express-validator";

export const loginValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
];

export const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("fullName").isLength({ min: 2 }),
  body("avatar").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter title").isLength({ min: 3 }).isString(),
  body("text", "Enter text for post").isLength({ min: 10 }).isString(),
  body("tags", "Incorrect type of tags").optional().isString(),
  body("imageUrl", "incorrect url for image").optional().isString(),
];
