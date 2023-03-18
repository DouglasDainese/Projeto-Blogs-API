const express = require('express');
const { userController } = require('../controllers');
const { userFields } = require('../middlewares/validateFields');
const validateJwt = require('../auth/validateJWT');

const userRoute = express.Router();

userRoute.post('/', userFields, userController.insertNewUser);

userRoute.get('/', validateJwt, userController.getAllUser);

module.exports = userRoute;