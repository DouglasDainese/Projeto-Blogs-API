const { CategoryServices } = require('../services');

const insertNewCategories = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });

    const newCategorie = await CategoryServices.insertNewCategories(name);

    return res.status(201).json(newCategorie);
  } catch (error) {
    res.status(500).json('internal error');
  }
};

const getAll = async (_req, res) => {
  try {
    const allCategories = await CategoryServices.getAll();
    return res.status(200).json(allCategories);
  } catch (error) {
  return res.status(500).json('internal error');
  }
};

module.exports = {
  insertNewCategories,
  getAll,
};