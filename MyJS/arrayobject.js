let studentData = [
    {
        idnumber:1,
        name:"Annie",
        city:"BANDUNG",
        java:90,
        python:75,
        c:80
    },
    {
        idnumber:2,
        name:"Bull",
        city:"SUKABUMI",
        java:80,
        python:55,
        c:100
    },
    {
        idnumber:3,
        name:"Chairil",
        city:"BOGOR",
        java:100,
        python:30,
        c:50
    }    
    
]

console.log(studentData[2]["name"]);

// Add data object
studentData.push(
    {
        idnumber:4,
        name:"Daddy",
        city:"MALANG",
        java:88,
        python:30,
        c:86
    }
)

let bjava = 0
let name = ""
for(let i =0;i<studentData.length;i++){
    if(studentData[i]["java"] > [bjava]){
        bjava = studentData[i]["java"]
        name += studentData[i]["name"] + ","
    }
}

console.log(`Biggest java score is : ${name} with score ${bjava}`);

let total = 0
for(let i=0;i<studentData.length;i++){
    total += studentData[i]["python"]
}

let mean = total / studentData.length
console.log(`Mean ${mean}`);

let over90 = studentData.filter(score=> score.java > 90)
console.log(over90)

let nameover90 = over90.map(score=> score.name)
console.log(nameover90)