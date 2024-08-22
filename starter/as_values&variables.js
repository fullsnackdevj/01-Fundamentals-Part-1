// Values and Variables
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

// let country = "Philippines";
// let continent = "Asia";
// let population = "33.5 Billion";

// console.log(country);
// console.log(continent);
// console.log(population);

// Challenge #1:

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// My solution:

//variable declarations
// let massMark, massJohn, heightMark, heightJohn, BMIJohn, BMIMark, markHigherBMI;

// //test data:

// massMark = 78;
// heightMark = 1.69;

// massJohn = 92;
// heightJohn = 1.95;

// //Calculating BMI of Mark:

// BMIMark = massMark / (heightMark * heightMark);

// //Calculating BMI of John:
// BMIJohn = massJohn / (heightJohn * heightJohn);

// //completed BMI computation for mark and john:
// console.log(BMIMark, BMIJohn);

// //bonus

// if (BMIMark > BMIJohn) {
//   markHigherBMI = true;
//   console.log("Mark has a higher BMI than John!");
// } else {
//   markHigherBMI = false;
//   console.log("John has a higher BMI than Mark!");
// }

// Jona's Solution:

// test data1:
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // test data2:
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// // -> '**' operator is the exponentiation operator. It is used to raise a number to the power of another number.

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // asking does BMIMark is greater than BMIJohn

// //result will be a boolean: true or false and store it in the variable markHigherBMI

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);
