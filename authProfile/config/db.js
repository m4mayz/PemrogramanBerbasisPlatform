require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'profile',
});

const poolPromise = db.promise();

module.exports = poolPromise;