const array = ["toto", 12, 14, true, "blue"];
//console.log(array);
// function sayHello() {}; fonction nommé
// const sayHello = () => {}; // arrow funct
// const sayHello = function () {}; fontion annonyme
// const sayHello = () => {
//   return "hello";
// };
// const sayHello = (param) => param;
// sayHello("hello");
// declaration d'une fonction :
const sum = (a, b) => a + b;
// l'excution d'une fonction
// console.log(sum(5, 6));
const result = (param) => {
  return param(4, 8);
};
//console.log(result(sum));

const newArray2 = [];
let j = 0
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    newArray2[j] = array[i];
    j++
  }}
console.log(newArray2);
