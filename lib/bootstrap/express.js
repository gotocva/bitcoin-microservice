"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import npm packages 
const app = (0, _express.default)();

const expressWs = require('express-ws')(app);

const useragent = require('express-useragent');

app.use(useragent.express());

const router = _express.default.Router();
/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */


const success = (req, res, next) => {
  res.success = function (body, message) {
    let code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    let response = {};
    response['HTTP_STATUS_CODE'] = code || 200;
    response['status'] = true;
    response['message'] = message || req.__lang().success;
    response['body'] = body;
    res.status(code).json(response).end();
  };

  next();
};

app.use(success);
/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

const error = (req, res, next) => {
  res.error = function (body, message) {
    let code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
    console.error("Error Occured on ".concat(req.method, "; URI = ").concat(req.originalUrl, ";"));
    console.error(body);
    let response = {};
    response['HTTP_STATUS_CODE'] = code || 500;
    response['status'] = false;
    response['message'] = message || req.__lang().failed;
    response['body'] = body;
    res.status(code).json(response).end();
  };

  next();
};

app.use(error);
/**
 * log all requests
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

const logAllRequests = (req, res, next) => {
  const startHrTime = process.hrtime();
  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.info("Method = ".concat(req.method, "; URI = ").concat(req.originalUrl, "; ").concat(res.statusCode, " ").concat(res.statusMessage, "; Elapsed time : ").concat(elapsedTimeInMs, "; ").concat(res.get('Content-Length') || 0, "b sent"));
  });
  next();
};

app.use(logAllRequests);
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json()); // enable CORS - Cross Origin Resource Sharing

app.use((0, _cors.default)());
module.exports = {
  app,
  router
};