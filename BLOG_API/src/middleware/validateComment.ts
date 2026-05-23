import { Request, Response, NextFunction} from 'express';
import { body, validationResult } from 'express-validator';

export const commentValidationRules = [
  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required")
];

export function validateComment(req: Request, res: Response, next: NextFunction){
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};