// String Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// Template Literals:

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = `Im ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonas);

//we can also use backticks in a regular strings

console.log(`Just a regular string..`);

// using backticks in multi-line strings:

console.log(`Here
    is 
    a 
    multiline`);
