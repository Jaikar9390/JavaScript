// // DOM Manipulation

// // GetElementById()

// const title = document.getElementById("main-heading");

// console.log(title);

// // GetElementByClassName()

// // const listItem = document.getElementsByClassName("list-items");

// // console.log(listItem);

// // GetElementByTagName()
// const listItems = document.getElementsByTagName("li");

// console.log(listItems);

// // querySelector()
// // const container = document.querySelector("div");
// // console.log(container);

// // querySelectorAll()
// const container = document.querySelectorAll("div");
// console.log(container);

// querySelector()
// const title = document.querySelector("#main-heading");
// title.style.color = "red";
// console.log(title);

// querySelectorAll()
const title = document.querySelectorAll(".list-items");
for (let i = 0; i < title.length; i++) {
  title[i].style.color = "purple";
}
console.log(title);
