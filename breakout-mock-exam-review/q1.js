/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // Math.min(...arr);

  // start with an initial value for min number
  let currentMin = Infinity;

  // loop through the array
  for (const element of arr) {
    // compare each element against the current minimum
    if (element < currentMin) {
      // if the element is less, set the current minimum to the element
      currentMin = element;
    }
  }

  // return the min number
  return currentMin;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // Math.max(...arr);

  // start with an arbitrarily low value
  let currentMax = -Infinity;

  // loop through the array
  for (const element of arr) {
    // compare each element against the current high value
    if (element > currentMax) {
      // if the element is greater, replace current max value
      currentMax = element;
    }
  }

  // return current max value
  return currentMax;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const minimum = min(arr);
  const maximum = max(arr);
  return maximum - minimum;
};

// Don't change below:

module.exports = { min, max, range };
