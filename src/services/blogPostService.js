const { BlogPost, PostCategory, sequelize } = require('../models');

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

// insertNewPost({ title: 'Dsd Rumo a lua', content: 'bora', userId: 1, categoryIds: [1, 2] });

module.exports = {
  insertNewPost,
};