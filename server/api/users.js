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
    const user = await User.findByPk(req.params.id, {
      include: [CharacterRecipe],
    })
    res.json(user)

  } catch (err) {
    next(err)
  }
})

router.put('/:id', async(req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id)
    await user.update(req.body)
    user = await User.findByPk(req.params.id, {
      include: [CharacterRecipe],
    })
    res.send(user)

  } catch (err) {
    next(err)
  }
})

