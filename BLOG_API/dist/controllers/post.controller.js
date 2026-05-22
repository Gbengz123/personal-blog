import * as postService from '../services/post.service.js';
export async function getPosts(req, res) {
  const posts = await postService.getPosts();
  res.json(posts);
}
export async function getPostById(req, res) {
  const { id } = req.params;
  const post = await postService.getPostById(Number(id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
}
