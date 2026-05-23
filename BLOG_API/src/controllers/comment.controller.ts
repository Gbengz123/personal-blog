import * as commentService from '../services/comment.service.js';
import { Request, Response } from 'express';

export async function createComment(req: Request, res: Response) {
  const { postId } = req.params;
  const { content, guest_name } = req.body;
  //const authorId = req.user?.id;

  const comment = await commentService.createComment({
    postId: Number(postId),
    content,
    //authorId,
    guest_name,
  });

  res.status(201).json(comment);
}

export async function getCommentsByPostId(req: Request, res: Response) {
  const { postId } = req.params;
  const order  = req.query.order;

  const comments = await commentService.getCommentsByPostId({
    postId: Number(postId),
    order: order === 'asc' ? 'asc' : 'desc',
  });

  res.json(comments);
}

export async function updateComment(req: Request, res: Response) {
  const { commentId } = req.params;
  const { content } = req.body;

  const comment = await commentService.updateComment(Number(commentId), content);

  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  res.json(comment);
}

export async function deleteComment(req: Request, res: Response) {
  const { commentId } = req.params;

  const comment = await commentService.deleteComment(Number(commentId));

  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  res.status(204).send();
}