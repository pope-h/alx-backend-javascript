const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToAPI', function() {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore();
  });

  it('verifies sendPaymentRequestToAPI logged result', function() {
    sendPaymentRequestToAPI(100, 20);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('verifies sendPaymentRequestToAPI logged result', function() {
    sendPaymentRequestToAPI(10, 10);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

});
