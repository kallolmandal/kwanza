// Require everything we need (including our function!)
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var startInterval = require('..');

describe('startInterval', function() {

  // Before each spec, make the fake spy and clock.
  var fn, clock;
  beforeEach(function() {
    fn = sinon.spy();
    clock = sinon.useFakeTimers();
  });

  // After each spec, cancel the interval we start and restore the clock.
  var interval;
  afterEach(function() {
    clearInterval(interval);
    clock.restore();
  });

  it('calls the function immediately', function() {
    // Notice how our code is much shorter!
    interval = startInterval(fn, 1000);
    expect(fn.calledOnce).to.be.true;
  });

  it('calls the function many times over time', function() {
    interval = startInterval(fn, 100);
    clock.tick(99);
    expect(fn.callCount).to.equal(1);
    clock.tick(2);
    expect(fn.callCount).to.equal(2);
    clock.tick(100);
    expect(fn.callCount).to.equal(3);
    clock.tick(100);
    expect(fn.callCount).to.equal(4);
  });

});