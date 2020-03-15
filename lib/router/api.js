"use strict";

var _index = require("../bootstrap/index");

var UserController = _interopRequireWildcard(require("../controller/UserController"));

var BitcoinController = _interopRequireWildcard(require("../controller/BitcoinController"));

var _api = require("../middleware/api");

var _user = require("../validator/user");

var _Bitcoin = require("../validator/Bitcoin");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_index.router.post('/user', [_user.userValidator], UserController.store);

_index.router.post('/user/verify-otp', [_api.auth], UserController.verifyOtp);
/**
 * Bitcoin routes
 */


_index.router.post('/address/new', [_Bitcoin.createAddress], BitcoinController.createAddress);

_index.router.post('/address/balance', [_Bitcoin.getBalance], BitcoinController.getBalance);

module.exports = _index.router;