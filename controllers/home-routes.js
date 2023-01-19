const router = require('express').Router();
const { Recipes, Categories, Favorites, reviews, Users } = require('../models');

// GET all recipes for homepage
router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipes.findAll({
            attributes: ['title']
        });

        const recipes = recipeData.map((recipe) =>
            recipe.get({ plain: true })
        );
        //below is for handlebars when that is ready
        res.render('homepage');
        
        //to test with insomnia
        //res.status(200).json(recipeData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;