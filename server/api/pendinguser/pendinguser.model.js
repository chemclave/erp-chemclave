'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PendinguserSchema = new _mongoose2.default.Schema({
  name: String,
  department: String,
  event: String,
  role: String,
  email: String,
  password: String
});

exports.default = _mongoose2.default.model('Pendinguser', PendinguserSchema);
//# sourceMappingURL=pendinguser.model.js.map
