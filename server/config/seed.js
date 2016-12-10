/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var _thing = require('../api/thing/thing.model');

var _thing2 = _interopRequireDefault(_thing);

var _user = require('../api/user/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_user2.default.find({ role: 'admin' }).remove().then(function () {
  _user2.default.create({
    provider: 'local',
    role: 'admin',
    name: 'Web Admin',
    email: 'admin@chemclave.org',
    password: 'y7uy7uy7u'
  }).then(function () {
    console.log('populated database');
  });
});
//# sourceMappingURL=seed.js.map
