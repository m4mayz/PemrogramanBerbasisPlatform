const prompt = require('prompt-sync')();

const jerseyNumber = parseInt(prompt('Enter jersey number: '));
const positions = [];

if (jerseyNumber % 2 === 0) {
  positions.push('target attacker');
  if (jerseyNumber >= 50 && jerseyNumber <= 100) {
    positions.push('has the right to be chosen as team captain');
  }
} else {
  positions.push('defender');
  if (jerseyNumber > 90) {
    positions.push('Playmaker');
  }
  if (jerseyNumber % 15 === 0) { // Multiple of both 3 and 5
    positions.push('keeper');
  }
}

console.log(`Player with jersey number ${jerseyNumber} has positions: ${positions.join(', ')}.`);
