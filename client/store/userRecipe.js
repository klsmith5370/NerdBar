import axios from 'axios'

const GET_USER_RECIPE = 'GET_USER_RECIPE'
const UPDATE_USER_RECIPE = 'UPDATE_USER_RECIPE'
const FAVORITE_RECIPE = 'FAVORITE_RECIPE'

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

const getFavoriteBook = (favoriteRecipe) => {
    return {
        type: FAVORITE_RECIPE,
        favoriteRecipe,
    }
}

export const fetchUserRecipe = (userRecipe) => async (dispatch) => {
    const { userId, recipeId } = userRecipe
    const { data } = await axios.get(`/api/userRecipes/${userId}/${recipeId}`)
    dispatch(getUserRecipe(data))
}


export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER_RECIPE:
            return action.userRecipe
        default:
            return state
    }
}