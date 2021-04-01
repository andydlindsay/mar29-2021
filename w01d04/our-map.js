const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

const map = (arr, callback) => {
  const returnArr = [];
  // iterate through array
  for (const elem of arr) {
    // call the callback on each element of the array
    const returnVal = callback(elem);
    // take the return value and push it into a new array
    returnArr.push(returnVal);
    // returnArr.push(callback(elem));
  }
  // return the new array
  return returnArr;
};

const returnArr = [];

for (const elem of array1) {
  const result = elem * 2;
  returnArr.push(result);
}

console.log(map1);
console.log(returnArr);

// driver code
const map2 = map(array1, x => x * 2);
console.log(map2);

const map3 = map(['Dakota', 'Oreo', 'Scout', 'Dave', 'Akon', 'Leif'], dog => `gave ${dog} a treat!`);
console.log(map3);
