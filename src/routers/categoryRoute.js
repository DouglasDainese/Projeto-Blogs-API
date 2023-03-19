const express = require('express');
const { categoryController } = require('../controllers');
const validateJwt = require('../auth/validateJWT');

const categoriesRoute = express.Router();

categoriesRoute.use(validateJwt);

categoriesRoute.post('/', categoryController.insertNewCategories);
categoriesRoute.get('/', categoryController.getAll);

module.exports = categoriesRoute;