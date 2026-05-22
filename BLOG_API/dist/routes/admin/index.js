import { Router } from 'express';
import postsRouter from './admin.posts.routes.js';
import authRouter from './admin.auth.routes.js';
const adminRouter = Router();
adminRouter.use('/posts', postsRouter);
adminRouter.use('/auth', authRouter);
export default adminRouter;
