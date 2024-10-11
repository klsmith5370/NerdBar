const router = require("express").Router()

const User = require('../db/models/User')
const CharacterRecipe = require('../db/models/CharacterRecipe')

const {
    models: { User_Recipe },
} = require("../db")

module.exports = router;

router.get('/:userId/:recipeId', async (req, res, next) => {
    try {
        const userRecipe = await User_Recipe.findOne({
            where: {
                userId: req.params.userId,
                recipeId: req.params.recipeId
            }
        })
        res.json(userRecipe)
    } catch (error) {
        next(error)
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

router.get('/:userId/favorite-recipes', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId, {
            include: {
                model: CharacterRecipe, 
                through: { where: { favorite: true } }, 
            }
        })
        res.json(user)
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

router.put('/:userId/:recipeId', async (req, res, next) => {
    try {
        const userRecipe = await User_Recipe.findOne({
            where: {
                userId: req.params.userId,
                recipeId: req.params.recipeId,
            },
        })
        res.send(await userRecipe.update(req.body))
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


// router.get("/favoriteRecipe/:userId", async (req, res, next) => {
//     try {
//         const favoriteRecipe = await User_Recipe.findOne({
//             where: {
//                 userId: req.params.userId,
//                 favorite: true,
//             },
//         })
//         res.json(favoriteRecipe)
//     } catch (error) {
//         next(error)
//     }
// })

// router.get('/favoriteRecipes/:userId', async (req,res, next) => {
//     try {
//         const favoriteRecipes = await User_Recipe.findAll(req.params.userId, {
//             where: {
//                 userId: req.params.userId,
//                 favorite: true,
//             },
//         })
//         res.json(favoriteRecipes)
//     } catch (error) {
//         next(error)
//     }
// })