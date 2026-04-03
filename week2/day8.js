//task 1 + task 2 + task 3
function h1Change() {
  document.querySelector("h1").textContent = "I am Srijib";
}

const heading = document.getElementById("heading");
const button = document.getElementById("btn");
const nameInput = document.getElementById("nameInput");
function titleChange() {
  heading.textContent = "Hello " + nameInput.value;
  document.body.style.backgroundColor = "lightblue";
  heading.style.color = "red";
}
button.addEventListener("click", titleChange);
