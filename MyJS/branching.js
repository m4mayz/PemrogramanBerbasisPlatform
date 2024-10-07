/**
 * Check odd or even number
 */

let number = 10;

if(number % 2 == 0 ){
    console.log(`${number} is even number`);
    
}
else{
    console.log(`${number} is odd number`);
    
}

/**
 * Age categorized :
 * 0-12 => Children
 * 13-17 => Teenager
 * > 18 => Adult
 */

const prompt = require('prompt-sync')()
let age = prompt("Insert your age: ");

if(age >= 18){
    console.log(`Your age is Adult`);
}
else if(age >= 13){
    console.log(`Your age is Teenager`);
}
else if(age > 0){
    console.log(`Your age is Children`);
}
else{
    console.log(`Incorrect age`)
}