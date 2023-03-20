'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import {'sequelize}.DataTypes } DataTypes
 **/ 

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {
    postId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
    },
    categoryId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
    }
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: PostCategory,
      foreignKey: 'categoryId', 
      otherKey: 'post_Id', 
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId', 
      otherKey: 'categoryId', 
    });
  };

  return PostCategory
};