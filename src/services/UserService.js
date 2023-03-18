const { User } = require('../models');
const generateToken = require('../auth/generateToken');

const insertUser = async (user) => {
  try {  
    const newUser = await User.create(user);
    const token = generateToken(newUser.dataValues.id);
    return token;
  } catch (error) {
    return null;
  }
};

const getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return null;
    return user.dataValues;
};

module.exports = {
  getUserByEmail,
  insertUser,
};