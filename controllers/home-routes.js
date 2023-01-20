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
        res.render('homepage', {
            recipes
        });
        //test
        //to test with insomnia
        //res.status(200).json(recipeData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/api/mystery-recipe', (req, res) => {
    Recipes.count()
        .then(count => {
            var random = Math.floor(Math.random() * count);
            return Recipes.findOne({
                offset: random,
                include: [
                  {
                      model: Reviews,
                  },
                ],
            });
        })
        .then(recipe => {
            if (!recipe) {
                res.status(404).json('No recipe found');
            } else {
                res.json(recipe);
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


//get categories for posting recipe
router.get('/post', async (req, res) => {
    try {
        const categoryData = await Categories.findAll();

        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );

        res.render('post', {
            categories
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;