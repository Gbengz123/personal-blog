import prisma from "../db/db.js";
import { Request, Response } from "express";
import * as postService from "../services/post.service.js";

export async function getPosts(req: Request, res: Response){
  try {
    const posts = await postService.getPosts()
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}