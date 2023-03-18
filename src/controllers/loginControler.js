require('dotenv/config');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

const loginControler = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && password) res.status(400).json({ message: 'Some required fields are missing' });
    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ payLoad: { userId: user.id } }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = loginControler;