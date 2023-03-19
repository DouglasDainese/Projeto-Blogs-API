const loginFields = (req, res, next) => {
  const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  next();
};

const userFields = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (!reg.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

const postsFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  console.log(`title: ${title}`);
  console.log(`content: ${content}`);
  console.log(`categoryIds: ${categoryIds}`);
  if (!title) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }
  if (!content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!categoryIds) { 
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  loginFields,
  userFields,
  postsFields,
};