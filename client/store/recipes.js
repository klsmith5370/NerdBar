import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_RECIPES = 'GET_ALL_RECIPES'


/**
 * ACTION CREATORS
 */
const setAllRecipes = (recipes) => ({
    type: GET_ALL_RECIPES,
    recipes,
})


/**
 * THUNK CREATORS
 */

export const fetchAllRecipes = () => async (dispatch) => {
    dispatch({ type: 'INC'})
    let { data } = await axios.get('/api/characterRecipes')
    dispatch(setAllRecipes(data))
    dispatch({ type: 'DEC'})
}

/**
 * REDUCER
 */
export default function recipesReducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return action.recipes
        default:
            return state
    }
}