// this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
// const CharacterRecipe = require('./models/CharacterRecipe')

// Associations go here!

module.exports = {
  db,
  models: {
    User,
    // CharacterRecipe,
  },
}
