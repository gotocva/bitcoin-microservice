"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _UserSchema = require("../model/UserSchema");

const auth = (req, res, next) => {
  if (req.headers['authentication'] === undefined) res.error({}, "Authentication required", 401);
  let token = req.headers['authentication'];

  _UserSchema.User.findOne({
    token: token
  }).exec((error, result) => {
    if (error || result === null || result === undefined) {
      res.error({}, "Authentication required", 401);
    } else {
      req.token = token;
      next();
    }
  });
};

exports.auth = auth;