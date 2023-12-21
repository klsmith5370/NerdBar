import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import { fetchSingleRecipe } from '../store/recipe'

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
                        height='100'
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

                    <h5>Description:</h5>

                    <Typography variant='body2'>
                        {recipeDescription}
                    </Typography>

                    <br />

                    <h5>Ingredients:</h5>
                    <Typography variant='body2'>
                        {recipeIngredients}
                    </Typography>

                    <br />

                    <h5>Instructions:</h5>
            
                    <Typography variant='body2'>
                        {recipeInstructions}
                    </Typography>

                    </CardContent>
                
            </Card>
        </Container>
    )

}

export default SingleRecipe
