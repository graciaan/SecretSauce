const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const favoriteRoutes = require('./favorite-routes');
const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
