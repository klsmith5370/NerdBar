import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Container, Button, Card, CardMedia, CardActionArea } from '@material-ui/core'


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
                                <CardActionArea>
                                    <Link to={`/characterRecipes/${recipe.id}`}>
                                    
                                        <CardMedia 
                                            recipe={recipe}
                                            component='img'
                                            height='100'
                                            width='100'
                                            image={recipe.characterImage}
                                            alt='character image'
                                        />

                                    </Link>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
            ) : null}

            <br /> 

            <Button type="submit" variant="contained" color="primary" as={Link} to='/add'>
                Don't see a favorite? Add it!
            </Button>

        </Container>
    )
}

export default Search