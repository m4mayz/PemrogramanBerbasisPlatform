// print 1 until 10

for(let i = 1;i<11;i++){
    console.log(`Looping : ${i}`)
}

console.log("--------------------------------");

// print 10, 20, 30, ... 100
for(let j = 10;j<101;j+=10){
    console.log(` Looping : ${j}`);
    
}

console.log("--------------------------------");

// print 100, 90, 80 ... 10
for(let k = 100;k>1;k-=10){
    console.log(`Looping : ${k}`);
    
}

console.log("--------------------------------");

// print 1, -2, 3, -4 ... -10

let a = 1
for(let l = 1;l<=10;l++){
    console.log(`Looping : ${l*a}`);
    a = a * -1
}
