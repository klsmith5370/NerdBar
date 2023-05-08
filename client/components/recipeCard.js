import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core'

export const RecipeCard = () => {
    const recipes = useSelector(state => state.recipes)


    return (
        <Container className='recipe-cards'>
            <Grid container spacing={2}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={recipe.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to={`/characterRecipes/${recipe.id}`}>
                                    <CardMedia 
                                        component='img'
                                        height='300'
                                        image={recipe.characterImage}
                                        alt='character image'
                                    />
                                </Link>

                                <CardContent>
                                    <Typography gutterBottom variant='h4' component='div'>
                                        {recipe.characterName}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default RecipeCard
