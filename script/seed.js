'use strict'

const {db, models: {User, CharacterRecipes} } = require('../server/db')


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
    CharacterRecipes.create({
      characterName: 'Nezuko',
      recipeName: 'Blood Demon Art',
      recipeDescription: '2 oz vodka, fill with cranberry or raspberry juice, a splash of soda and grenadine, add lychee jelly for garnish',
      recipeCategory: 'Alcoholic, drinks',
      characterImage: 'https://cdn.epicstream.com/images/ncavvykf/epicstream/1291d35e00f077741819c23a19e5043c0a54e8fc-864x382.png'
    }),

    CharacterRecipes.create({
      characterName: 'Anya Forger',
      recipeName: 'WAKU WAKU!',
      recipeDescription: 'fill glass with your favorite lemon-lime soda and mix with pink cranberry juice, garnish with cut-out lemon stars',
      recipeCategory: 'Non-alcoholic, drinks',
      characterImage: 'https://img1.ak.crunchyroll.com/i/spire2/59a30d14cee549bafa1f0ba5f6f4e6681650356534_full.png'
    }),

    CharacterRecipes.create({
      characterName: '',
      recipeName: '',
      recipeDescription: '',
      recipeCategory: 'Non-alcoholic, drinks',
      characterImage: ''
    }),

    CharacterRecipes.create({
      characterName: 'Morgana',
      recipeName: 'Not A Cat!',
      recipeDescription: '1 oz tequila of your choice, 1 oz rum of your choice, ice, blackberry/black cherry juice of your choice, garnish with black sea salt around the rim',
      recipeCategory: 'Alcoholic, drinks',
      characterImage: 'https://cdn.shopify.com/s/files/1/0101/1036/9888/products/UDONStore-Product-P5Shirt-MorganaInsta_1080x.jpg'
    }),

    CharacterRecipes.create({
      characterName: 'Sephiroth',
      recipeName: 'One Winged Angel',
      recipeDescription: '',
      recipeCategory: 'Alcholic, drinks',
      characterImage: 'https://rare-gallery.com/uploads/posts/332547-Sephiroth-Final-Fantasy-7-Remake-4K.jpg'
    }),

    CharacterRecipes.create({
      characterName: 'Princess Peach',
      recipeName: 'Peach Kingdom',
      recipeDescription: '2 oz peach schnapps, 2 oz lemon vodka, ',
      recipeCategory: 'Alcoholic, drinks',
      characterImage: 'https://play.nintendo.com/images/profile-mk-peach.7bf2a8f2.aead314d58b63e27.png'
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
