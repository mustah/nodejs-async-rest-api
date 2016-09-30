import { Router } from 'express';

const index = Router()
  .get('/', (req, res) => {
    res.send({greeting: 'Welcome to your first express backend project!'});
  });

export default index;
