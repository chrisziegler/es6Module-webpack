'use strict';

var _leftpad = require('./leftpad');

var _leftpad2 = _interopRequireDefault(_leftpad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serNos = [6934, 23111, 23114, 1001, 211161];
var strSNos = serNos.map(function (sn) {
  return (0, _leftpad2.default)(sn, 8, '0');
});
console.log(strSNos);