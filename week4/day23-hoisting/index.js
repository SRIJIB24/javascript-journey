//day23
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

//task1
//using var, hoisted variable and initialized to undefined
console.log(x);
var x = 5;

//let y; hoisted here, but not initialized, so it will throw a ReferenceError if accessed before declaration
console.log(y);
let y = 10; // here y initialized
//so, time between hoisting and initialization, y is in a "temporal dead zone" and cannot be accessed until it is declared and initialized.

// task2
//function declaration, hoisted and can be called before its declaration

greet();
function greet() {
  console.log("Hello, World!");
}
