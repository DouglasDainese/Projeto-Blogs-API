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

module.exports = {
  insertNewUser,
};