const router = require('express').Router()
const { 
  models: { User },
  models: { CharacterRecipe },
} = require('../db')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', "firstName", "lastName"]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async(req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)

  } catch (err) {
    next(err)
  }
})
