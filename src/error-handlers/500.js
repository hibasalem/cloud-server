'use strict';

module.exports = (err, req, res, next) => {
  const error = err.massage ? err.massage : err;
  res.status(500).json({ error });
};
