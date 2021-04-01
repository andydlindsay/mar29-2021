const funcThatAcceptsAnotherFunc = function(anotherFunc) {
  // console.log(anotherFunc);
  anotherFunc(42); // sayHello('Elise'); // console.log('Elise');
};

const sayHello = function(firstName) {
  console.log(`hello ${firstName}`);
};

const username = 'Alice';
// sayHello(username);
// sayHello('Alice');

const addTwo = function (num) {
  console.log(num + 2);
}

arr.map(function(element) {});

funcThatAcceptsAnotherFunc(sayHello);
funcThatAcceptsAnotherFunc(function(firstName) {
  console.log(`hello ${firstName}`);
});



// funcThatAcceptsAnotherFunc(console.log);
// funcThatAcceptsAnotherFunc(addTwo);


// assertEqArrays([middle([1,2,3])], [2]);