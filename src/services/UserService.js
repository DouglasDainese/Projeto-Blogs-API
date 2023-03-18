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

const getAllUserService = async () => {
  try {
    const users = await User.findAll();
  
    const removepassword = users.map((user) => { 
      const obj = { ...user.dataValues };
      delete obj.password;
      return obj;
    });

    return removepassword;
  } catch (error) {
    return { message: 'Internal Error' };
  }
};

const getByUserId = async (id) => {
  console.log(id);
  return User.findOne({ where: { id } });
};

module.exports = {
  getUserByEmail,
  insertUser,
  getAllUserService,
  getByUserId,
};