const { User } = require('../models');

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user.dataValues;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getUserByEmail,
};