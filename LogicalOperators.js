function testGreaterThan(val) {
  if (val > 100) {
    return "over 100";
  }
  if (val > 10) {
    return "over 10";
  }
  return " under 10";
}
console.log(testGreaterThan(101));

//----Comparision with the greater than or equal to operator--//
function testGreaterThanOrEqual(val) {
  if (val >= 100) {
    return "over 100";
  }
  if (val >= 10) {
    return "over 10";
  }
  return " under 10";
}
console.log(testGreaterThanOrEqual(100));

//----Comparision with the less than operator---//
function testLessThan(val) {
  if (val < 10) {
    return "less than 10";
  }
  if (val < 100) {
    return "less than 100";
  }
  return " over 100";
}
console.log(testLessThan(9));

//-----Logical AND operator---//
function testLogicAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicAnd(24));

//-----Logical OR operator---//
function testLogicAnd(val) {
  if (val <= 50 || val >= 25) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicAnd(24));
