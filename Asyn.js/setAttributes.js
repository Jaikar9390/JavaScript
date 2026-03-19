const targetNav = document.querySelector("nav");
targetNav.setAttribute("style", "border:5px solid black");

const targetSide = document.querySelector(".sidenav");
targetSide.setAttrubute("style", "background-color:green");

//RemoveAttribute
const targetRemove = document.querySelector(".main");
targetRemove.removeAttribute("class");
