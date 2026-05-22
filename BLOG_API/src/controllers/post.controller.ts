import { Request, Response } from 'express';
import * as postService from '../services/post.service.js';
import {
  GetPostsOptions,
  SortField,
  allowedSortFields,
} from '../services/post.service.js';
import { matchedData } from 'express-validator';

function isSortField(value: unknown): value is SortField {
  return allowedSortFields.includes(value as SortField);
}

export async function getPosts(req: Request, res: Response) {
  // field to sort by, default to createdAt
  const sortField = isSortField(req.query.sort) ? req.query.sort : 'createdAt';
  // page number for pagination, default to 1
  const page = Number(req.query.page) || undefined;
  const limit = page ? (Number(req.query.limit) || 10) : undefined;
  // number of records to skip for pagination, calculated based on page number and limit
  const skip: number | undefined = limit && page ? (page - 1) * limit : undefined;

  const options: GetPostsOptions = {
    published: req.query.published ? req.query.published === 'true' : undefined,

    search: req.query.search as string,

    orderBy: {
      field: sortField,
      direction: req.query.order === 'asc' ? 'asc' : 'desc',
    },

    skip: skip,
    limit: limit,
  };

  const posts = await postService.getPosts(options);
  res.json(posts);
}

export async function getPostById(req: Request, res: Response) {
  const { id } = req.params;
  const post = await postService.getPostById(Number(id));

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
}

export async function createPost(req: Request, res: Response) {
  const { title, content } = matchedData(req);

  const post = await postService.createPost({
    title,
    content,
    published: req.body.published === 'true',
  });

  res.status(201).json(post);
}

export async function updatePost(req: Request, res: Response) {
  const { id } = req.params;
  const { title, content } = matchedData(req);

  const post = await postService.updatePost(Number(id), {
    title,
    content,
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
}

export async function deletePost(req: Request, res: Response) {
  const { id } = req.params;

  const post = await postService.deletePost(Number(id));

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.status(204).send();
}
