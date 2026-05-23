import { Router } from 'express';
import userPostsRouter from './user.posts.routes.js';
import userCommentsRouter from './user.comments.routes.js';

const userRouter = Router();

userRouter.use('/posts', userPostsRouter);
userRouter.use('/:postId/comments', userCommentsRouter);

export default userRouter;
