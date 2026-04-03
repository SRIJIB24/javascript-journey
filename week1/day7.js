//task 1
let user = {
  name: "Srijib",
  age: 25,
  city: "Kolkata",
};
console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`City: ${user.city}`);

//task2
let users = {
  name: "Srijib",
  age: 25,
  city: "Kolkata",
};
for (let a in users) {
  console.log(`${a}: ${users[a]}`);
}

//task3
let person = {
  name: "Srijib",
  age: 25,
  city: "Kolkata",
};
person.age = 26;
person.profession = "Developer";
person.phone = 9775226965;
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
