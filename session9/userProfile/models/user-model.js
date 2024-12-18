const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
}

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id=?', id);
    return rows;
}

const addUser = async (user) => {
    const { name, email, phone } = user;
    const [result] = await db.query('INSERT INTO users (name, email, phone) VALUES (?, ?, ?)', [name, email, phone]);
    return result.insertId;
}
module.exports = { getAllUsers , getUserById , addUser };