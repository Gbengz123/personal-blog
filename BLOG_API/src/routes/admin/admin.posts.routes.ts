import { Router } from "express";
import { getPosts } from "../../controllers/post.controller.js";
import asyncHandler from '../../middleware/aynchHandler.js'

const postsRouter = Router()

postsRouter.get('/', asyncHandler(getPosts))

export default postsRouter