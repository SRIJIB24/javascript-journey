//day16
//task 1
//Callback Hell -- pyramid of doom -- solution --> promises
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//task 2
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Received");
  }, 2000);
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
