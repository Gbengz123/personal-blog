import prisma from '../db/db.js';
interface createCommentOptions {
  postId: number;
  content: string;
  authorId?: number;
  guest_name?: string;
}

interface getCommentsByPostIdOptions {
  postId: number;
  order?: 'asc' | 'desc';
}

export async function createComment(options: createCommentOptions) {
  const comment = await prisma.comments.create({
    data: {
      content: options.content,
      postId: options.postId,
      userId: options.authorId,
      guest_name: options.guest_name,
    },
  });

  return comment;
}

export async function getCommentsByPostId(options: getCommentsByPostIdOptions) {
  const comments = await prisma.comments.findMany({
    where: {
      postId: options.postId,
    },

    orderBy: {
      createdAt: options.order || 'desc',
    },
  });

  return comments;
}

export async function updateComment(commentId: number, content: string) { 
  const comment = await prisma.comments.update({
    where: {
      id: commentId,
    },
    data: {
      content,
    },
  });

  return comment;
}

export async function deleteComment(commentId: number) {
  const comment = await prisma.comments.delete({
    where: {
      id: commentId,
    },
  });

  return comment;
}


