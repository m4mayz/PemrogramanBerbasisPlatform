const userModel = require('../models/user-model');

const userReg = async (req, res) => {
    const data = req.body;
    try{
        const addUser = await userModel.userRegistration(data);
        if(addUser){
            return res.status(200).json({id:addUser.id, hash:addUser.hash});
        }
        return res.status(400).json({msg:"Registration failed."});
    } catch (error) {
        console.log(error);
    }
}

const userLogin = async (req, res) => {
    const data = req.body;

    try{
        const response = await userModel.userLogin(data);
        if(response){
            res.json(response);
        }
    } catch (error){
        console.log(error);
    }
}

const getAllUser = async (req, res) => {
    try{
        const response = await userModel.getAllUser();
        if(response){
            res.json(response);
        }
    } catch (error){
        console.log(error);
    }
}
module.exports = {userReg, userLogin, getAllUser};