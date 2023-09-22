const expect = require('chai').expect;
const request = require('request');

describe('Basic Integration testing', function() {
  const URL = 'http://localhost:7865';
  
  it('returns correct response for GET /', function(done) {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(res.body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
