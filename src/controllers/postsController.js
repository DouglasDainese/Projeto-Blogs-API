const { postsServices, CategoryServices } = require('../services');

const today = new Date(Date.now()).toISOString();
const errorInternalMessage = 'Internal error';

const insertNewPost = async (req, res) => {
  try {
    const { categoryIds } = req.body;
    
    const catInDb = JSON.stringify(await CategoryServices.getAll());
    const catContains = categoryIds.every((catReq) => catInDb.includes(catReq));
    if (!catContains) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const newPost = { ...req.body, userId: req.user.id, today };
    const result = await postsServices.insertNewPost(newPost);
    return res.status(201).json(result.dataValues);
  } catch (error) {
   return res.status(500).json(errorInternalMessage);
  }
};

const getAllPostController = async (_req, res) => {
  try {
    const allPosts = await postsServices.getAllPost();
    res.status(200).json(allPosts);
  } catch (error) {
   return res.status(500).json(errorInternalMessage);
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postsServices.getPostById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
  } catch (error) {
   return res.status(500).json(errorInternalMessage);
  }
};
const updatePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const postUp = {
      ...req.body,
      userId: req.user.id,
      updated: today, 
      id, 
    };
    const [post] = await postsServices.updatePost(postUp);
    if (post === 0) return res.status(401).json({ message: 'Unauthorized user' });

    const postUpdated = await postsServices.getPostById(id);
    return res.status(200).json(postUpdated);
  } catch (error) {
   return res.status(500).json(errorInternalMessage);
  }
};

const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const postToDeleted = await postsServices.getPostById(id);
    if (!postToDeleted) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    
    const postDeleted = await postsServices.deletePost({ id, userId });
    if (postDeleted === 0) return res.status(401).json({ message: 'Unauthorized user' });

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(errorInternalMessage);
  }
};

module.exports = {
  insertNewPost,
  getAllPostController,
  getPostById,
  updatePostController,
  deletePostController,
};
