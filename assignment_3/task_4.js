const prompt = require('prompt-sync')();

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

let num = parseInt(prompt('Enter a number: '));
num++; // Start checking from the next number

while (!isPrime(num)) {
  num++;
}

console.log(`The next prime number is ${num}.`);
