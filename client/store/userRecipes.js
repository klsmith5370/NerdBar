import axios from 'axios'

const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE'

const addFavorites = (userRecipe) => {
    return {
        type: ADD_FAVORITE_RECIPE,
        userRecipe,
    }
}

export const fetchFavoriteRecipes = (userRecipe) => async (dispatch) => {
    const { data } = await axios.post(`/api/userRecipes`, userRecipe)  
     dispatch(addFavorites(data)) 
}

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FAVORITE_RECIPE:
            return [...state, action.userRecipe]
    }
}