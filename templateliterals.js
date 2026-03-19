const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

//template literals
var x = "Java script";
var x = "Java Script";
var a = 10;
var b = 20;
console.log("sum of " + a + " and " + b + ": " + (a + b));
console.log(`Hello 'World'`);

//Example-1
function greet(name, age) {
  return `"Hello my name is ${name} and Iam  ${age} years old"`;
}
console.log(greet("Alice", 56));
console.log(greet("Bob", 22));

//Example-2
function createMessage(name, message) {
  return `Dear ${name},
  ${message},
  Regards,
  Your Friends`;
}
console.log(createMessage("Bob", "Hope you're doing well!"));

//Another example
const result = {
  success: ["max-length", "no-amid", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);
