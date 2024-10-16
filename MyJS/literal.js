//Defining classes and using them
let person = {
    name : {
        firstname: "Federico",
        lastname : "Melchiorri"
    },
    age: 21,
    address: "Sakura",
    hobby : ["Basketball", "Football", "Hiking"],
    infoPerson : function(){
        return (
            `Name : ${person.name.firstname}\n age: ${person.age}`
        );
    }
}

//Person's Info
console.log(person.infoPerson());
//Output will be football
console.log(person.hobby[1]);

console.log(person);

//Accessing Object - output will be "Malik"
console.log(`Firstname : ${person.name.firstname}`);
console.log(`Lastname : ${person.name.lastname}`);

//add key and value
person["idnumber"] = 1
console.log(person);

//change the value of object - name :legend
person["name"] = "legend"
console.log(person);

//Accessing Data Object with Iteration
for(let key in person){
    console.log(key);
}