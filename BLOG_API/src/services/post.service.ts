import prisma from '../db/db.js';
import { Post, Comments } from '@prisma/client';

type PostwithComment = Post & { comments: Comments[] };

export const allowedSortFields = ['createdAt', 'title', 'id'] as const;
export type SortField = (typeof allowedSortFields)[number];
export interface GetPostsOptions {
  published?: boolean;
  search?: string;
  orderBy?: {
    field: SortField;
    direction: 'asc' | 'desc';
  };
  skip?: number;
  limit?: number;
}
interface CreatePostOptions {
  title: string;
  content: string;
  published?: boolean;
}

export async function getPosts(
  options?: GetPostsOptions
): Promise<PostwithComment[]> {
  const posts = await prisma.post.findMany({
    where: {
      published: options?.published,

      OR: options?.search
        ? [
            {
              title: {
                contains: options.search,
                mode: 'insensitive',
              },
            },
            {
              content: {
                contains: options.search,
                mode: 'insensitive',
              },
            },
          ]
        : undefined,
    },

    // skips the first 'skip' records (for pagination) e.g. skip: 10 will skip the first 10 records
    skip: options?.skip,
    // limits the number of records returned (for pagination) e.g. limit: 10 will return at most 10 records
    take: options?.limit,

    orderBy: options?.orderBy
      ? {
          [options.orderBy.field]: options.orderBy.direction,
        }
      : undefined,

    include: {
      comments: true,
    },
  });

  return posts;
}

export async function getPostById(id: number): Promise<Post | null> {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  return post;
}

export async function createPost(options: CreatePostOptions): Promise<Post> {
  const post = await prisma.post.create({
    data: {
      title: options.title,
      content: options.content,
      published: options.published || false,
    },
  });

  return post;
}

export async function updatePost(
  id: number,
  options: Partial<CreatePostOptions>
): Promise<Post | null> {
  const post = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: options.title,
      content: options.content,
    },
  });

  return post;
}

export async function deletePost(id: number): Promise<Post | null> {
  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  return post;
}
