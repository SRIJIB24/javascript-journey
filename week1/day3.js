//task1
let num = 7;
if (num % 2 !== 0) {
  console.log(`number ${num} is odd`);
} else {
  console.log(`number ${num} is even`);
}

//task2
let num1 = 10;
let num2 = 5;
let num3 = 20;
if (num1 > num2 && num1 > num3) {
  console.log(`num1 ${num1} is the largest`);
} else if (num2 > num3) {
  console.log(`num2 ${num2} is the largest`);
} else {
  console.log(`num3 ${num3} is the largest`);
}

//task3
let marks = 71;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80 && marks < 90) {
  console.log("Grade: A");
} else if (marks >= 70 && marks < 80) {
  console.log("Grade: B");
} else if (marks >= 60 && marks < 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}
