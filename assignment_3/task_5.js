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

const start = parseInt(prompt('Enter initial input: '));
const end = parseInt(prompt('Enter final input: '));
let sum = 0;
let primes = [];

for (let num = start; num <= end; num++) {
  if (isPrime(num)) {
    sum += num;
    primes.push(num);
  }
}

console.log(`Sum of primes between ${start} and ${end} is ${primes.join(' + ')} = ${sum}`);
