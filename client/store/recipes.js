import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
const CREATE_RECIPE = 'CREATE_RECIPE'


/**
 * ACTION CREATORS
 */
const setAllRecipes = (recipes) => {
    return {
        type: GET_ALL_RECIPES,
        recipes,
    }
}

const createRecipe = (recipe) => {
    return {
        type: CREATE_RECIPE,
        recipe,
    }
}

/**
 * THUNK CREATORS
 */

export const fetchAllRecipes = () => async (dispatch) => {
    const { data } = await axios.get('/api/characterRecipes')
    dispatch(setAllRecipes(data))
}

export const fetchCreateBook = (book, navigate) => async (dispatch) => {
    const { data: created } = await axios.post('/api/characterRecipes', book)
    dispatch(createRecipe(created))
    navigate('/characterRecipes')
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