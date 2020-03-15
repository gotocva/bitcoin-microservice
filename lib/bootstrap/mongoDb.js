"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _env = _interopRequireDefault(require("../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = _env.default.MONGODB;

try {
  // mongodb connection established
  const _uri = "mongodb://".concat(config.host, ":").concat(config.port, "/").concat(config.db);

  const _options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  };

  _mongoose.default.connect(_uri, _options, error => {
    if (error) {
      console.error('Error : unable to connect mongodb\n' + error.toString());
    } else {
      console.error("Mongodb connected successfully");
    }
  });
} catch (exp) {
  console.log('Exception occurs' + exp);
}

const conn = true;
module.exports = conn;