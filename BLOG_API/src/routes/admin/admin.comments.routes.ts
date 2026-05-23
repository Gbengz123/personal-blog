import { Router } from 'express';
import * as commentController from '../../controllers/comment.controller.js';
import asyncHandler from '../../middleware/aynchHandler.js';

const adminCommentsRouter = Router({ mergeParams: true });

adminCommentsRouter.delete('/', asyncHandler(commentController.deleteComment));
adminCommentsRouter.post('/', asyncHandler(commentController.createComment));
adminCommentsRouter.put(
  '/:commentId',
  asyncHandler(commentController.updateComment)
);

export default adminCommentsRouter;
