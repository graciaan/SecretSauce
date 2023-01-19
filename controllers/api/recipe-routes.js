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

router.get('/api/recipes/:id', async (req, res) => {
  try {
      const recipe = await Recipes.findByPk(req.params.id);
      if (!recipe) {
          res.status(404).send('Recipe not found');
      } else {
          res.json(recipe);
      }
  } catch (error) {
      res.status(500).send(error);
  }
});


module.exports = router;
