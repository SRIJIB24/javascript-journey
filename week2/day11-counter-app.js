//task 1
const message = document.getElementById("message");
const decreBtn = document.getElementById("decreBtn");
const increBtn = document.getElementById("increBtn");
const resetBtn = document.getElementById("resetBtn");
const count = document.getElementById("count");
let value = 0;

decreBtn.addEventListener("click", () => {
  if (value > 0) {
    value--;
    count.innerText = value;
    message.innerText = "Counter is decremented";
  }
});

increBtn.addEventListener("click", () => {
  if (value < 10) {
    value++;
    count.innerText = value;
    message.innerText = "Counter is incremented";
  }
});

resetBtn.addEventListener("click", () => {
  value = 0;
  count.innerText = value;
  message.innerText = "Counter is reset";
});

//task2

//task3
