const router = require("express").Router()

const User = require('../db/models/User')
const CharacterRecipe = require('../db/models/CharacterRecipe')
const UserRecipe = require('../db/models/UserRecipe')

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

router.get('/favoriteRecipes/:userId', async (req,res, next) => {
    try {
        const favoriteRecipes = await User_Recipe.findAll(req.params.userId, {
            where: {
                userId: req.params.userId,
                favorite: true,
            },
        })
        res.json(favoriteRecipes)
    } catch (error) {
        next(error)
    }
})

// router.get("/favoriteRecipes/:userId", async (req, res, next) => {
//     try {
//         const favoriteRecipes = await User_Recipe.findAll({
//             where: {
//                 userId: req.params.userId,
//                 favorite: true,
//             },
//         })
//         if (favoriteRecipes.length > 0) {
//             res.json(favoriteRecipes)
//         } else {
//             res.status(404).json({ error: "No favorite recipes found for this user." })
//         }   
//     } catch (error) {
//         next(error)
//     }
// })

// router.get('/:userId/favorites', async (req, res, next) => {
//     try {
//         const favorites = await User.findByPk(req.params.userId, {
//             include: {
//                 model: UserRecipe, 
//                 through: { where: { favorite: true } }, 
//             }
//         })
//         res.json(favorites)
//     } catch (error) {
//         next(error)
//     }
// })

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



