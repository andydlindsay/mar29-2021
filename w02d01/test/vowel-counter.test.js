const assert = require('assert').strict;
const vowelCounter = require('../vowel-counter');

describe('tests for vowelCounter', () => {

  it('returns 3 when given the string "orange"', () => {
    const actual = vowelCounter('orange');
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('returns 5 when given the string "lighthouse labs"', () => {
    const actual = vowelCounter('lighthouse labs');
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('returns 5 when given the string "aeiou"', () => {
    const actual = vowelCounter('aeiou');
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('returns null if not string is passed', () => {
    const actual = vowelCounter();
    const expected = null;

    assert.equal(actual, expected);
  });

});
