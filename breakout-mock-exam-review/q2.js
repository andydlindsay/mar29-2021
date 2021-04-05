/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// [6,2,3,4,9,6,1,0]
//  0 1 2 3 4 5 6 7

//  8 / 2 === 4 - 1 === 3

const median = function(arr) {
  // sort the array
  arr.sort();

  // calculate the middle index (indices)
  const middleIndex = Math.floor(arr.length / 2);

  // is the array odd or even length?
  if (arr.length % 2 === 1) {
    // odd length
    const middleValue = arr[middleIndex];
    return middleValue;
  }
    
  // even length
  // const middleIndex = arr.length / 2;
  const otherIndex = middleIndex - 1;
  const valueOne = arr[middleIndex];
  const valueTwo = arr[otherIndex];

  const average = (valueOne + valueTwo) / 2;
  
  // return the rounded value
  return round(average);
};

// Don't change below:
module.exports = { median };
