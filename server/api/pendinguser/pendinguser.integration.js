'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newPendinguser;

describe('Pendinguser API:', function () {

  describe('GET /api/pendingusers', function () {
    var pendingusers;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/pendingusers').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        pendingusers = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      expect(pendingusers).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/pendingusers', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/pendingusers').send({
        name: 'New Pendinguser',
        info: 'This is the brand new pendinguser!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newPendinguser = res.body;
        done();
      });
    });

    it('should respond with the newly created pendinguser', function () {
      expect(newPendinguser.name).to.equal('New Pendinguser');
      expect(newPendinguser.info).to.equal('This is the brand new pendinguser!!!');
    });
  });

  describe('GET /api/pendingusers/:id', function () {
    var pendinguser;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/pendingusers/' + newPendinguser._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        pendinguser = res.body;
        done();
      });
    });

    afterEach(function () {
      pendinguser = {};
    });

    it('should respond with the requested pendinguser', function () {
      expect(pendinguser.name).to.equal('New Pendinguser');
      expect(pendinguser.info).to.equal('This is the brand new pendinguser!!!');
    });
  });

  describe('PUT /api/pendingusers/:id', function () {
    var updatedPendinguser;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/pendingusers/' + newPendinguser._id).send({
        name: 'Updated Pendinguser',
        info: 'This is the updated pendinguser!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedPendinguser = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedPendinguser = {};
    });

    it('should respond with the updated pendinguser', function () {
      expect(updatedPendinguser.name).to.equal('Updated Pendinguser');
      expect(updatedPendinguser.info).to.equal('This is the updated pendinguser!!!');
    });
  });

  describe('DELETE /api/pendingusers/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/pendingusers/' + newPendinguser._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when pendinguser does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/pendingusers/' + newPendinguser._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=pendinguser.integration.js.map
