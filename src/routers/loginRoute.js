const express = require('express');
const { loginController } = require('../controllers');
const { loginFields } = require('../middlewares/validateFields');

const loginRoute = express.Router();

loginRoute.post('/', loginFields, loginController);

module.exports = loginRoute;