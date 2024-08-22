//Taking Decision: if / else Statements
//control structure

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearLeft} years :) `);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//any variable declared inside the 'code block' will not be accessible outside the block.

// Challenge #2: IF / ELSE STATEMENT

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const higherBMI = BMIMark > BMIJohn;

/* Write your code below. Good luck! 🙂 */

if (higherBMI) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
