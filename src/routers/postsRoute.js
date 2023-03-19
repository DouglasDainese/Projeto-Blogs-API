const express = require('express');
const validateJwt = require('../auth/validateJWT');
const { postController } = require('../controllers');
const { postsFields } = require('../middlewares/validateFields');

const postsRoute = express.Router();

postsRoute.post('/', postsFields, validateJwt, postController.insertNewPost);

module.exports = postsRoute;