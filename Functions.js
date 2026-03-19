// const { ourTrueOrFalse } = require("./Conditionsif");

// //Reusable code with functions
// function ourReusableFunction() {
//   console.log("Hello World");
// }
// ourReusableFunction();

// // Passing values to functions with args
// function ourFunctionWithArgs(a, b) {
//   console.log(a - b);
// }
// ourFunctionWithArgs(10, 5);
// //

// function ourFunctionWithArgs(a, b) {
//   console.log(a + b);
// }
// ourFunctionWithArgs(10, 5);
// console.log(ourTrueOrFalse(true));

// const wallHeight = 80;

// function calculate(value) {
//   // const newValue = value * 2.54;
//   return value * 2.54;
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);

// function calculate(value) {
//   // console.log("The value in cm is:" + value * 2.54);
//   return value * 2.54;
// }

// const width = calculate(100);
// const height = calculate(80);

// const dimensions = [width, height];
// console.log(dimensions);
function addNumbers(num1, num2) {
  return num1 + num2;
}
const firstValue = addNumbers(5, 5);
const secondValue = addNumbers(12, 13);

const addNum = function (num1, num2) {
  return num1 + num2;
};
const thirdValue = addNum(100, 200);

let jai = [firstValue, secondValue];
console.log(jai);
