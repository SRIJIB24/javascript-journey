// day 22 - Closure
// closure is a function that has access to the variables in its outer scope, even after the outer function has returned.
// task1

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();
counter();
