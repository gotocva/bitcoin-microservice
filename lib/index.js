"use strict";

var _index = require("./bootstrap/index");

var _index2 = require("./config/index");

var _api = _interopRequireDefault(require("./router/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// route injection
_index.app.use('/api/v1/', _api.default);

_index.app.get('/ping', function (req, res) {
  res.send("pong");
}); // 404 route


_index.app.use(function (req, res, next) {
  res.error("path not found", "path not found", 404);
});

_index.app.listen(_index2.env.PORT, () => {
  console.clear();
  console.log("application running on PORT > ".concat(_index2.env.PORT, " \n"));
});