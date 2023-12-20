const router = require("express").Router()

const {
    models: { User_Recipe },
} = require("../db")

module.exports = router;

router.get("/favoriteRecipe/:userId", async (req, res, next) => {
    try {
        const recipes = await User_Recipe.findOne({
            where: {
                userId: req.params.userId,
                favorite: true,
            },
        })
        res.json(recipes)
    } catch (error) {
        next(error)
    }
})

