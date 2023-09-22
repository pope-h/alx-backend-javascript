const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Util.calculateNumber with the correct args', function() {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.eq(1);
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
