//How to write style in js for single item
const title = document.querySelector("#main-header");
title.style.color = "red";
console.log(title);

//How to write style in js for all item
const titleItem = document.querySelectorAll(".list-items");
for (i = 0; i < titleItem.length; i++) {
  listItems[i].style.fontSize = "5rem";
}
console.log(titleItem);

//Adding Elements
ul.append(li);

//Modifying the text
li.innerText = "X-men";

//Modifying Attributes and classes
li.setAttributes("id", "main-heading");
li.removeAttribute("id");

//
const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));

li.classList.add("list-items");
li.classList.remove("list-items");

//contains -->this works as boolean i.e true/false
console.log(li.classList.contains("list-items"));

//Remove
li.remove();
