'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newEvent;

describe('Event API:', function () {

  describe('GET /api/events', function () {
    var events;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/events').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        events = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      expect(events).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/events', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/events').send({
        name: 'New Event',
        info: 'This is the brand new event!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newEvent = res.body;
        done();
      });
    });

    it('should respond with the newly created event', function () {
      expect(newEvent.name).to.equal('New Event');
      expect(newEvent.info).to.equal('This is the brand new event!!!');
    });
  });

  describe('GET /api/events/:id', function () {
    var event;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/events/' + newEvent._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        event = res.body;
        done();
      });
    });

    afterEach(function () {
      event = {};
    });

    it('should respond with the requested event', function () {
      expect(event.name).to.equal('New Event');
      expect(event.info).to.equal('This is the brand new event!!!');
    });
  });

  describe('PUT /api/events/:id', function () {
    var updatedEvent;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/events/' + newEvent._id).send({
        name: 'Updated Event',
        info: 'This is the updated event!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedEvent = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedEvent = {};
    });

    it('should respond with the updated event', function () {
      expect(updatedEvent.name).to.equal('Updated Event');
      expect(updatedEvent.info).to.equal('This is the updated event!!!');
    });
  });

  describe('DELETE /api/events/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/events/' + newEvent._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when event does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/events/' + newEvent._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=event.integration.js.map
