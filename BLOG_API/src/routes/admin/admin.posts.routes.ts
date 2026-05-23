import { Router } from 'express';
import * as postController from '../../controllers/post.controller.js';
import asyncHandler from '../../middleware/aynchHandler.js';
import {
  postValidationRules,
  validateRequest,
} from '../../middleware/validatePost.js';

const postsRouter = Router();

postsRouter.get('/', asyncHandler(postController.getPosts));
postsRouter.post(
  '/',
  [...postValidationRules, validateRequest],
  asyncHandler(postController.createPost)
);
postsRouter.get('/:id', asyncHandler(postController.getPostById));
postsRouter.put(
  '/:id',
  [...postValidationRules, validateRequest],
  asyncHandler(postController.updatePost)
);
postsRouter.delete('/:id', asyncHandler(postController.deletePost));

export default postsRouter;
