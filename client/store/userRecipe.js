import axios from 'axios'

const GET_USER_RECIPE = 'GET_USER_RECIPE'
const UPDATE_USER_RECIPE = 'UPDATE_USER_RECIPE'
// const FAVORITE_RECIPE = 'FAVORITE_RECIPE'

const getUserRecipe = (userRecipe) => {
    return {
        type: GET_USER_RECIPE,
        userRecipe,
    }
}

const updateUserRecipe = (userRecipe) => {
    return {
        type: UPDATE_USER_RECIPE,
        userRecipe,
    }
}

// const getFavoriteRecipe = (favoriteRecipe) => {
//     return {
//         type: FAVORITE_RECIPE,
//         favoriteRecipe,
//     }
// }

export const fetchUserRecipe = (userRecipe) => async (dispatch) => {
    const { userId, recipeId } = userRecipe
    const { data } = await axios.get(`/api/userRecipes/${userId}/${recipeId}`)
    dispatch(getUserRecipe(data))
}

// export const fetchFavoriteRecipe = (userId) => async (dispatch) => {
//     const { data } = await axios.get(`/api/userRecipes/favoriteRecipe/${userId}`)
//     dispatch(getFavoriteRecipe(data))
// }

export const fetchUpdateUserBook = (userRecipe) => async (dispatch) => {
    const { userId, recipeId } = userRecipe
    const { data } = await axios.put(`/api/userRecipes/${userId}/${recipeId}`, userRecipe)
    dispatch(updateUserRecipe(data))
}


export default function userRecipe (state = {}, action) {
    switch (action.type) {
        case GET_USER_RECIPE:
            return action.userRecipe
        // case FAVORITE_RECIPE:
        //     return action.favoriteRecipe
        case UPDATE_USER_BOOK:
            return action.userRecipe
        default:
            return state
    }
}