const db = require('../config/db');
const bcrypt = require('bcrypt');

const userRegistration = async (data) => {
    const {name, email, phone, password} = data;
        if(!name || !email || !password){
            return "Data is not valid"
        }

    try{
        const salt = 10;
        const hash = await bcrypt.hash(password, salt);
        const [result] =
        await db.query('INSERT INTO users (name, email, phone, password) VALUES (?,?,?,?)', [name, email, phone, hash]);
        return ({id:result.insertId, hash:hash});

    } catch (error) {
        console.log(error);
}
}

module.exports = {userRegistration};