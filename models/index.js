const Categories = require('./Categories');
const Favorites = require('./Favorites');
const Recipes = require('./Recipes');
const Reviews = require('./reviews');
const Users = require('./Users');

Users.hasMany(Recipes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Users.hasMany(Reviews, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Users.hasMany(Favorites, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Recipes.belongsTo(Users, {
  foreignKey: 'user_id',
});

Categories.hasMany(Recipes, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Recipes.belongsTo(Categories, {
  foreignKey: 'category_id',
});

Reviews.belongsTo(Users, {
  foreignKey: 'user_id',
});

Favorites.belongsTo(Users, {
  foreignKey: 'user_id',
});

Recipes.hasMany(Reviews, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE',
});

Reviews.belongsTo(Recipes, {
  foreignKey: 'recipe_id',
});

module.exports = { Categories, Favorites, Recipes, Reviews, Users };