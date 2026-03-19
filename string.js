// export const capitalizeString = (str) => str.toUpperCase();

// let n = 2;
// function square(number) {
//   let ans = number * number;
//   return ans;
// }
// let square2 = square(n);
// let square4 = square(4);
// console.log(square2);
// console.log(square4);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    // console.log(i);
  }, 1000);
}

let obj1 = { name: "John" };
let obj2 = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);
