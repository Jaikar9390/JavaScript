var ourDog = {
  name: "Computer",
  legs: 4,
  tails: 1,
  friends: ["everything"],
};
console.log(ourDog);

//Accessing Object Properties with .
var testObj = {
  hot: "ball",
  shirt: "louis",
  shoes: "cleats",
};
var hotValue = testObj.hot;
var shirtValue = testObj.shirt;
console.log(hotValue);
console.log(shirtValue);

//Accessing Object Properties with []
var testObj = {
  hot: "ball",
  shirt: "louis",
  shoes: "cleats",
};
var hotValue = testObj["hot"];
var shirtValue = testObj["shirt"];
console.log(hotValue);
console.log(shirtValue);

//Updating Object Properties
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};
ourDog.name = "Happy Camper";
console.log(ourDog);

//Adding Object Properties
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};
ourDog.newname = "Happy Camper";
console.log(ourDog);

//Deteting Object Properties
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};
delete ourDog.newname;
console.log(ourDog);

//Accessing nested objects
var myStorage = {
  car: {
    Inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var gloveBoxContents = myStorage.car.Inside["glove box"];
console.log(gloveBoxContents);
