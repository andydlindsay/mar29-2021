/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const funcs = require('./q0');
const sum = funcs.sum;
const mean = funcs.mean;

// const {sum, mean} = require('./q0');

const stdev = function(arr) {
  // sqrt(averageSquare)

  const populationMean = mean(arr);
  
  // const differences = [];
  // for (const element of arr) {
    //   differences.push(element - populationMean);
    // }
    
  // console.log('population mean', populationMean);
  const differences = arr.map((element) => {
    return element - populationMean;
  });
  
  // console.log(differences);
  
  const squares = differences.map((element) => {
    return element * element;
    // return Math.pow(element, 2);
  });
  
  // console.log(squares);
  
  const sumOfSquares = sum(squares);
  
  // console.log(sumOfSquares);
  
  const numberOfValues = arr.length;

  const averageSquare = sumOfSquares / numberOfValues;

  const squareRoot = Math.sqrt(averageSquare);

  // console.log(squareRoot);

  return round(squareRoot);
};

// Don't change below:
module.exports = { stdev };
