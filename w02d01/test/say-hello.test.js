// require
const assert = require('assert');
const funcs = require('../say-hello');
const sayHello = funcs.sayHello;

// describe(); // describing the tests we are running

// it(); // is the test itself

describe('tests for the sayHello function', () => {
  
  it('returns "hello there Alice" when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'hello there Alice';

    assert.strictEqual(actual, expected);
    // throw new Error('uh oh!!!');
  });

});
