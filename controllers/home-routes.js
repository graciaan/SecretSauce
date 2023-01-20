const router = require('express').Router();
const { Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const { Recipes, Categories, Favorites, Reviews, Users } = require('../models');
const withAuth = require('../utils/auth');

// GET all recipes for homepage
router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipes.findAll({
            attributes: [
                'title',
                'description',
                [Sequelize.fn('AVG', Sequelize.col('reviews.rating')), 'avgRating'],
            ],
            include: [
                {
                    model: Reviews,
                    attributes: [],
                },
            ],
            group: ['recipes.id', 'reviews.recipe_id'],
            order: [
                ['avgRating', 'DESC'],
            ],
        });

        const recipes = recipeData.map((recipe) =>
            recipe.get({ plain: true })
        );
        //below is for handlebars when that is ready
        res.render('homepage', {loggedIn: req.session.loggedIn});
        //test
        //to test with insomnia
        //res.status(200).json(recipeData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/api/mystery-recipe', async (req, res) => {
  try {
      const count = await Recipes.count();
      const random = Math.floor(Math.random() * count);
      const recipe = await Recipes.findOne({
          offset: random,
          include: [
            {
                model: Users,
            },
          ],
      });
      res.render('recipe');
      if (!recipe) {
          res.status(404).json('No recipe found');
      } else {
          res.render('recipe', { recipe });
      }
  } catch (error) {
      res.status(500).json(error);
  }
});


//get categories for posting recipe
router.get('/post', withAuth, async (req, res) => {
    try {
        const categoryData = await Categories.findAll();

        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );

        res.render('post', {
            categories,
            loggedIn: req.session.loggedIn
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    
  } else {
    res.status(404).end();
  }
});

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  res.render('homepage');
}});

module.exports = router;