let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];

let highestScore = 0;
let highestScorer = {};

for (let student of studentsScore) {
  if (student.score > highestScore) {
    highestScore = student.score;
    highestScorer = student;
  }
}

console.log(`The student with the highest score is ${highestScorer.name} with a score of ${highestScorer.score}.`);