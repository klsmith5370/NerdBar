import axios from 'axios'

const GET_FAVORITE_RECIPE = "FAVORITE_RECIPE"

const getFavoriteRecipe = (userRecipe) => {
    return {
        type: GET_FAVORITE_RECIPE,
        userRecipe,
    }
}

export const fetchFavoriteRecipe = (userId) => {
    const { data } = await axios.get(`/api/characterRecipes/favoriteRecipe`)
}