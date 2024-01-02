const router = require("express").Router()

const {
    models: { User_Recipe },
} = require("../db")

module.exports = router;

router.post("/favoriteRecipe/:userId/:recipeId", async (req, res, next) => {
    try {
        const { userId, recipeId } = req.params;

        // Check if the user_recipe record already exists
        let userRecipe = await User_Recipe.findOne({
            where: {
                userId,
                recipeId,
            },
        });

        if (!userRecipe) {
            // If it doesn't exist, create a new user_recipe record
            userRecipe = await User_Recipe.create({
                userId,
                recipeId,
                favorite: true,
            });
        } else {
            // If it exists, update the favorite status
            userRecipe.favorite = true;
            await userRecipe.save();
        }

        res.json(userRecipe);
    } catch (error) {
        next(error);
    }
})

router.get("/favoriteRecipes/:userId", async (req, res, next) => {
    try {
        const recipes = await User_Recipe.findAll({
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

// router.get("/favoriteRecipe/:userId", async (req, res, next) => {
//     try {
//         const recipes = await User_Recipe.findOne({
//             where: {
//                 userId: req.params.userId,
//                 favorite: true,
//             },
//         })
//         res.json(recipes)
//     } catch (error) {
//         next(error)
//     }
// })

