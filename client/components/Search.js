import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Container, Button, Card, CardMedia } from '@material-ui/core'
import SingleRecipe from './SingleRecipe'
import RecipeCard from './recipeCard'


export const Search = () => {
    const { characterName } = useParams()

    const characterFilter = (item) => 
        item.characterName.toLowerCase().includes(characterName.toLowerCase())

    const recipe = useSelector((state) => state.recipes)
    const filteredRecipes = recipe.filter(characterFilter)

    return (
        <Container className='search-results'>
            {filteredRecipes.length > 0 ? (
                <div>
                    <h3>Results: {filteredRecipes.length}</h3>
                    {filteredRecipes.map((recipe) => {
                        return (
                            <Card key={recipe.id}>
                                <CardMedia 
                                    recipe={recipe}
                                    component='img'
                                    height='100'
                                    image={recipe.characterImage}
                                    alt='character image'
                                />
                            </Card>
                        )
                    })}
                </div>
            ) : null}
            <Button type="submit" variant="contained" color="primary" as={Link} to='/add'>
                Don't see a favorite? Add it!
            </Button>
        </Container>
    )
    // return (
    //     <Container className='search-results'>
    //         {recipes.length > 0 ? (
    //             <div>
    //                 <h3>Results: {recipes.length}</h3>
    //                 {recipes.map((recipe) => {
    //                     <div key={recipe.id}>
    //                         <SingleRecipe />
    //                     </div>
    //                 })}
    //             </div>
    //        ) : null}
    //         <Button type="submit" variant="contained" color="primary" as={Link} to='/add'>
    //             Don't see a favorite? Add it!
    //         </Button>
    //     </Container>
        
    // )
}

export default Search