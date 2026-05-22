import prisma from '../db/db.js';
export async function getPosts(options) {
  const posts = await prisma.post.findMany({
    where: {
      published: options?.published,
      id: options?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return posts;
}
export async function getPostById(id) {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return post;
}
