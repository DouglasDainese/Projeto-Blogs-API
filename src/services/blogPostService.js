const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const getAllPost = async () => {
  const allPosts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });

  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });

  return post;
};

const insertNewPost = async ({ title, content, userId, categoryIds, today }) => {
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create({
      title, content, userId, published: today, updated: today,
    }, { transaction: t });

    const postCategoryArr = categoryIds.map((cat) => (
      PostCategory.create({ postId: newPost.dataValues.id, categoryId: cat }, { transaction: t })
    ));
    await Promise.all(postCategoryArr);
    return newPost;
  });
  return result;
};

const updatePost = async (req) => {
 try {
  const { title, content, userId, id, updated } = req;
  const postUpdate = await BlogPost.update({ title, content, updated }, 
    { where: { id, userId } });
  return postUpdate;
 } catch (error) {
  return error;
 }
};

module.exports = {
  insertNewPost,
  getAllPost,
  getPostById,
  updatePost,
};