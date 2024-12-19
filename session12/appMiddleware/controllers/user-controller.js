const userModel = require('../models/user-model')

const getUsers = (req, res) => {
    try {
        const users = userModel.getUser();
        if(users.length == 0) {
            res.status(200).json({message: 'Empty data user'})
        }
        else{
            res.status(200).json(users)
        }
    } catch (error) {
        console.log(error);
    }
}

const getUserByIndex = (req, res) => {
    try {
        const users = userModel.getUserByIndex(req.params.id);
        res.json(users)
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {getUsers, getUserByIndex}