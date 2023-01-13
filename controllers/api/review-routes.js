const router = require('express').Router();
const { Reviews } = require('../../models');

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