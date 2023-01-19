const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Reviews, Recipes } = require('../../models');

// CREATE new review
router.post('/', async (req, res) => {
    try {
        const newReview = await Reviews.create({
            review: req.body.review,
            recipe_id: req.params.id,
            rating: req.body.rating,
            user_id: req.session.user_id,
        });

        res.status(200).json(newReview);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/api/reviews/:recipe_id', async (req, res) => {
  try {
      const reviews = await Reviews.findAll({
          where: {
              recipe_id: req.params.recipe_id
          }
      });
      res.json(reviews);
  } catch (error) {
      res.status(500).send(error);
  }
});



module.exports = router;