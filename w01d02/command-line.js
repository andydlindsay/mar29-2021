// console.log('before', process.argv);

const args = process.argv;

// args.shift();
// args.shift();

// args.splice(0, 2);

const sliced = args.slice(2);
// console.log('sliced', sliced);
// console.log(args);
// console.log('after', process.argv);

// const inputArr = [ '5', '10', '15' ];

// for (const element of inputArr) {
//   console.log('element', element);
// }

// console.log();

// for (const index in inputArr) {
//   console.log('element', inputArr[index]);
// }

// console.log();

// for (let i = 0; i < inputArr.length; i++) {
//   console.log('element', inputArr[i]);
// }

// // let i = 0;
// // while (i < inputArr.length) {
// //   console.log('element', inputArr[i]);
// //   i++;
// // }

// console.log();

// inputArr.forEach(function(element) {
//   console.log('element', element);
// });

// const inputArr = [ '5', '10', '15', '3.14', '4.5', '-50' ];

let total = 0; // '0' + '5' === '05' + '10' + '0510'

for (const element of sliced) {
  // console.log('element', element);
  const converted = Number(element);

  if (Number.isInteger(converted) && converted > 0) {
    total += converted;
    // total = total + element;
  }
};

console.log('total', total);

// const myBool = false;

// if (myBool) {
//   console.log('hello world');
// }

// console.log('more stuff');

// if (err) throw err;
