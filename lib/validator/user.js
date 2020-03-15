"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userValidator = void 0;

const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email()
});

const userValidator = (req, res, next) => {
  let validator = schema.validate(req.body);

  if (validator.error === null) {
    next();
  } else {
    res.error(validator.error.details, "VALIDATION_ERROR", 420);
  }
};

exports.userValidator = userValidator;