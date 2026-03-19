var contacts = [
  {
    firstName: "Ake",
    lastName: "Lane",
    number: "0543236543",
    likes: ["pizza", "coding", "brownie", "points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Home"],
  },
  {
    firstName: "Sherlock",
    lastName: "Hames",
    number: "04873456543",
    likes: ["Int Cases", "Vio"],
  },
  {
    firstName: "Kris",
    lastName: "Vos",
    number: "unknown",
    likes: ["Javascript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}
var data = lookUpProfile("Sherlock", "likes");
console.log(data);
