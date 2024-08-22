// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);

// // console.log("Jonas");
// // console.log(23);

// // let firstName = "Jay";

// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);

// // camelCaseNotation

// // how to name variables ******

// // > variable must not start with a number

// // variable names can only contain numbers, letters, underscores or dollar sign.

// // don't name variables using reserve keywords

// // start by writing a lowercase on the first Letter. its not illegal to use Uppercase in the first letter but they are specific use cases that we need to uppercase the first letter in OOP

// // if its constants write them in uppercase ie: let PI = 3.1415;

// // LECTURE ABOUT DATA TYPES STARTS HERE

// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);

// // // console.log(typeof true);
// // console.log(typeof javaScriptIsFun);
// // // console.log(typeof 23);
// // // console.log(typeof "Jonas");

// // javaScriptIsFun = "YES!";
// // console.log(typeof javaScriptIsFun);

// // changing data type of variables on fly called 'dynamic typing' ^

// // sample of undefined data type:
// // let year; //variable is declared but no declared value.
// // console.log(year); //value will be 'undefined'
// // console.log(typeof year); // data type will be 'undefined'

// // year = 1991; //declaring variable without 'let' because its already declared above.
// // console.log(typeof year); // dynamic typing from 'undefined' to 'number' result = 'number'

// // console.log(typeof null); // bug, bec. null is not an object.

// // LECTURE ABOUT DATA TYPES ENDS HERE

// // LET, CONST, AND VAR LECTURE STARTS HERE------------------- >>

// // declaring a variable using 'let' when were going to reassign a value later on some point of the program.

// // let age = 30;
// // age = 31;

// // // using 'const' it creates a variable that we cannot reassign.
// // // or immutable variable . cannot be mutated.
// // const birth = 1991;
// // // birth = 1990;

// // // const job; // when using const we need an initial value else youll get an error "missing initializer in const declaration".

// // // using 'var' in creating variables like let but its the very old way of declaring variables

// // var job = "programmer";
// // job = "teacher";

// // // we can write a variable without using let, var, or const but its a terible idea and not a good practice.

// // lastName = "Schmedtmann";
// // console.log(lastName);

// // LET, CONST, AND VAR LECTURE ENDS HERE------------------- >>

// // BASIC OPERATORS LECTURE STARTS HERE -- >

// // dont repeat values instead make a variable!

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 *2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";

// console.log(firstName + " " + lastName); //using ' + ' operator to combine strings..

// // Assignment Operators---->

// let x = 10 + 5; // always from the right side 10 + 5 will be done first then will be assigned to x from the left side.
// x += 10; // x = x +10;
// x *= 4; // x = x * 4;
// x++; // x = x + 1;
// x--; // x = x - 1;
// x--; // x = x - 1;
// console.log(x); // result will be 15.

// //comparison operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// // '=' equals is an assignment operator

// // BASIC OPERATORS LECTURE ENDS HERE -- >

// // OPERATOR PRECEDENCE LECTURE STARTS HERE ------------- >

// // OPERATOR PRECEDENCE LECTURE ENDS HERE ------------- >
