import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@material-ui/core'


export const RecipeCard = () => {
    const recipes = useSelector(state => state.recipes)

    return (
        <Container className='recipe-cards'>
            <Grid container spacing={2} justifyContent='center' alignItems='center'>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={recipe.id}>
                        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#FFC6FF', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
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
                                    <Typography gutterBottom variant='h5' component='div'>
                                        {recipe.characterName}
                                    </Typography>

                                    <Typography gutterBottom variant='h6'>
                                        {recipe.recipeName}
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
