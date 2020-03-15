"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyEmail = exports.createUser = void 0;

var _UserSchema = require("../model/UserSchema");

var _user = require("../services/email/user");

const createUser = (req, res) => {
  const user = new _UserSchema.User(req.body);
  user.save((error, result) => {
    if (error) {
      res.error(error, "Unable to create an account");
    } else {
      (0, _user.sendWelcomeEmail)(req.body.email, req.body.otp);
      res.success(result, "Registered successfully");
    }
  });
};

exports.createUser = createUser;

const verifyEmail = (req, res) => {
  _UserSchema.User.findOne({
    $and: [{
      token: req.token
    }, {
      otp: req.body.otp
    }]
  }).exec((error, result) => {
    if (error || result === null) {
      res.error(error, "Invalid otp");
    } else {
      _UserSchema.User.findOneAndUpdate({
        token: req.token
      }, {
        $set: {
          is_email_verified: 1
        }
      }).exec();

      res.success(result, "Email verified successfully", 200);
    }
  });
};

exports.verifyEmail = verifyEmail;