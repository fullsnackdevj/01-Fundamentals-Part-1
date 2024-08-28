// notes

const age = 18; // single '=' is an assignment operator
if (age === 18) console.log("You Just became an adult!"); // '= = =' is an comparison / equality operator.

/* equality operators will return a true of false value a boolean value. */

// triple '=' also called 'Strict Equality Operator' it does not perform type coercion so it only returns 'true' when both values are exactly the same.
// ie: 18 = = = 18 'true'
// ie: 18 = = = 19 'false

// ------------

// double '=' also called 'Loose Equality Operator' and it does 'type coercion.
//ie: '18' = = 18 we have here an '18' as a string and another 18 but as a number. the string '18' will be converted into a number so that they will be the same type 'Number'

//the result is 'true because loose equality operator '= =' actually does type coercions.

// the triple equal does not perform type coercion ie: '18' = = = 18 // the result is false. because '18' the strings is different from 18 the number. so it's not the same, and javascript does not convert them for us.

if (age === 18) console.log("You Just became an adult! (strict)"); // using Strict equality operator or triple '='

if (age == 18) console.log("You Just became an adult! (loose)"); // using loose equality operator or double '='

// as a general rule use 'strict equality'

// getting value from the website using 'prompt'

//using loose equality operator or double '='

// uncomment this section if needed--- >

// const favorite = prompt("What's your favorite number?");
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) {
//   // '23' string is equal to 23 the number. were using here loose equality operator.
//   console.log("Cool! 23 is an amazing number!");
// }

//using Strict equality

const favorite = Number(prompt("What's your favorite number?")); //value will be converted and restored as a number using the function 'Number()'.
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // were using strict operator here
  // '23' string is now equal to 23 the number because its already converted as a number above.
  console.log("Cool! 23 is an amazing number!");
}

// adding new line of conditional statements using 'Else if'
else if (favorite === 7) {
  // we can do as many as we want..
  console.log("7 is also a cool number!");
} else {
  // last else block or default.
  console.log("the number is not 23 or 7");
}

// Not Equal Operator
// != loose or (exclamation with single equal sign)
// !== strict (exclamation with double equal sign)

if (favorite !== 23) {
  console.log("Why not 23?");
}
