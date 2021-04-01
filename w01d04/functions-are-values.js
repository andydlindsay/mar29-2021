const firstName = 'Alice';
console.log(firstName);

const arr = [];
const obj = {};
const copy = obj;

// function sayHello(firstName) {
  //   console.log(`hello ${firstName}`);
  // }
  
const sayHello = function(firstName) {
  console.log(`hello ${firstName}`);
};

const otherFunc = sayHello;
const anotherLayer = otherFunc;
anotherLayer('Carol');

// sayHello(firstName);

// sayHello.mySecretMessage = 'hello world';
// console.log(sayHello.mySecretMessage);

const log = console.log;
log(sayHello);

// jQuery();
// const $ = jQuery;
// $();

