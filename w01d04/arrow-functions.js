// // ES6, borrowed from CoffeeScript
// const sayHello = function(firstName) {
//   console.log(`hello ${firstName}`);
// };

// // => ->
// const sayHello = (firstName, age) => {
//   console.log(`hello ${firstName}`);
// };

// const funcThatAcceptsAnotherFunc = function(anotherFunc) {
//   anotherFunc('Dean');
// };

// funcThatAcceptsAnotherFunc(function(firstName) {
//   console.log(`hello ${firstName}`);
// });

// funcThatAcceptsAnotherFunc(firstName => {
//   console.log(`hello ${firstName}`);
// });

// const addTwo = function (num) {
//   return (
//     num + 2
//   );
// };

// const addTwo = function (num) {
//   return num + 2;
// }

// const addTwo = num => (
//   num + 2
// );

const addTwo = num => num + 2;

const result = addTwo(4); // 6
console.log(result);

// names.forEach((namePassed, index) => {
//   if (namePassed === 'Waldo') waldosIndex = index;
// });

// names.forEach((namePassed, index) => namePassed === 'Waldo' ? index : null);
