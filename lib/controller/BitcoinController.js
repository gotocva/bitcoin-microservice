"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBalance = exports.createAddress = void 0;

var _BlockCyper = _interopRequireDefault(require("../utils/blockcyper/BlockCyper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
const createAddress = async (req, res) => {
  let env = req.body.environment === "TEST_NET" ? "test3" : "main";
  const bcyper = new _BlockCyper.default(req.body.coin, env);
  await bcyper.createAddress().then(address => {
    res.success(address, "success");
  }).catch(error => {
    res.error(error, "error");
  });
};
/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */


exports.createAddress = createAddress;

const getBalance = async (req, res) => {
  let env = req.body.environment === "TEST_NET" ? "test3" : "main";
  const bcyper = new _BlockCyper.default(req.body.coin, env);
  bcyper.getBalance(req.body.from_address).then(balance => {
    res.success(balance, "success");
  }).catch(error => {
    res.error(error, "error");
  });
};

exports.getBalance = getBalance;