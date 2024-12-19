const express = require('express');
const userRoute = require('./routes/user-route');
const logger = require('./middlewares/user-logger');

const app = express();

app.use(express.json());
app.use('/api/users', userRoute);
app.use(logger)

const port = 3000;

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}/api/users`);
});
    