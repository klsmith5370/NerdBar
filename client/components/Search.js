import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import SingleRecipeCard from './SingleRecipeCard'
import RecipeCard from './recipeCard'
import { fetchSingleRecipe } from '../store/recipe'


export const Search = () => {
    const { characterName } = useParams()

    const characterFilter = (item) => 
        item.characterName.toLowerCase().includes(characterName.toLowerCase())

    const recipes = useSelector((state) => state.recipes)
    const filteredRecipes = recipes.filter(characterFilter)

    return (
        <Container className='search-results'>
           {filteredRecipes.length > 0 ? (
            <div>
                <h3>Results: {filteredRecipes.length}</h3>
                {filteredRecipes.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <SingleRecipeCard recipe={recipe} />
                        </div>
                    )
                })}
            </div>
           ) : null}
        </Container>
    )
}

export default Search