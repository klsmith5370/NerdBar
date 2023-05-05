import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SINGLE_RECIPE = 'GET_SINGLE_RECIPE'

/**
 * ACTION CREATORS
 */
export const getSingleRecipe = (recipe) => {
    return {
        type: GET_SINGLE_RECIPE,
        recipe,
    }
}


/**
 * THUNK CREATORS
 */
export const fetchSingleRecipe = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/characterRecipes/${id}`)
            dispatch(getSingleRecipe(data))
        } catch (error) {
            return error
        }
    }
}


/**
 * REDUCER
 */
export default function singleRecipeReducer(state = {}, action) {
    switch(action.type) {
        case GET_SINGLE_RECIPE:
            return action.recipe
        default:
            return state
    }
}