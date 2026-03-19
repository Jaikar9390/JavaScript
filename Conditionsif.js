function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes ,it is true";
  }
  return "No ,it is false";
}
console.log(ourTrueOrFalse(true));

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(12));

//-----Strictly Equality operator---//
function strictlyEqual(val) {
  if (val === 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(strictlyEqual(12));

function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(12, "12"));

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(12, "12"));

//Comparision with the Inequality---//
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(99));

//---Comparision with Equality Operator--//
function testEqual(val) {
  if (val == 10) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));

//------Comparision with Strict Equality---//
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict("7"));

//----Practicing different values---//
function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));

function compareEquality(a, b) {
  if (a !== b) {
    return "NotEqual";
  }
  return " Equal";
}
console.log(compareEquality(10, 10));
