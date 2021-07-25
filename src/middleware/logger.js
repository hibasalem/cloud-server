'use strict';

module.exports = (req, res, next) => {
  console.log('logger REQUEST', req.method, req.path);
  next();
};
