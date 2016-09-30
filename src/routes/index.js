'use strict';

import express from 'express';

export default express.Router()
  .get('/', (req, res) => {
    res.send({greeting: 'Welcome to your first express backend project!'});
  });
