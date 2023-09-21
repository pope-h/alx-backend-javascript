//const assert = require('assert');
const chai = require('chai');
const expect = chai.expect
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('tests sum of two integers', function() {
    const result = calculateNumber('SUM', 3, 5);
    expect(result).to.equal(8);
    });
    it('tests the sum of integer and float rounds up', function() {
      const result = calculateNumber('SUM', 2, 6.7);
      expect(result).to.eq(9);
    });
    it('tests the sum of float and integer', function() {
      const result = calculateNumber('SUM', 3.2, 0);
      expect(result).to.eq(3);
    });
    it('tests the sum of two floats', function() {
      const result = calculateNumber('SUM', 3.7, 1.5);
      expect(result).to.eq(6);
    });
    it('tests the sum of positive and negative number', function() {
      const result = calculateNumber('SUM', -8, 6.9);
      expect(result).to.eq(-1);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      const result = calculateNumber('SUM', 2.499999, 3.499999);
      expect(result).to.eq(5);
    });
  });

  describe('SUBTRACT', function() {
    it('tests difference of two integers', function() {
    const result = calculateNumber('SUBTRACT', 3, 5);
    expect(result).to.equal(-2);
    });
    it('tests the difference of integer and float rounds up', function() {
      const result = calculateNumber('SUBTRACT', 2, 6.7);
      expect(result).to.eq(-5);
    });
    it('tests the difference of float and integer', function() {
      const result = calculateNumber('SUBTRACT', 3.2, 0);
      expect(result).to.eq(3);
    });
    it('tests the difference of two floats', function() {
      const result = calculateNumber('SUBTRACT', 3.7, 1.5);
      expect(result).to.eq(2);
    });
    it('tests the difference of positive and negative number', function() {
      const result = calculateNumber('SUBTRACT', -8, 6.9);
      expect(result).to.eq(-15);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      const result = calculateNumber('SUBTRACT', 2.499999, 3.499999);
      expect(result).to.eq(-1);
    });
  });

  describe('DIVIDE', function() {
    it('tests division of two integers', function() {
    const result = calculateNumber('DIVIDE', 3, 5);
    expect(result).to.equal(0.6);
    });
    it('tests the division of integer and float rounds up', function() {
      const result = calculateNumber('DIVIDE', 2, 4.7);
      expect(result).to.eq(0.4);
    });
    it('tests the division of float and integer', function() {
      const result = calculateNumber('DIVIDE', 3.2, 0);
      expect(result).to.eq('Error');
    });
    it('tests the division of two floats', function() {
      const result = calculateNumber('DIVIDE', 3.7, 1.5);
      expect(result).to.eq(2);
    });
    it('tests the division of positive and negative number', function() {
      const result = calculateNumber('DIVIDE', -8, 4.9);
      expect(result).to.eq(-1.6);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      const result = calculateNumber('DIVIDE', 2.499999, 4.499999);
      expect(result).to.eq(0.5);
    });
  });

});
