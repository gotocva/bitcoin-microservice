"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendWelcomeEmail = void 0;

var _index = require("../../config/index");

/**
 * Function to send welcome email on user register
 * @param {String} email 
 * @param {Number} otp 
 */
const sendWelcomeEmail = (email, otp) => {
  let html = '<meta http-equiv="Content-type" content="text/html; charset=utf-8">';
  html += '<h1>Welcome to ' + _index.env.SITE_NAME + ' </h1><br>OTP to verify your account is ' + otp;
  _index.mailOptions.subject = 'Welcome to ' + _index.env.SITE_NAME + ' ';
  _index.mailOptions.html = html;
  _index.mailOptions.to = email;

  _index.transporter.sendMail(_index.mailOptions, function (error, info) {
    if (error) {
      console.log('email sending failure' + error);
      return false;
    } else {
      console.log('Email sent: ' + info.response);
      return true;
    }
  });
};

exports.sendWelcomeEmail = sendWelcomeEmail;