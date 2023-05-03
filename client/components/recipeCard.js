import React, { useEffect }from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core'
import { fetchAllRecipes } from '../store/recipes'


export const RecipeCard = () => {
    const recipes = useSelector(state => state.recipes)

    return (
        <div className='recipe-card-container'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='recipe-card'>
                      <Link to={`/characterRecipes/${recipe.id}`} style={{ color: 'inherit' }}>
                        <img src={recipe.characterImage} alt='character image' className='recipe-card-image' />
                      </Link>

                      <div>
                        <h3>{recipe.characterName}</h3>
                        <h2>{recipe.recipeName}</h2>
                        <p>{recipe.recipeDescription}</p>
                      </div>
                </div>
            ))}
        </div>
    )
}


// const RecipeCard = () => {
//     const recipes = useSelector(state => state.recipes)

//     return (
//         <Container className='recipe-card'>
//             {recipes.map((recipe) => (
//                 <Card key={recipe.id} sx={{ maxWidth: 345 }}>
//                     <CardActionArea>
//                         <Link to={`/characterRecipes/${recipe.id}`} style={{ color: 'inherit' }}>
//                             <CardMedia
//                                 component='img'
//                                 height='140'
//                                 image={recipe.characterImage}
//                                 alt='character image'
//                             />
//                         </Link>
//                         <CardContent>
//                             <Typography gutterBottom variant='h5' component='div'>
//                                 {recipe.characterName}
//                             </Typography>
//                             <Typography gutterBottom variant='h4'>
//                                 {recipe.recipeName}
//                             </Typography>
//                             <Typography variant='body2' color='text.secondary'>
//                                 {recipe.recipeDescription}
//                                 {/* {recipe.recipeIngredients}
//                                 {recipe.recipeInstructions} */}
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//         ))}
//         </Container>
//     )
// }
