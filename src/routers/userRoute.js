const express = require('express');
const { userController } = require('../controllers');
const { userFields } = require('../middlewares/validateFields');
const validateJwt = require('../auth/validateJWT');

const userRoute = express.Router();

userRoute.post('/', userFields, userController.insertNewUser);

userRoute.use(validateJwt);

userRoute.get('/', userController.getAllUser);

userRoute.get('/:id', userController.getUser);

userRoute.delete('/me', userController.deleteUser);
module.exports = userRoute;