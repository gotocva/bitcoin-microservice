"use strict";

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _env = _interopRequireDefault(require("../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transporter = _nodemailer.default.createTransport({
  service: 'gmail',
  auth: {
    user: _env.default.SMTP_EMAIL,
    pass: _env.default.SMTP_PASSWORD
  }
});

const mailOptions = {
  from: _env.default.SMTP_EMAIL
};
module.exports = {
  transporter,
  mailOptions
};