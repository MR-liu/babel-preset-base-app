'use strict';

const create = require('./create');

/**
* Given the base case is development
*/
module.exports = function(api, opts) {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
  return create(api, opts, env);
};
