//day 15
//task 1
//callback function -- a function call/passes within another function -- execute later
// use in events,set timeout,async js,api call

function processUser(name, callback) {
  console.log(`user name is ${name}`);
  callback();
}

function greet() {
  console.log("welcome dibyendu");
}

// task 2 -- set timeout
processUser("Srijib", greet);

function bye() {
  console.log("goodbye!");
}
setTimeout(() => bye(), 5000);
