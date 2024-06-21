/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

function build(n) {
    let newArray = [];
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat()
    let stars = "*".repeat()  
    let floor = spaces + stars + spaces;
  newArray.push(stars)}
  return newArray;
} 

console.log(build(5));
