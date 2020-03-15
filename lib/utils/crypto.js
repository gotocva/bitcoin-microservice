"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt = exports.encrypt = void 0;

var _env = _interopRequireDefault(require("../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cryptr = require('cryptr');

const cryptr = new Cryptr(_env.default.SECRET);

const encrypt = str => {
  return new Promise((resolve, reject) => {
    try {
      resolve(cryptr.encrypt(str.toString()));
    } catch (error) {
      reject(false);
    }
  });
};

exports.encrypt = encrypt;

const decrypt = str => {
  return new Promise((resolve, reject) => {
    try {
      resolve(cryptr.decrypt(str));
    } catch (error) {
      reject(false);
    }
  });
};

exports.decrypt = decrypt;