import axios from 'axios'

const GET_FAVORITE_RECIPE = "FAVORITE_RECIPE"

const getFavoriteRecipe = (favoriteRecipe) => {
    return {
        type: GET_FAVORITE_RECIPE,
        favoriteRecipe,
    }
}

export const fetchFavoriteRecipes = (userId) => async (dispatch) => {
    const { data } = await axios.get(`/api/userRecipes/favoriteRecipe/${userId}`)
    dispatch(getFavoriteRecipe(data))
}

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FAVORITE_RECIPE:
            return action.favoriteRecipe
        default:
            return state
    }
}