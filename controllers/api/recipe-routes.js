const router = require('express').Router();
const { Recipes } = require('../../models');
const withAuth = require('../../utils/auth')

// CREATE new recipe
router.post('/', withAuth, async (req, res) => {
    try {
        const newRecipe = await Recipes.create({
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            user_id: req.session.user_id,
            category_id: req.body.category_id,
        });

        res.status(200).json(newRecipe);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});