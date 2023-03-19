'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import {'sequelize}.DataTypes } DataTypes
 **/ 

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId:  DataTypes.INTEGER, 
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
     { foreignKey: 'user_id', as: 'User' });
 };

  return BlogPost
};