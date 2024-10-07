const prompt = require('prompt-sync')();

function analyzePerson(person) {
  const donPlaces = ['nevada', 'new york', 'havana'];
  const underbossPlaces = ['new jersey', 'manhattan', 'nevada'];
  const capoPlaces = ['california', 'detroit', 'boston'];

  const placeLower = person.place.toLowerCase();

  if (
    person.age > 40 &&
    donPlaces.includes(placeLower) &&
    person.savings > 10000
  ) {
    console.log(`${person.name} is likely a mafia member with Don.`);
  } else if (
    person.age >= 25 &&
    person.age <= 40 &&
    underbossPlaces.includes(placeLower) &&
    person.savings >= 1000 &&
    person.savings <= 2000
  ) {
    console.log(`${person.name} is likely a mafia member with Underboss.`);
  } else if (
    person.age >= 18 &&
    person.age <= 24 &&
    capoPlaces.includes(placeLower) &&
    person.savings < 1000
  ) {
    console.log(`${person.name} is likely a mafia member with Capo.`);
  } else {
    console.log(`${person.name} is not suspicious.`);
  }
}

let person = {};

person.name = prompt('Enter name: ');
person.age = parseInt(prompt('Enter age: '));
person.place = prompt('Enter place to live: ');
person.savings = parseFloat(prompt('Enter savings in dollars (hundred): '));

analyzePerson(person);
