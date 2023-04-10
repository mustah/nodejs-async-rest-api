import express from 'express';
import { index } from './routes';
import { users } from './routes/users';

const app = express();

app
  .all('/*', (req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  })
  .use('/', index)
  .use('/users', users)
  .listen(3000, () => console.log('...listening on port 3000'));
