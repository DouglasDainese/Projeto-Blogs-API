const express = require('express');
const validateJwt = require('../auth/validateJWT');
const { postController } = require('../controllers');
const { postsFields } = require('../middlewares/validateFields');

const postsRoute = express.Router();

postsRoute.use(validateJwt);

postsRoute.post('/', postsFields, postController.insertNewPost);

postsRoute.get('/', postController.getAllPostController);

postsRoute.get('/:id', postController.getPostById);

module.exports = postsRoute;