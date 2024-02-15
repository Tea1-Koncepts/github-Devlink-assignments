console.log("Welcome to Prime Number Check Panel");
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (
    let a = 2;
    a <= Math.sqrt(number);
    a++ //square root of the nnumber0
  ) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(17)); //that is, if it is true
console.log(isPrime(15)); //that is, if it is false
