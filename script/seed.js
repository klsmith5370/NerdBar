'use strict'

const {db, models: {User, CharacterRecipe} } = require('../server/db')


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'kls5370', password: '123' }),
    User.create({ username: 'yuna', password: '123' }),
  ])

  const characterRecipes = await Promise.all([
    CharacterRecipe.create({
      characterName: 'Nezuko Kamado',
      recipeName: 'Blood Demon Art',
      recipeDescription: '2 oz vodka, fill with cranberry or raspberry juice',
      characterCategory: 'Anime, Kimetsu no Yaiba',
      characterImage: ''
    }),

    CharacterRecipe.create({
      characterName: '',
      recipeName: '',
      recipeDescription: '',
      characterCategory: 'Anime',
      characterImage: ''
    }),

    CharacterRecipe.create({
      characterName: '',
      recipeName: '',
      recipeDescription: '',
      characterCategory: 'Anime',
      characterImage: ''
    }),

    CharacterRecipe.create({ 
      characterName: '',
      recipeName: '',
      recipeDescription: '',
      characterCategory: 'Anime',
      characterImage: ''
    }),

    CharacterRecipe.create({
      characterName: '',
      recipeName: '',
      recipeDescription: '',
      characterCategory: 'Anime',
      characterImage: ''
    }),

    CharacterRecipe.create({
      characterName: 'Morgana',
      recipeName: '',
      recipeDescription: '',
      characterCategory: 'Video Game, Persona 5 Royal',
      characterImage: ''
    }),
    CharacterRecipe.create({
      characterName: 'Isabelle',
      recipeName: '',
      recipeDescription: '',
      characterCategory: 'Video Game, Animal Crossing',
      characterImage: ''
    }),

    CharacterRecipe.create({
      characterName: 'Pikachu',
      recipeName: 'Electro Web',
      recipeDescription: '',
      characterCategory: 'Video Game, Pokemon',
      characterImage: ''
    }),

    CharacterRecipe.create({
      characterName: 'Sephiroth',
      recipeName: 'One Winged Angel',
      recipeDescription: '',
      characterCategory: 'Video Game, Final Fantasy',
      characterImage: ''
    }),

    CharacterRecipe.create({
      characterName: '',
      recipeName: '',
      recipeDescription: '',
      characterCategory: 'Video Game, ',
      characterImage: ''
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${characterRecipes.length} recipes`)
  console.log(`seeded successfully`)
  return {
    users: {
      kls5370: users[0],
      yuna: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
