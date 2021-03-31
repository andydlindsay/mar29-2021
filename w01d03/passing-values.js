// const changeToTen = function(num) {
//   num = 10;
// };

// const myNum = 5;
// console.log('before', myNum); // 5
// myNum += changeToTen(myNum);
// // myNum = myNum + changeToTen(myNum); // myNum = 5 + 10
// console.log('after', myNum); // 5, 10

const changeMyObj = function(obj) {
  obj.name = 'Bob';
  console.log(obj === student);
};

const student = {
  name: 'Alice'
};

console.log('before', student); // { name: 'Alice' }
changeMyObj(student);
console.log('after', student); // { name: '' }


// {} === {}
// const myObj = {};
// const otherObj = {};
// myObj === otherObj;