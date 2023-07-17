const router = require('express').Router()

const {
    models: { CharacterRecipe },
} = require('../db')
module.exports = router

// getting all recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await CharacterRecipe.findAll()
        res.json(recipes)
    } catch (error) {
        next(error)
    }
})

// getting a single recipe
router.get('/:id', async(req, res, next) => {
    try {
        const recipe = await CharacterRecipe.findByPk(req.params.id)
        res.json(recipe)
    } catch (error) {
        next(error)
    }
})

// creating a recipe (will be accessible via logged in users)
router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await CharacterRecipe.create(req.body))
    } catch (error) {
        next(error)
    }
})

// deleting a recipe (will be accessible via logged in users)
router.delete('/:id', async (req, res, next) => {
    try {
        const recipe = await CharacterRecipe.findByPk(req.params.id)
        await recipe.destroy()
        res.json(recipe)
    } catch (error) {
        next(error)
    }
})