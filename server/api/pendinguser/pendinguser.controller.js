/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pendingusers              ->  index
 * POST    /api/pendingusers              ->  create
 * GET     /api/pendingusers/:id          ->  show
 * PUT     /api/pendingusers/:id          ->  update
 * DELETE  /api/pendingusers/:id          ->  destroy
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pendinguser = require('./pendinguser.model');

var _pendinguser2 = _interopRequireDefault(_pendinguser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _lodash2.default.merge(entity, updates);
    return updated.save().then(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.remove().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Pendingusers
function index(req, res) {
  return _pendinguser2.default.find().exec().then(respondWithResult(res)).catch(handleError(res));
}

// Gets a single Pendinguser from the DB
function show(req, res) {
  return _pendinguser2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}

// Creates a new Pendinguser in the DB
function create(req, res) {
  return _pendinguser2.default.create(req.body).then(respondWithResult(res, 201)).catch(handleError(res));
}

// Updates an existing Pendinguser in the DB
function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return _pendinguser2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}

// Deletes a Pendinguser from the DB
function destroy(req, res) {
  return _pendinguser2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(removeEntity(res)).catch(handleError(res));
}
//# sourceMappingURL=pendinguser.controller.js.map
