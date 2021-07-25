'use strict';

const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger');
const notfoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);

app.get('/', lifeProof);

app.get('/bad', badHandler);

function lifeProof(req, res) {
  res.status(200).json('home route');
}

function badHandler(req, res) {
  throw new Error('some thing went wrong');
}

app.use('*', notfoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`listening on port ${port}`));
}

module.exports = {
  app: app,
  start: start,
};
