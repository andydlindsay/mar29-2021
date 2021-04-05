/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // 1. make separate stacks
  // countLetters

  // set up an object to hold our numbers
  const stacks = {};

  // loop through the array
  for (const element of arr) {
    if (stacks[element]) {
      // if we've seen the number before, increment our current count
      stacks[element] += 1;
    } else {
      // if we haven't, then we want to start with an initial value of 1
      stacks[element] = 1;
    }
  }

  // 2N
  // N * N === N^2

  // console.log(stacks);

  // 2. determine which stack is the highest

  // set up two variables: one to hold the key, one to hold the value
  let key = null;
  let currentHighest = -Infinity; // 0

  // loop through the stacks object
  for (const num in stacks) {
    // compare the value, against our current highest value
    const currentVal = stacks[num];
    if (currentVal > currentHighest) {
      // if the value is higher, replace both highest value and key
      key = num;
      currentHighest = currentVal;
    }
  }

  // return the key
  return key;
};

// Don't change below:
module.exports = { mode };
