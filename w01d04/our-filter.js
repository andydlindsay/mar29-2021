const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

const returnArr = [];
for (const word of words) {
  if (word.length > 6) {
    returnArr.push(word);
  }
}

console.log(words);
console.log();
console.log(result);
console.log(returnArr);

const filter = (arr, callback) => {
  // set up a return array
  const returnArr = [];

  // iterate through the given array
  for (const elem of arr) {
    // call the callback for each element of the array
    const result = callback(elem);

    // check if the callback returned truthy
    if (result) {
      // if it did, push that element into our return array
      returnArr.push(elem);
    }
  }

  // return the return array
  return returnArr;
};

const filter1 = filter(words, word => word.length < 6);
console.log(filter1);
