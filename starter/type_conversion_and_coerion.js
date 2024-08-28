/// @@@@@@@@@@@@@ type conversion @@@@@@@@@@@@@@@@
// means manually convert something from one type to another

const inputYear = "1991";

//converting string into number:
console.log(Number(inputYear), inputYear); // using number()

console.log(inputYear + 18); //result = 199118

//note: the 'inputYear' variable still holds a 'string' 1991' its just converted into a 'number' using the 'number()' function.

console.log(Number(inputYear) + 18); //converted result: 2009

//converting something to a 'number' that is impossible to convert.

console.log(Number("Jonas")); // result: NaN
console.log(typeof NaN); // checking what type is 'NaN'
// result: number

// note: NaN means 'invalid number' and it's not really 'NOT A NUMBER ' it still a number somehow but an invalid one.

//converting number to string:

console.log(String(23), 23); // the white color in console means its a 'strings'

//note: JavaScript can only convert 3 types , Strings, Numbers and boolean. we cannot convert something into undefined or to null does not make any sense tho.

/// @@@@@@@@@@@@@ type coercion @@@@@@@@@@@@@@@@
/*
So basically, type coercion happens whenever an operator is dealing with two values that have different types. So in that case, JavaScript will then, behind the scenes, convert one of the values to match the other value.
*/

console.log("I am " + 23 + " years old"); // multiple types, strings and numbers.

/* not all operators to type coercions to strings */
console.log("23" - "10" - 3); // it converts strings into numbers. result: 10, minus operator triggers the opposite conversion.

console.log("23" + "10" + 3); // using 'plus' operator make the three strings concatenated. result: 23103

console.log("23" * "2"); // working on multipication
console.log("23" / "2"); // working on division

// sample activity:

let n = "1" + 1; // n = '11' ( string )
n = n - 1; // n = '11' - 1; ( the string '11' converted into a number)
console.log(n); // n = 10; ( number )

console.log(typeof n);
