"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  mobile_number: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please enter a valid email']
  },
  token: {
    type: String,
    required: true
  },
  otp: {
    type: Number,
    required: true
  },
  is_email_verified: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 1
  }
}, {
  versionKey: false
});
const User = mongoose.model('User', UserSchema);
exports.User = User;