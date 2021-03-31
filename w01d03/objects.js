const studentOneStudentName = 'Alice';
const cohort = 'Mar292021';
const isLoggedIn = false;

// const studentThirtyTwoStudentName = 'Bob';

// arrays
const studentOneArr = ['Alice', 'Mar292021', false];
studentOneArr.push('more stuff');
const studentTwoArr = ['Bob', 'Mar292021', false];

studentOneArr[1]; // cohort

// collections of key/value pairs

const myArr = [];
myArr.push(1);

const studentOne = {
  name: 'Alice',
  cohort: 'Mar292021',
  isLoggedIn: false,
  teacherId: null,
  myArr: []
};

studentOne.myArr.push(2); // []

const studentTwo = {
  name: ''
};

studentOne['name']; // 'Alice'

console.log(studentOne['name']);
console.log();
studentOne.name;

const key = `name`;
const partialKey = 'me';
const firstPart = 'na';

studentOne[key] = 'Bob';
studentOne[`${firstPart}${partialKey}`] = 'Bob';
// studentOne.`${firstPart}${partialKey}` = 'Bob';
studentOne.key = 'Bob';

studentOne.name = 'Bob';

console.log(studentOne['name']);

studentOne['cohort'] = 'Mar292021';
// arr[1] = 'hello'

console.log(studentOne['cohort']);

// if (studentOne['cohort']) {
//   // studentOne has a cohort
// }

console.log(studentOne);
