let student = {
    name : "Akmal",
    age : 21,
    address : "Jampang"
}

// 
for(let key in student){
    console.log(`${key} : ${student}`);
    
}

// 
let {name,age,address} = student
console.log(`Name : ${name}`);
console.log(`Age : ${age}`);
console.log(`Address : ${address}`);

// 
console.log(Object.keys(student));


