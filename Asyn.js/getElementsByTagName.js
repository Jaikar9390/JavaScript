// InnerText
const tagTest = document.getElementsByTagName("p")[1];
tagTest.innerHTML = "<h1>New Text</h1>";

//If i want to change all p tags
const tagTest = document.getElementsByTagName("p");

for (let i = 0; i < tagTest.length; i++) {
  tagTest[i].textContent = "Changed to new values";
}
