var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

//Iterate with for loops
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);

//Even numbers with a for loop
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

//Odd numbers with a for loop
var ourArray = [];

for (var i = 1; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

//Counting backwards in loop
var ourArray = [];
for (var i = 10; i > 0; i--) {
  ourArray.push(i);
}
console.log(ourArray);

//Backward even
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

//Backward even
var ourArray = [];
for (var i = 9; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

//Adding array numbers through loops
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);

//Nesting for loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
var product = multiplyAll([
  [1, 2],
  [3, 4],
]);
console.log(product);

//Do while loops
var myArray = [];
var i = 6;
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(i, myArray);
