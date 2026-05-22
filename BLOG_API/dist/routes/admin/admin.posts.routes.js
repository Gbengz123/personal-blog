import { Router } from 'express';
import * as postController from '../../controllers/post.controller.js';
import asyncHandler from '../../middleware/aynchHandler.js';
const postsRouter = Router();
postsRouter.get('/', asyncHandler(postController.getPosts));
postsRouter.get('/:id', asyncHandler(postController.getPostById));
export default postsRouter;
