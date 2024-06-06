// this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const CharacterRecipe = require('./models/CharacterRecipe')
const User_Recipe = require('./models/UserRecipe')

// Associations go here!
User.hasMany(CharacterRecipe)
CharacterRecipe.belongsToMany(User, { through: User_Recipe })

module.exports = {
  db,
  models: {
    User,
    CharacterRecipe,
    User_Recipe,
  },
}
