//notes
//SWITCH CASE STATEMENT
// COMPARING ONE VALUE IN MULTIPLE DIFFERENT OPTIONS

const day = "saturday";

// using switch case

// switch (
//   day // day === 'monday' if its true execute the below code. // it also performs a strict equality here.
// ) {
//   case "monday": // this line of code will be executed.
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//   // break; w/o a break this code continues executing and stops in the next break; so that were having 3 console.log results.

//   case "tuesday":
//     console.log("Preapare theory videos");
//     break;

//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;

//   case "friday":
//     console.log("Record videos");
//     break;

//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// using if else statement

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day!");
}
