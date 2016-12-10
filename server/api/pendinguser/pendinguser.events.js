/**
 * Pendinguser model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _pendinguser = require('./pendinguser.model');

var _pendinguser2 = _interopRequireDefault(_pendinguser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PendinguserEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
PendinguserEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _pendinguser2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    PendinguserEvents.emit(event + ':' + doc._id, doc);
    PendinguserEvents.emit(event, doc);
  };
}

exports.default = PendinguserEvents;
//# sourceMappingURL=pendinguser.events.js.map
