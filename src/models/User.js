'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import {'sequelize}.DataTypes } DataTypes
 **/ 

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  })

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
     { foreignKey: 'userId', as: 'BlogPost' });
 };

  return User
};