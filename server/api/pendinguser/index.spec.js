'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pendinguserCtrlStub = {
  index: 'pendinguserCtrl.index',
  show: 'pendinguserCtrl.show',
  create: 'pendinguserCtrl.create',
  update: 'pendinguserCtrl.update',
  destroy: 'pendinguserCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pendinguserIndex = proxyquire('./index.js', {
  'express': {
    Router: function Router() {
      return routerStub;
    }
  },
  './pendinguser.controller': pendinguserCtrlStub
});

describe('Pendinguser API Router:', function () {

  it('should return an express router instance', function () {
    expect(pendinguserIndex).to.equal(routerStub);
  });

  describe('GET /api/pendingusers', function () {

    it('should route to pendinguser.controller.index', function () {
      expect(routerStub.get.withArgs('/', 'pendinguserCtrl.index')).to.have.been.calledOnce;
    });
  });

  describe('GET /api/pendingusers/:id', function () {

    it('should route to pendinguser.controller.show', function () {
      expect(routerStub.get.withArgs('/:id', 'pendinguserCtrl.show')).to.have.been.calledOnce;
    });
  });

  describe('POST /api/pendingusers', function () {

    it('should route to pendinguser.controller.create', function () {
      expect(routerStub.post.withArgs('/', 'pendinguserCtrl.create')).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/pendingusers/:id', function () {

    it('should route to pendinguser.controller.update', function () {
      expect(routerStub.put.withArgs('/:id', 'pendinguserCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/pendingusers/:id', function () {

    it('should route to pendinguser.controller.update', function () {
      expect(routerStub.patch.withArgs('/:id', 'pendinguserCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/pendingusers/:id', function () {

    it('should route to pendinguser.controller.destroy', function () {
      expect(routerStub.delete.withArgs('/:id', 'pendinguserCtrl.destroy')).to.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map
