import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

export const SingleRecipeCard = () => {
    const recipe = useSelector(state => state.recipe)
    const { characterImage, recipeName, recipeIngredients, recipeInstructions, recipeDescription } = recipe

    return (
        <Container>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        height='150'
                        image={characterImage}
                        alt='character image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5'>
                            {recipeName}
                        </Typography>

                        <Typography variant='body2'>
                            {recipeDescription}
                        </Typography>

                        <Typography variant='body2'>
                            {recipeIngredients}
                        </Typography>
                
                        <Typography variant='body2'>
                            {recipeInstructions}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )

}

export default SingleRecipeCard