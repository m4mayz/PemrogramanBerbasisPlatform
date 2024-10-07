const prompt = require('prompt-sync')();

let score = 0;
let evidenceC = false;
let evidenceE = false;

const questions = [
  {
    question: 'Was there cyanide powder in the victim\'s stomach? (yes/no): ',
    score: 50,
    check: () => {}
  },
  {
    question: 'Was there more than 50 milligrams of cyanide powder in the victim\'s stomach? (yes/no): ',
    score: 500,
    check: () => {}
  },
  {
    question: 'Is there CCTV that clearly shows someone putting something into the glass? (yes/no): ',
    score: 250,
    check: () => { evidenceC = true; }
  },
  {
    question: 'Is there CCTV that blurredly shows someone putting something into the glass? (yes/no): ',
    score: 150,
    check: () => {}
  },
  {
    question: 'Are there two or more fingerprints on the glass? (yes/no): ',
    score: 100,
    check: () => { evidenceE = true; }
  },
  {
    question: 'Are there suspicious movements? (yes/no): ',
    score: 50,
    check: () => {}
  },
  {
    question: 'Was there cyanide powder in the perpetrator\'s pocket? (yes/no): ',
    score: 750,
    check: () => {}
  }
];

for (let i = 0; i < questions.length; i++) {
  let answer = prompt(questions[i].question).toLowerCase();
  if (answer === 'yes') {
    score += questions[i].score;
    questions[i].check();
  }
}

if (score > 1300 && evidenceC && evidenceE) {
  console.log('It is certain that it is a murder.');
} else {
  console.log('It is not certain that it is a murder.');
}
