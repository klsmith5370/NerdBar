const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/characterRecipes', require('./characterRecipes'))
router.use('/userRecipes', require('./userRecipes'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
