let express = require('express');
let app = express();
let port = 2000;

app.get('/', (req, res) => {
    res.status(200)
    res.json("Student Rest API v1.0")
    res.end()
})

app.listen(port, () => {
    console.log(`Express Server is running on port http://localhost:${port}`);
})