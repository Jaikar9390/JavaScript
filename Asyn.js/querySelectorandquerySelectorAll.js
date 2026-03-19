//QuerySelector by id using css property
const newCompany = document.querySelector("#company");
newCompany.textContent = "Amazon";

//QuerySelector by class css property
const newCompany = document.querySelector(".company");
newCompany.textContent = "Flipkart";

//QuerySelector by Tags the first div will be selected and changes will be made
const newCompany = document.querySelector("div");
newCompany.textContent = "Jio Mart";

//If changes needed for all the divs then querySelectorAll
const newCompany = document.querySelectorAll("div");
for (let x = 0; x < newCompany.length; x++) {
  newCompany[x].textContent = "Employees";
}
