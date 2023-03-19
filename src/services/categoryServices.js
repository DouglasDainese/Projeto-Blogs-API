const { Category } = require('../models');

const insertNewCategories = async (name) => {
  try {
    const newCategories = await Category.create({ name });
    return newCategories;
  } catch (error) {
    return null;
  }
};

const getAll = async () => {
  try {
    const allCategories = await Category.findAll();
    return allCategories;
  } catch (error) {
    return null;
  }
};

module.exports = {
  insertNewCategories,
  getAll,
};