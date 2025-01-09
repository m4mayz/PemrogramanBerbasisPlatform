const SECRET_KEY = 'akuganteng!123'
const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(400).json({message:"Access denied."})
    } else {
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if(err) {
                return res.status(401).json({message:"Invalid token."})
            }
            next();
        })
    };
}

module.exports = userAuth;