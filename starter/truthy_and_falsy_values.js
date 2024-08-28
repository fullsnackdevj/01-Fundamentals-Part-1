//notes

// 5 falsy values
/* 0, '' (empty string),  undefined, null and NaN
this value will converted to 'false' when attempt to convert them
to a boolean.

truthy  - values that will be coverted to true. when attempt to convert them to a boolean.

*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

/* How coercion works using if else statements */

const money = 0; // 0 here is a number
if (money) {
  // javascript here trying to convert the value into a boolean..
  // the value of money here is 0 and zero is a falsy value.
  console.log("Don't spend it all ;)");
} else {
  // so this line of code here will be executed.
  console.log("You should get a job!");
}

let height; // has undefined value , no assigned value yet.

if (height) {
  //converting (undefined) to a boolean so it will be a falsy value.
  console.log("Yay! Height is Defined!");
} else {
  // so that this line of code will be executed
  console.log("Height is Undefined!");
}
