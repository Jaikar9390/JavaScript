//Store multiple values with arrays
var ourArray = ["Jou", 23];

//Nested Arrays
var ourArrays = [
  ["John", 23],
  ["Jaikar", 22],
];

//Accessing arrays with indexes
var ourArray = [20, 30, 40];
var myArray = ourArray[0];
console.log(myArray);

//Modify Array with indexes
var myArray = [10, 20, 2, 30, 50];
myArray[1] = 2;
console.log(myArray);

//Accessing multi-dimention arrays with index
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [[7, 8, 9], 2],
];
var myPar = myArray[2][0];
console.log(myPar);

//Manipulate arrays with push -- Elements will be added last
var myData = [10, 20, 30];
myData.push(1);
console.log(myData);

//Manipulate arrays with pop -- Elements will be removed from the last
var myData = [1, 0, 5, 7, 9];
myData.pop();
console.log(myData);

//Manipulating Arrays with shift -- Removes first element
var myArray = [10, 20];
myArray.shift();
console.log(myArray);

//Manipulate Arrays with unshift
var myArray = [10, 20, 30, 40, 50, 60, 70];
myArray.unshift(2);
console.log(myArray);

///Shopping list
var myList = [["apple", 2], ["banana", 3][("guava", 2)]];

const fruit1 = "apple";
const fruit2 = "banana";
const fruit3 = "cherry";
const fruit4 = "blueberry";
const fruit5 = "blackberry";

const fruitList = [
  "apple",
  "banana",
  "cherry",
  "blueberry",
  "blackberry",
  5,
  undefined,
  null,
  true,
  false,
];

// console.log(fruitList);
// console.log(fruitList[5]);

let bestFruits = fruitList[4];

fruitList[5] = "grapes";
console.log(fruitList);
