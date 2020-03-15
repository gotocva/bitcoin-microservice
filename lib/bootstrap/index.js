"use strict";

var _express = require("./express");

var _mongoDb = _interopRequireDefault(require("./mongoDb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  app: _express.app,
  router: _express.router,
  conn: _mongoDb.default
};