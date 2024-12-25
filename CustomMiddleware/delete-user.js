const {response} = require("express");

fetch('http://localhost:3000/api/users/1', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'user-role': 'admin' //only admin can delete
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))