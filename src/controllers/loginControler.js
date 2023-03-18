const generateToken = require('../auth/generateToken');
const { UserService } = require('../services');

const loginControler = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserService.getUserByEmail(email);
  
  if (user === null || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' }); 
  }
   const token = generateToken(user.id);

  res.status(200).json({ token });
};

module.exports = loginControler;