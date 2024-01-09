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


export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER_RECIPE:
            return action.userRecipe
        default:
            return state
    }
}