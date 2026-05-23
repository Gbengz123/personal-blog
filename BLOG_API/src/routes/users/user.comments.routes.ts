import { Router } from 'express';
import * as commentController from '../../controllers/comment.controller.js';
import asyncHandler from '../../middleware/aynchHandler.js';
import {
  validateComment,
  commentValidationRules,
} from '../../middleware/validateComment.js';

const userCommentsRouter = Router({ mergeParams: true });

userCommentsRouter.get(
  '/',
  asyncHandler(commentController.getCommentsByPostId)
);
userCommentsRouter.post(
  '/',
  [...commentValidationRules, validateComment],
  asyncHandler(commentController.createComment)
);
userCommentsRouter.put(
  '/:commentId',
  [...commentValidationRules, validateComment],
  asyncHandler(commentController.updateComment)
);
userCommentsRouter.delete(
  '/:commentId',
  asyncHandler(commentController.deleteComment)
);

export default userCommentsRouter;
