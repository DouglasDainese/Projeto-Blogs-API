const express = require('express');
const { userController } = require('../controllers');
const { userFields } = require('../middlewares/validateFields');

const userRoute = express.Router();

userRoute.post('/', userFields, userController.insertNewUser);

module.exports = userRoute;