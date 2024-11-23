let http = require('http'); //http node module
let port = 2000;

let server = http.createServer((req, res) => {
    let url = req.url
    console.log(url);
    

    res.writeHead(200, { 
        'Content-Type': 'application/json' 
    });
    
    if(url == '/student'){
        res.write("Student page")
    }
    else if(url == '/lecture'){
        res.write("Lecture page")
    }
    else if(url == '/'){
        res.write("Welcome to my REST API")
    }
    else{
        res.write("Wrong API Endpoint")
    }

    res.end();
});

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})