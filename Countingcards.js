var count = 0;
function cc(card) {
  switch (card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count--;
      break;
  }
  var holdbelt = "Hold";
  if (count > 0) {
    holdbelt = "Bet";
  }
}
cc(2), cc("K"), cc(10), cc("K"), cc("A");
console.log(cc(4));
