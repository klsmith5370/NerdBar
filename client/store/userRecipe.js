import axios from 'axios'

const GET_FAVORITE_RECIPE = "FAVORITE_RECIPE"

const getFavoriteRecipe = (favoriteBook) => {
    return {
        type: GET_FAVORITE_RECIPE,
        favoriteBook,
    }
}

export const fetchFavoriteRecipe = (userId) => async (dispatch) => {
    const { data } = await axios.get(`/api/characterRecipes/favoriteRecipe/${userId}`)
    dispatch(getFavoriteRecipe(data))
}

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FAVORITE_RECIPE:
            return action.favoriteBook
        default:
            return state
    }
}