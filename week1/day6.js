//task 1
let arr = [11, 37, 8, 42, 3, 19, 25, 16, 29, 5];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

//task2;
let array = [12, 37, 8, 42, 3, 19, 25, 16, 29, 5];
let even_Arr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    even_Arr.push(array[i]);
  }
}
console.log(even_Arr);

//task3
let arrays = [12, 37, 8, 42, 3, 19, 25, 16, 29, 5];
let sum = 0;
for (let i = 0; i < arrays.length; i++) {
  sum += arrays[i];
}
console.log(sum);
