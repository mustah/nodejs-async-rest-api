import { Router } from 'express';

export const index = Router()
  .get('/', (req, res) => {
    res.send({greeting: 'Welcome to your first express backend project!'});
  });
