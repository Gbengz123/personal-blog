import prisma from "../db/db.js";
import { Post } from "@prisma/client";

interface GetPostsOptions {
  published?: boolean;
}

export async function getPosts(options?: GetPostsOptions): Promise<Post[]> {
  const posts = await prisma.post.findMany({
    where: {
      published: options?.published
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return posts;
}