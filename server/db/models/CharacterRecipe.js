const Sequelize = require("sequelize")
const db = require("../db")

const CharacterRecipe = db.define("recipe", {
    characterName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    recipeName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    recipeIngredients: {
        type: Sequelize.TEXT,
    },

    recipeInstructions: {
        type: Sequelize.TEXT,
    },

    recipeDescription: {
        type: Sequelize.TEXT,
    },

    recipeCategory: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
    },

    characterImage: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
            notEmpty: true,
        },
    },
})

module.exports = CharacterRecipe