/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

function inverse(array) {
  if (array === null && array.length === 0) {
    return [];
  } else if (array.every((element) => isNaN(element) === false)) {
  

  for (let i = 0; i < array.length; i++) {
    array[i] *= -1;
  }
  return array;
}}
console.log(inverse(["bob",5,-6]));

/*const array = [1, 2, 3, 4, 5]
for (let i = 0 ; i < array.length ; i++){
  array[i]*= -1;
}
console.log(array)*/
