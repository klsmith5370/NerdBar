import axios from 'axios'

const GET_FAVORITE_RECIPES = "GET_FAVORITE_RECIPES"
const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE'

const addToFavorites = (userRecipe) => {
    return {
        type: ADD_FAVORITE_RECIPE,
        userRecipe,
    } 
}

const getFavorites = (userRecipes) => {
    return {
        type: GET_FAVORITE_RECIPES,
        userRecipes,
    }
}

export const addFavoriteRecipes = (userRecipes) => async (dispatch) => {
    const { data } = await axios.post(`/api/userRecipes`, userRecipes)  
     dispatch(addToFavorites(data)) 
}

export const fetchFavoriteRecipes = (userId) => async (dispatch) => {
    const { data } = await axios.get(`/api/userRecipes/favoriteRecipe/${userId}`)
    dispatch(getFavorites(data))
}

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FAVORITE_RECIPE:
            return [...state, action.userRecipe]
        case GET_FAVORITE_RECIPES:
            return action.userRecipes
    }
}