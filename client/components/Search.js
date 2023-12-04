import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Container, Button } from '@material-ui/core'
import SingleRecipeCard from './SingleRecipeCard'


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
                    <div key={recipe.id}>
                        <SingleRecipeCard />
                    </div>
                })}
            </div>
           ) : null}
            <Button type="submit" variant="contained" color="primary" as={Link} to='/add'>
                Don't see a favorite? Add it!
            </Button>
        </Container>
        
    )
}

export default Search