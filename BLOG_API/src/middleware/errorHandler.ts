import { Request, Response, } from 'express';

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
) {
  console.error(err);

  return res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
}
