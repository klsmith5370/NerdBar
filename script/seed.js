'use strict'

const { db, models: { User, CharacterRecipe, User_Recipe } } = require('../server/db/index')


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ firstName: 'Kourtney', lastName: 'Smith', username: 'kls5370', password: '123' }),
    User.create({ firstName: 'Nezuko', lastName: 'Kamado', username: 'nezukama', password: '123' }),
  ])

  // Creating recipes434
  const characterRecipes = await Promise.all([
    CharacterRecipe.create({
      characterName: 'Nezuko',
      recipeName: 'Blood Demon Art',
      recipeIngredients: '1/2 oz blood orange juice. 1 oz raspberry liqueur, 1 oz vodka. 12 oz lime juice. Splash of grenadine. Edible gold glitter for garnish.',
      recipeInstructions: 'In a cocktail shaker filled with ice, combine blood orange juice, raspberry liqueur, vodka, and lime juice. Shake well until ingredients are well combined and chilled. Strain mixture into a chilled glass. Add a splash of grenadine to the top of the cocktail. Garnish with a sprinkle of edible gold glitter to represent Nezukos fiery powers. Enjoy responsibly!',
      recipeDescription: 'This cocktail is inspired by Nezukos fiery spirit and her striking red and black color scheme. The blood orange juice and raspberry liqueur create a deep, rich hue reminiscent of the Blood Moon, while the vodka and lime juice add a tart and refreshing kick. The grenadine provides a sweet finish, and the edible gold glitter adds a touch of glamour fit for a demon slayer.',
      characterImage: 'https://cdn.epicstream.com/images/ncavvykf/epicstream/1291d35e00f077741819c23a19e5043c0a54e8fc-864x382.png'
    }),

    CharacterRecipe.create({
      characterName: 'Anya Forger',
      recipeName: 'WAKU WAKU!',
      recipeIngredients: '1 cup of fresh mixed berries (strawberries, raspberries, blueberries). 1/2 cup of fresh orange juice. 1/4 cup of fresh lemon juice. 1/4 cup of agave syrup. 1 cup of sparkling water. Ice cubes.',
      recipeInstructions: 'Wash and rinse the mixed berries thoroughly and put them in a blender. Add the orange juice, lemon juice, and agave syrup to the blender and blend the mixture until smooth. Pour the blended mixture into a tall glass filled with ice cubes. Top off the glass with sparkling water and stir gently. Garnish with a slice of lemon and a strawberry on the rim of the glass. Serve and enjoy!',
      recipeDescription: 'Anya Forger from Spy Family is a young, energetic and playful girl who loves to have fun. Taking inspiration from her personality and interests, this non-alcoholic drink that is colorful, refreshing, and perfect for a sunny day out.',
      characterImage: 'https://img1.ak.crunchyroll.com/i/spire2/59a30d14cee549bafa1f0ba5f6f4e6681650356534_full.png'
    }),

    CharacterRecipe.create({
      characterName: 'Sailor Moon',
      recipeName: 'Moon Prism Power',
      recipeIngredients: '2 oz gin. 1 oz blue curacao. 1 oz pineapple juice. 1 oz lime juice. 1 oz simple syrup. Edible silver glitter or edible pearl dust (optional, for decoration).',
      recipeInstructions: 'Fill a cocktail shaker with ice. Add gin, blue curacao, pineapple juice, lime juice, and simple syrup. Shake well until chilled and strain into a chilled glass. Optional: Add a sprinkle of edible silver glitter or edible pearl dust for a magical effect. Garnish with a slice of pineapple or a lime wedge, if desired.',
      recipeDescription: 'This Sailor Moon-inspired cocktail is perfect for any Sailor Moon fan or anime lover. With its vibrant blue color and tropical flavors, it will transport you to the magical world of Sailor Moon and her friends. Enjoy!',
      characterImage: 'https://screenrant.com/wp-content/uploads/2019/12/Sailor-Moon-Cropped.jpg'
    }),

    CharacterRecipe.create({
      characterName: 'Morgana',
      recipeName: 'Not A Cat',
      recipeIngredients: '2 oz dark rum. 1 oz fresh lime juice. 1 oz blackberry liqueur. 1/2 oz ginger syrup. 1/2 oz demerara syrup. 2 dashes aromatic bitters. Ginger beer. Mint sprig and blackberries for garnish.',
      recipeInstructions: 'Fill a cocktail shaker with ice. Add the dark rum, fresh lime juice, blackberry liqueur, ginger syrup, demerara syrup, and aromatic bitters. Shake well until the shaker is frosted. Fill a copper mug with ice. Strain the cocktail into the copper mug over the ice. Top with ginger beer. Stir gently to combine. Garnish with a mint sprig and a few blackberries. Enjoy!',
      recipeDescription: 'This cocktail is inspired by the playful and mysterious character Morgana from the popular video game Persona 5. The Midnight Mule is a dark and intriguing drink that combines the rich flavors of dark rum, blackberry liqueur, and ginger syrup, with a touch of lime juice and aromatic bitters. The addition of demerara syrup gives it a subtle sweetness, while the ginger beer adds a spicy kick. The cocktail is then garnished with a mint sprig and a few blackberries, giving it a fresh and fruity aroma. Sipping on a Morganas Midnight Mule will transport you to the streets of Tokyo at night, as you navigate through the neon lit city with the Phantom Thieves.',
      characterImage: 'https://cdn.shopify.com/s/files/1/0101/1036/9888/products/UDONStore-Product-P5Shirt-MorganaInsta_1080x.jpg'
    }),

    CharacterRecipe.create({
      characterName: 'Sephiroth',
      recipeName: 'One-Winged Angel',
      recipeIngredients: '1 1/2 oz dark rum. 1 oz pineapple juice. 1/2 oz lime juice. 1/2 oz blue curaçao. 1/4 oz grenadine. 1/4 oz absinthe. Pineapple wedge, for garnish.',
      recipeInstructions: 'Combine the dark rum, pineapple juice, lime juice, blue curaçao, and grenadine in a shaker with ice. Shake well and strain into a chilled glass filled with ice. Slowly pour the absinthe over the back of a spoon to float it on top of the cocktail. Garnish with a pineapple wedge. Sip and feel the power of the One-Winged Angel course through you.',
      recipeDescription: 'This cocktail is inspired by Sephiroths infamous transformation into his One-Winged Angel form during the final battle of FF7. The dark rum and pineapple juice represent the darkness and power of his character, while the blue curaçao and grenadine add a touch of his signature color. The absinthe float on top represents the ethereal and otherworldly nature of his transformation. Sip on this cocktail and embrace your own inner power. Enjoy!',
      characterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoWkigGkbbuX2E-611OkErnU6Ok8iWVoK9w&usqp=CAU'
    }),

    CharacterRecipe.create({
      characterName: 'Princess Peach',
      recipeName: 'Peachy Punch',
      recipeIngredients: '2 ripe peaches, pitted and sliced. 2 cups peach nectar. 1/2 cup pineapple juice. 1/4 cup honey. 2 tablespoons lemon juice. 1 cup sparkling water. Ice. Peach slices and mint leaves for garnish.',
      recipeInstructions: 'In a blender, combine the sliced peaches, peach nectar, pineapple juice, honey, and lemon juice; blend until smooth. Pour the mixture into a pitcher and add the sparkling water; stir to combine. Fill glasses with ice and pour the punch over the ice. Garnish with peach slices and mint leaves. Enjoy!',
      recipeDescription: 'Peachy Punch is a delicious non-alcoholic drink recipe inspired by the iconic character from Super Mario Bros. This refreshing and fruity punch is made with ripe peaches, peach nectar, pineapple juice, honey, and lemon juice, all blended together until smooth. The addition of sparkling water gives the punch a bubbly and effervescent quality, while the peach slices and mint leaves add a beautiful touch of color and flavor. This drink is perfect for any occasion, whether you are hosting a party or simply looking for a tasty and refreshing beverage to enjoy on a warm day. Sip on this Peachy Punch and feel like royalty, just like Princess Peach herself!',
      characterImage: 'https://play.nintendo.com/images/profile-mk-peach.7bf2a8f2.aead314d58b63e27.png'
    }),

  ])

  // Favorite:
  for (let i = 1; i <= 3; i++) {
    let done = []
    for (let j = 1; j <= 15; j++) {
      let recipeIdNum = Math.floor(Math.random() * 6) + 1
      if (done.includes(recipeIdNum)) {
        do {
          recipeIdNum = Math.floor(Math.random() * 6) + 1
        } while (done.includes(recipeIdNum))
      } else {
        done.push(recipeIdNum)
      }

      await Promise.all([
        User_Recipe.create({
          userId: i,
          recipeId: recipeIdNum,
          favorite: true,
        })
      ])

      // const existingRecord = await User_Recipe.findOne({
      //   where: {
      //     userId: i,
      //     recipeId: recipeIdNum
      //   },
      // })

      // if (!existingRecord) {
      //   await User_Recipe.create({
      //     userId: i,
      //     recipeId: recipeIdNum,
      //     favorite: true,
      //   })
      // }
      
    }
  }


  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${characterRecipes.length} recipes`)
  console.log(`seeded successfully`)
  return {
    users: {
      kls5370: users[0],
      nezukama: users[1]
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
