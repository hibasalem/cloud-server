'use strict';

module.exports = (req, res, next) => {
  console.log('req.params.id', req.console);
  if (Object.keys(req.body).length) {
    next();
  } else {
    res.json({ error: 'add properties' });
    next('add properties');
  }
};
