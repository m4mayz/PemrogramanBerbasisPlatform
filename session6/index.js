let http = require('http');
let port = 2000;

const data = [
    {name:'Akmal',class:'TI23T'},
    {name:'Zaidan',class:'TI23T'},
    {name:'Hibatullah',class:'TI23A'},
    {name:'Nana',class:'TI23H'},
    {name:'Baim',class:'TI23H'},
    {name:'Rigi',class:'TI23I'},
]

let server = http.createServer((req,res)=>{
    let url = req.url;
    // /student => all data
    // /student/class => student with class parameter
    res.writeHead(200,{'Content-Type':'application/json'})

    if(url.startsWith('/student')){
        let urlpath = url.split('/');
        let classParam = urlpath[2];
        let nameParam = urlpath[3];

        let filteredData
        if(classParam){
            filteredData = data.filter((student)=> student.class == classParam);
            if(nameParam){
                filteredData = filteredData.filter((student)=> student.name == nameParam);
            }
            if(filteredData.length > 0){
                res.write(JSON.stringify(filteredData));
            }
            else{
                res.write('Data not found');
            }
        }

    }
    res.end();
})

server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    
})
