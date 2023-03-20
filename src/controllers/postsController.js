const { postsServices, CategoryServices } = require('../services');

const insertNewPost = async (req, res) => {
  try {
    const { categoryIds } = req.body;
    
    const catInDb = JSON.stringify(await CategoryServices.getAll());
    const catContains = categoryIds.every((catReq) => catInDb.includes(catReq));
    if (!catContains) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const today = new Date(Date.now()).toISOString();
    const newPost = { ...req.body, userId: req.user.id, today };
    const result = await postsServices.insertNewPost(newPost);
    return res.status(201).json(result.dataValues);
  } catch (error) {
   return res.status(500).json('Internal error');
  }
};

const getAllPostController = async (_req, res) => {
  try {
    const allPosts = await postsServices.getAllPost();
    res.status(200).json(allPosts);
  } catch (error) {
   return res.status(500).json('Internal error');
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
   return res.status(500).json('Internal error');
  }
};

module.exports = {
  insertNewPost,
  getAllPostController,
  getPostById,
};
