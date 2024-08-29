// notes in ternary operator

// conditional operators allows us to write something similar to an if/else statements but in one line of code.

const age = 19;

age >= 18 // condition or ternary operator
  ? console.log("I like to drink wine") // if condition is true
  : console.log("I like to drink water"); // else part..

// ternary operator always have 3 parts (condition, if part, else parts).

// an operator is an expression because its produce a value.

const drink = age >= 18 ? "wine" : "water"; // one block of code only.
console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }

// console.log(drink2);

// above code is having a bigger block of code to write.

console.log(`Sarah says i like to drink ${age >= 18 ? "wine" : "water"}`); // we can have condition inside the template literals.
