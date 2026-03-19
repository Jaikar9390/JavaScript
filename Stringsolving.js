// Length of string
var lastNameLength = 0;
var lastName = "Jaikar";
lastNameLength = lastName.length;
console.log(lastNameLength);

//  Bracket notation of any letter in string
var lastNameLength = 0;
var lastName = "Jaikar";
lastNameLength = lastName[1];
console.log(lastNameLength);

// String immutability
var mySelf = "Jaikar"; /*Immutability means  it does not changes*/
mySelf[0] = "H";
console.log(mySelf);

//Bracket notations to find last character in a string
var myNum = "Jaikar";
myNum = myNum[myNum.length - 1];
console.log(myNum);
