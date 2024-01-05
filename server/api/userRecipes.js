const router = require("express").Router()

const {
    models: { User_Recipe },
} = require("../db")

module.exports = router;


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

router.get('/favoriteRecipes/:userId', async (req,res, next) => {
    try {
        const favoriteRecipes = await User_Recipe.findAll({
            where: {
                userId: req.params.userId,
                favorite: true,
            },
        })
        res.json(favoriteRecipes)
    } catch (error) {

    }
})



router.get('/:userId/:recipeId', async (req, res, next) => {
    try {
        const userRecipe = await User_Recipe.findOne({
            where: {
                userId: req.params.userId,
                recipeId: req.params.recipeId,
            }
        })
        res.json(userRecipe)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await User_Recipe.create(req.body))
    } catch (error) {
        next(error)
    }
})

router.delete('/:userId/:recipeId', async (req, res, next) => {
    try {
        const userRecipe = await User_Recipe.findOne({
            where: {
                userId: req.params.userId,
                recipeId: req.params.recipeId,
            },
        })
        await userRecipe.destroy()
        res.send(userRecipe)
    } catch (error) {
        next(error)
    }
})

