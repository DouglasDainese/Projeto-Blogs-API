const { UserService } = require('../services');

const insertNewUser = async (req, res) => {
  try {
    const { email } = req.body;
    const checkNewEmail = await UserService.getUserByEmail(email);
    if (checkNewEmail !== null) {
       return res.status(409).json({ message: 'User already registered' }); 
    }
    const token = await UserService.insertUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'erro interno' });
  }
};

const getAllUser = async (req, res) => {
  const allUser = await UserService.getAllUserService();
  return res.status(200).json(allUser);
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.findUserByid(id);
    if (user === null) return res.status(404).json({ message: 'User does not exist' }); 

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json('internal error');
  }
};

module.exports = {
  insertNewUser,
  getAllUser,
  getUser,
};