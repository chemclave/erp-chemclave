'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventSchema = new _mongoose2.default.Schema({
  name: String,
  problem_statement: String,
  event_info: String,
  registrations: Array,
  active: {
    type: Boolean,
    default: false
  }
});

exports.default = _mongoose2.default.model('Event', EventSchema);
//# sourceMappingURL=event.model.js.map
