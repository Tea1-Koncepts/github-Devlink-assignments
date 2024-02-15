console.log("This program checks for Leap Year");
//Every year that can easily be divided by 4 is known as a leap year
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
}
const yearToCheck = 2028;
if (isLeapYear(yearToCheck)) {
  console.log(yearToCheck + " ", "Congratulations, 2028 is a Leap Year");
} else {
  console.log(yearToCheck + " ", "Ooops! Specified year is not a Leap Year");
}
