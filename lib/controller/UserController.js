"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyOtp = exports.store = void 0;

var UserDao = _interopRequireWildcard(require("../dao/UserDao"));

var _crypto = require("../utils/crypto");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const store = async (req, res) => {
  const OTP = Math.random() * (9999 - 1111) + 1111;
  req.body.token = await (0, _crypto.encrypt)(req.body);
  req.body.otp = OTP;
  UserDao.createUser(req, res);
};

exports.store = store;

const verifyOtp = async (req, res) => {
  UserDao.verifyEmail(req, res);
};

exports.verifyOtp = verifyOtp;