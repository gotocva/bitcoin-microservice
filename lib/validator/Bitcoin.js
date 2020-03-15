"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBalance = exports.createAddress = void 0;

const Joi = require('@hapi/joi');

const createAddressSchema = Joi.object({
  coin: Joi.string().required(),
  coin_type: Joi.string().valid(["COIN", "TOKEN"]).required(),
  environment: Joi.string().valid(["TEST_NET", "MAIN_NET"]).required(),
  reference_id: Joi.string(),
  api_key: Joi.string(),
  description: Joi.string()
});

const createAddress = (req, res, next) => {
  let validator = createAddressSchema.validate(req.body);

  if (validator.error === null) {
    req.body.environment = req.body.environment.toUpperCase();
    req.body.coin_type = req.body.coin_type.toUpperCase();
    req.body.coin = req.body.coin.toLowerCase();
    next();
  } else {
    res.error(validator.error.details, "VALIDATION_ERROR", 420);
  }
};

exports.createAddress = createAddress;
const getBalanceSchema = Joi.object({
  coin: Joi.string().required(),
  from_address: Joi.string().max(500, 'utf8').required(),
  coin_type: Joi.string().valid(["COIN", "TOKEN"]).required(),
  environment: Joi.string().valid(["TEST_NET", "MAIN_NET"]).required(),
  reference_id: Joi.string(),
  api_key: Joi.string(),
  description: Joi.string()
}); //name: Joi.string().max(10, 'utf8').required(),

const getBalance = (req, res, next) => {
  let validator = getBalanceSchema.validate(req.body);

  if (validator.error === null) {
    req.body.environment = req.body.environment.toUpperCase();
    req.body.coin_type = req.body.coin_type.toUpperCase();
    req.body.coin = req.body.coin.toLowerCase();
    next();
  } else {
    res.error(validator.error.details, "VALIDATION_ERROR", 420);
  }
};

exports.getBalance = getBalance;