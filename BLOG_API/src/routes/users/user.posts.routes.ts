import { Router } from "express";
import * as postController from "../../controllers/post.controller.js";
import asyncHandler from "../../middleware/aynchHandler.js";

const userPostsRouter = Router();

userPostsRouter.get("/", asyncHandler(postController.getPosts));
userPostsRouter.get("/:id", asyncHandler(postController.getPostById));

export default userPostsRouter;