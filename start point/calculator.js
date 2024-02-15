console.log("Welcome to my Calculator Panel");
console.log("Develop a calculator programs for basic arithmetic operation");
function add(m, n) {
  return m + n;
}
function subtract(m, n) {
  return m - n;
}
function multiply(m, n) {
  return m * n;
}
function divide(m, n) {
  if (m == 0) {
    return "Error: Division by zero";
  }
  return m / n;
}
console.log("Addition Equation:", add(10, 5));
console.log("Subtraction Equation:", subtract(15, 5));
console.log("Multiplication Equation:", multiply(10, 5));
console.log("Division Equation:", divide(50, 5));
console.log("Division by Zero:", divide(10, 0));
