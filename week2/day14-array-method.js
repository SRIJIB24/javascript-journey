//task 1
// implement array method like map(), filter(), reduce() using for loop

// map() implementation

let arr = [1, 2, 3, 4, 5];

console.log(arr.map((num) => num * num));
console.log(arr.filter((num) => num % 2 === 0));

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
