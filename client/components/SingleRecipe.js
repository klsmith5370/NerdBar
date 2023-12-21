import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { Container, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import { fetchSingleRecipe } from '../store/recipe'
import { FaArrowLeft } from 'react-icons/fa'

export const SingleRecipe = () => {
    const recipe = useSelector(state => state.recipe)
    const { characterName, recipeName, recipeIngredients, recipeDescription, recipeInstructions, characterImage} = recipe
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchSingleRecipe(id))
    }, [dispatch])


    return (
        <Container className='single-recipe'>
            <Card>
                
                    <CardMedia 
                        component='img'
                        height='400'
                        image={characterImage}
                        alt='character image'
                    />
                    <CardContent>

                    <Typography gutterBottom variant='h2'>
                        {characterName}
                    </Typography>

                    <Typography gutterBottom variant='h4'>
                        {recipeName}
                    </Typography>

                    <h3>Description:</h3>

                    <Typography variant='body2'>
                        {recipeDescription}
                    </Typography>

                    <br />

                    <h3>Ingredients:</h3>
                    <Typography variant='body2'>
                        {recipeIngredients}
                    </Typography>

                    <br />

                    <h3>Instructions:</h3>
            
                    <Typography variant='body2'>
                        {recipeInstructions}
                    </Typography>

                    <br />

                    <Link to={'/characterRecipes'}>
                        <Button color='primary' variant='contained'><FaArrowLeft style={{ marginRight: '10px' }}/> Back to all recipes</Button>
                    </Link>

                    </CardContent>
                
            </Card>
        </Container>
    )

}

export default SingleRecipe
