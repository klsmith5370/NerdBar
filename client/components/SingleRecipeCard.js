// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { fetchSingleRecipe } from '../store/recipe'
// import { Container, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

// export const SingleRecipeCard = () => {
//     // const recipe = useSelector(state => state.recipe)
//     // const { characterImage, recipeName, recipeIngredients, recipeInstructions, recipeDescription } = recipe
//     // const dispatch = useDispatch()
//     // const { id } = useParams()
    
//     // useEffect(() => {
//     //     dispatch(fetchSingleRecipe(id))
//     // }, [dispatch, id])

//     const recipe = useSelector(state => state.recipe)
//     const dispatch = useDispatch()
//     const { id } = useParams()

//     useEffect(() => {
//         dispatch(fetchSingleRecipe(id))
//     }, [dispatch])

//     return (
//         <Container>
//             <Card>
//                 <CardActionArea>
//                     <CardMedia 
//                         component='img'
//                         height='300'
//                         image={recipe.characterImage}
//                         alt='character image'
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant='h5'>
//                             {recipe.recipeName}
//                         </Typography>

//                         <Typography variant='body2'>
//                             {recipe.recipeDescription}
//                         </Typography>

//                         <Typography variant='body2'>
//                             {recipe.recipeIngredients}
//                         </Typography>
                
//                         <Typography variant='body2'>
//                             {recipe.recipeInstructions}
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//             </Card>
//         </Container>
//     )

// }

// export default SingleRecipeCard