import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

export const SingleRecipeCard = () => {
    const recipe = useSelector((state) => state.recipe)
    const {characterImage, recipeName, recipeIngredients, recipeInstructions} = recipe
    const { id } = useParams()

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
                        <Typography variant='body2'>

                        </Typography>

                        <Typography variant='body2'>

                        </Typography>

                        <Typography variant='body2'>

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )

}