'use strict';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hi Must Tahir');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));