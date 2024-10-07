let data = [10, 20, 30, 40]

// Access array
console.log(data[2]);

// change array value
data[2] = 100
console.log(data[2]);

// Add element to array in last element
data.push(80)
console.log(data);

// Add element to array in first element
data.unshift(90)
console.log(data)

// remove last element
data.pop()
console.log(data);

// remove first element
data.shift()
console.log(data);

let country = ["Indonesia", "India", "Japan", "South Sudan", "Sweden", "Jamaica"]

let countryI = []
let countryJ = []
let countryS = []

for(let i=0; i<country.length;i++){
    if(country[i][0]=="I"){
        countryI.push(country[i])
    }
    if(country[i][0]=="J"){
        countryJ.push(country[i])
    }
    if(country[i][0]=="S"){
        countryS.push(country[i])
    }

}
console.log(countryI);
console.log(countryJ);
console.log(countryS);
