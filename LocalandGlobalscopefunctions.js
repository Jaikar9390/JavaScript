// //Global Scope and functions
// var myGlobal = 10;
// function fun1() {
//   oopsGlobal = 5;
// }
// function fun2() {
//   var output = " ";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal : " + myGlobal;
//   }
//   if (typeof myGlobal != "undefined") {
//     output += " oopsGlobal : " + oopsGlobal;
//   }
//   console.log(output);
// }
// fun1();
// fun2();

// Local scope and functions
// function myLocalScope() {
//   var myVar = 5;
//   console.log(myVar);
// }
// myLocalScope();

// Local vs Global Scope in Functions
//It is possible global and local variables with same name.When you do this the local variable takes president over the Global variables
// var outerWear = "T-Shirt";
// function myOutFit() {
//   return outerWear;
// }
// console.log(myOutFit());
//
// var outerWear = "T-Shirt";
function myOutFit() {
  var outerWear = "sweater";

  return outerWear;
}
console.log(myOutFit());
console.log(outerWear);

// Return a value from a function
// function minusSeven(num) {
//   return num - 7;
// }
// console.log(minusSeven(10));

//
// function timesFive(num) {
//   return num * 5;
// }
// console.log(timesFive(5));

//Understanding undefined values returned from a function

var sum = 0;
function addThree() {
  sum = sum + 3;
}
console.log(addThree());
// This is undefined

// ------Assignment with a return function--------//
// var processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }
// console.log(processArg());
// processed = processArg(7);

//----Stand in line---//
// function nextInLine(arr, item) {
//   arr.push(item);
//   return arr.shift();
// }
// var testArr = [1, 2, 3, 4, 5];
// console.log(testArr);
// console.log(nextInLine(testArr, 6));
// console.log(testArr);
