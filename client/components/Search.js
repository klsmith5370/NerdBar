import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import RecipeCard from './recipeCard'
import SingleRecipeCard from './SingleRecipeCard'

export const Search = () => {
    const { characterName } = useParams()

    const characterFilter = (item) => 
        item.characterName.toLowerCase().includes(characterName.toLowerCase())

    const filteredRecipes = useSelector((state) => state.recipes).filter(characterFilter)

    return (
        <Container className='search-results'>
           {filteredRecipes.length > 0 ? (
            <div>
                <h3>Results: {filteredRecipes.length}</h3>
                {filteredRecipes.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <SingleRecipeCard recipe={filteredRecipes} />
                        </div>
                    )
                })}
            </div>
           ) : null}
        </Container>
    )
}

export default Search