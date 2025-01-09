const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.post('/user', userController.userReg);
router.get('/user/login', userController.userLogin);

module.exports = router;