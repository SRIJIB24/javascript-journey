//task 1
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//task2
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

//task3
let number = 1234;
let rev_num = 0;

while (number > 0) {
  let last_digit = number % 10;
  rev_num = rev_num * 10 + last_digit;
  number = Math.floor(number / 10);
}
console.log(rev_num);
