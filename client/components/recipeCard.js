import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core'

export const RecipeCard = () => {
    const recipes = useSelector(state => state.recipes)

    return (
        <Container className='recipe-card'>
            {recipes.map((recipe) => (
                <Card key={recipe.id} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <Link to={`/characterRecipes/${recipe.id}`}>
                            <CardMedia
                                component='img'
                                height='140'
                                image={recipe.characterImage}
                                alt='character image'
                            />
                        </Link>
                        <CardContent>

                            <Typography gutterBottom variant='h4' component='div'>
                                {recipe.characterName}
                            </Typography>

                            {/* <Typography gutterBottom variant='h4'>
                                {recipe.recipeName}
                            </Typography> */}

                            {/* <Typography variant='body2'>
                                {recipe.recipeDescription}
                            </Typography> */}
{/* 
                            <br />

                            <Typography variant='body2'>
                                {recipe.recipeIngredients}
                            </Typography>

                            <br />

                            <Typography variant='body2'>
                            {recipe.recipeInstructions}
                            </Typography> */}

                        </CardContent>
                    </CardActionArea>
                </Card>
        ))}
        </Container>
    )
}

export default RecipeCard

// if wanting to use regular React
    // return (
    //     <div className='recipe-card-container'>
    //         {recipes.map(recipe => (
    //             <div key={recipe.id} className='recipe-card'>
    //                   <Link to={`/characterRecipes/${recipe.id}`} style={{ color: 'inherit' }}>
    //                     <img src={recipe.characterImage} alt='character image' className='recipe-card-image' />
    //                   </Link>

    //                   <div>
    //                     <h3>{recipe.characterName}</h3>
    //                     <h2>{recipe.recipeName}</h2>
    //                     <p>{recipe.recipeDescription}</p>
    //                     <p>{recipe.recipeIngredients}</p>
    //                     <p>{recipe.recipeInstructions}</p>
    //                   </div>
    //             </div>
    //         ))}
    //     </div>
    // )