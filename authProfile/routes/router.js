const express = require('express');
const userController = require('../controllers/user-controller');
const userAuth = require('../middlewares/user-middleware');
const router = express.Router();

router.post('/user', userController.userReg);
router.get('/user/login', userController.userLogin);
router.get('/user', userAuth, userController.getAllUser);


module.exports = router;