import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Container from '@mui/material/Container'

export const RecipeCard = (props) => {
    const { recipes } = props

    return (
        <Container fluid>
            {recipes.map((recipe) => (
                <Card key={recipe.id} sx={{ maxWidth: 345 }} className='recipe-card'>
                    <CardActionArea>
                        <Link to={`/characterRecipes/${recipe.id}`} style={{ color: 'inherit' }}>
                            <CardMedia
                                component='img'
                                height='140'
                                image={recipe.characterImage}
                                alt='character image'
                            />
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {recipe.characterName}
                            </Typography>
                            <Typography gutterBottom variant='h4'>
                                {recipe.recipeName}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {recipe.recipeDescription}
                                <br />
                                {recipe.recipeIngredients}
                                <br />
                                {recipe.recipeInstructions}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Container>
    )
}