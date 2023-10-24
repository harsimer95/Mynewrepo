const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
  name: String,
  
});

const Categories = mongoose.model('Category', CategoriesSchema);

module.exports = Categories;
