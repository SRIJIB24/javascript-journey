// task 1
function login() {
  if (username.value === "" || password.value === "") {
    message.textContent = "Please enter username and password";
  } else {
    message.textContent = "Login successful";
  }
}
loginBtn.addEventListener("click", login);


// task2 + task3
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const heading = document.getElementById("heading");

function login() {
  if (username.value.trim() === "" || password.value.trim() === "") {
    message.textContent = "Please enter username and password";
  } else {
    message.textContent = "log in success";
    heading.textContent = `Welcome ${username.value}`;
    username.value = "";
    password.value = "";
  }
}
document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });

