// notes logical operators
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision); // and
console.log(hasDriversLicense || hasGoodVision); // or
console.log(!hasDriversLicense); // not

if (hasDriversLicense && hasGoodVision && !isTired) {
  // true and true and true (false converted to true)
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive..");
}
