import axios from 'axios'

// ACTION TYPES
const GET_SINGLE_RECIPE = 'GET_SINGLE_RECIPE'


// ACTION CREATORS
const setSingleRecipe = (recipe) => {
    return {
        type: GET_SINGLE_RECIPE,
        recipe,
    }
}

export const fetchSingleRecipe = (id) => async (dispatch) => {
    const { data: recipe } = await axios.get(`/api/characterRecipes/${id}`)
    dispatch(setSingleRecipe(recipe))
}

// REDUCER 
export default function singleRecipeReducer(state = {}, action) {
    switch(action.type) {
        case GET_SINGLE_RECIPE:
            return action.recipe
        default:
            return state
    }
}

