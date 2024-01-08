import axios from 'axios'

const GET_USER_RECIPE = "GET_USER_RECIPE"


const getUserRecipe = (userRecipe) => {
    return {
        type: GET_USER_RECIPE,
        userRecipe,
    }
}

export const fetchUserRecipe = (userRecipe) => async (dispatch) => {
    const { userId, recipeId } = userRecipe
    const { data } = await axios.get(`/api/userRecipes/${userId}/${recipeId}`)
    dispatch(getUserRecipe(data))
}

// const GET_FAVORITE_RECIPE = "FAVORITE_RECIPE"

// const getFavoriteRecipe = (favoriteRecipe) => {
//     return {
//         type: GET_FAVORITE_RECIPE,
//         favoriteRecipe,
//     }
// }

// export const fetchFavoriteRecipes = (userId) => async (dispatch) => {
//     const { data } = await axios.get(`/api/userRecipes/favoriteRecipe/${userId}`)
//     dispatch(getFavoriteRecipe(data))
// }

// export default function (state = {}, action) {
//     switch (action.type) {
//         case GET_FAVORITE_RECIPE:
//             return action.favoriteRecipe
//         default:
//             return state
//     }
// }