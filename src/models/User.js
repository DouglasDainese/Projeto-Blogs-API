'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import {'sequelize}.DataTypes } DataTypes
 **/ 

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
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

  return User
};