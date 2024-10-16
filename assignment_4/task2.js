// Input data
var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];


var groupedData = {};


for (var i = 0; i < motoGP.length; i++) {
  var event = motoGP[i];
  var country = event.winner.country;
  
  if (!groupedData[country]) {
    groupedData[country] = {
      winningCircuits: [],
      totalWins: 0
    };
  }
  
  groupedData[country].winningCircuits.push({
    name: event.winner.firstName + ' ' + event.winner.lastName,
    winLocation: event.circuit + ', ' + event.location
  });
  groupedData[country].totalWins++;
}


for (var country in groupedData) {
  console.log(country + ':');
  console.log('  Total Wins:', groupedData[country].totalWins);
  console.log('  Winning Circuits:');
  for (var i = 0; i < groupedData[country].winningCircuits.length; i++) {
    var circuit = groupedData[country].winningCircuits[i];
    console.log('    -', circuit.name, 'at', circuit.winLocation);
  }
  console.log();
}