// require
const assert = require('assert');
const funcs = require('./say-hello');

const sayHello = funcs.sayHello;

console.log(hello);

// console.log(assert);

// assert()
// assert.equal()

const actual = sayHello('Alice');
const expected = 'hello there Alice';

// console.assert(result === 'hello there Bob', 'we got the wrong output');
assert.strictEqual(actual, expected);
