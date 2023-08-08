import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import RecipeCard from './recipeCard'


export const Search = () => {
    const { characterName } = useParams()
    const dispatch = useDispatch()

    const characterFilter = (item) => 
        item.characterName.toLowerCase().includes(characterName.toLowerCase())

    const recipes = useSelector((state) => state.recipe)
    const filteredRecipes = recipes.filter(characterFilter)

    return (
        <Container className='search-results'>
           {filteredRecipes.length > 0 ? (
            <div>
                <h3>Results: {filteredRecipes.length}</h3>
                {filteredRecipes.map((recipe) => {
                    <div key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </div>
                })}
            </div>
           ) : null}
        </Container>
        
    )
}

export default Search