function testLogicAnd(val) {
  var result = " ";
  if (val <= 50 || val >= 25) {
    return "Outside";
  } else {
    return "Inside";
  }
}
console.log(testLogicAnd(27));

//----Else-if Statements---//
function testLogicAnd(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testLogicAnd(4));

//---Logical order of if statement--//
function testLogicAnd(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(testLogicAnd(5));

//----Chaining if statements-----//
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(19));
