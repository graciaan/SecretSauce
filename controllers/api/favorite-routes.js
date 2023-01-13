const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/auth')

// CREATE a new favorite
router.post('/', withAuth, async (req, res) => {
    try {
        const newFavorite = await Favorites.create({
            recipe_id: req.body.recipe_id,
            user_id: req.session.user_id,
        });

        res.status(200).json(newFavorite);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;