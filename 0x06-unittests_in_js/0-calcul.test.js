const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('tests sum of two integers', function() {
    const result = calculateNumber(3, 5);
    assert.equal(result, 8);
  });
  it('tests the sum of integer and float rounds up', function() {
    const result = calculateNumber(2, 6.7);
    assert.equal(result, 9);
  });
  it('tests the sum of float and integer', function() {
    const result = calculateNumber(3.2, 5);
    assert.equal(result, 8);
  });
  it('tests the sum of two floats', function() {
    const result = calculateNumber(0.7, 4.9);
    assert.equal(result, 6);
  });
  it('tests the sum of positive and negative number', function() {
    const result = calculateNumber(-8, 6.9);
    assert.equal(result, -1);
  });
});
