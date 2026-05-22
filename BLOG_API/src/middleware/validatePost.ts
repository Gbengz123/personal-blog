import { Request, Response, NextFunction} from 'express';
import { body, validationResult } from 'express-validator';

export const postValidationRules = [
  body("title").trim().notEmpty().withMessage("Title is required"),

  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ min: 10 })
    .withMessage("Content must be at least 10 characters long"),
];

export function validateRequest(req: Request, res: Response, next: NextFunction){
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
