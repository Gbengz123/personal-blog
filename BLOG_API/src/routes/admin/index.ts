import { Router } from 'express';
import postsRouter from './admin.posts.routes.js';
import authRouter from './admin.auth.routes.js';
import commentsRouter from './admin.comments.routes.js';

const adminRouter = Router();

adminRouter.use('/posts', postsRouter);
adminRouter.use(':postId/comments', commentsRouter);
adminRouter.use('/auth', authRouter);

export default adminRouter;
