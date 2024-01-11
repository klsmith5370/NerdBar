import axios from 'axios'

const CREATE_USER_RECIPE = 'CREATE_USER_RECIPE'
const DELETE_USER_RECIPE = 'DELETE_USER_RECIPE'

const createUserRecipe = (userRecipe) => {
    return {
        type: CREATE_USER_RECIPE,
        userRecipe,
    }
}

const deleteUserRecipe = (userRecipe) => {
    return {
        type: DELETE_USER_RECIPE,
        userRecipe,
    }
}

export const fetchCreateUserRecipe = (userRecipe) => async (dispatch) => {
    const { data } = await axios.post(`/api/userRecipes`, userRecipe)
    dispatch(createUserRecipe(data))
}

export const fetchDeleteUserRecipe = (userRecipe) => async (dispatch) => {
    const { userId, recipeId } = userRecipe
    const { data: deleted } = await axios.delete(`/api/userRecipes/${userId}/${userRecipe}`)
    dispatch(deleteUserRecipe(deleted))
}

export default function (state = [], action) {
    switch (action.type) {
        case CREATE_USER_RECIPE:
            return [...state, action.userRecipe]
        case DELETE_USER_RECIPE:
            return state.filter((userRecipe) => userRecipe.id !== action.userRecipe.id)
        default:
            return state
    }
}

// const GET_FAVORITE_RECIPES = "GET_FAVORITE_RECIPES"
// const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE'

// const addToFavorites = (userRecipe) => {
//     return {
//         type: ADD_FAVORITE_RECIPE,
//         userRecipe,
//     } 
// }

// const getFavorites = (userRecipes) => {
//     return {
//         type: GET_FAVORITE_RECIPES,
//         userRecipes,
//     }
// }

// export const addFavoriteRecipes = (userRecipes) => async (dispatch) => {
//     const { data } = await axios.post(`/api/userRecipes`, userRecipes)  
//      dispatch(addToFavorites(data)) 
// }

// export const fetchFavoriteRecipes = (userId) => async (dispatch) => {
//     const { data } = await axios.get(`/api/userRecipes/favoriteRecipes/${userId}`)
//     dispatch(getFavorites(data))
// }

// export default function (state = [], action) {
//     switch (action.type) {
//         case ADD_FAVORITE_RECIPE:
//             return [...state, action.userRecipes]
//         case GET_FAVORITE_RECIPES:
//             return action.userRecipes
//     }
// }