//fibonocci series in javascript
console.log("This is for series");
function series(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(series(2));
console.log(series(3));
console.log(series(7));

//factorial in javascript
console.log("This is for factorial");
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

//prime numbers
console.log("This is for prime numbers");
function primeNumbers(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumbers(2));
console.log(primeNumbers(3));
console.log(primeNumbers(5));
