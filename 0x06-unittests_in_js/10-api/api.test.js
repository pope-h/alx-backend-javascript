const expect = require('chai').expect;
const request = require('request');

describe('Basic Integration testing', function() {
  const URL = 'http://localhost:7865';
  
  it('returns correct response for GET /', function(done) {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('returns correct response for GET /cart/:id', function(done) {
    request.get(`${URL}/cart/2`, (_err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(body).to.be.eq('Payment methods for cart 2');
      done();
    });
  });

  it('returns error code for GET /cart/:id with string id', function(done) {
    request.get(`${URL}/cart/two`, (_err, res, _body) => {
      expect(res.statusCode).to.be.eq(404);
      done();
    });
  });

  it('returns error codde for GET /cart/:id with alphanumeric id', function(done) {
    request.get(`${URL}/cart/23d-4rt-8j6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('returns valid response for POST /login', function(done) {
    request.post(`${URL}/login`, {json: {userName: 'Pope'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(body).to.be.equal('Welcome Pope');
      done();
    });
  });

  it('returns valid response for POST /available_payments', function(done) {
    const payload = (
      {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }
    );

    request.get(`${URL}/available_payments`, (_err, res, body) => {
      const parsedBody = JSON.parse(body);

      expect(res.statusCode).to.be.eq(200);
      expect(parsedBody).to.be.deep.equal(payload);
      done();
    });
  });
});
