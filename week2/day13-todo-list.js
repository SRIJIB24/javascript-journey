//task 1
// create a simple to-do list application using Javascript, where user can add tasks, click on tasks marked as complete and using delete button delete them

const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function addTask() {
  if (inputBox.value.trim() === "") {
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = inputBox.value;

  span.addEventListener("click", () => {
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
    } else {
      span.style.textDecoration = "line-through";
    }
  });

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
  inputBox.value = "";
}

addBtn.addEventListener("click", addTask);
