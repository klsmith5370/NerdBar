import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { Container, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import { fetchSingleRecipe } from '../store/recipe'

export const SingleRecipe = () => {
    const recipe = useSelector(state => state.recipe)
    const { recipeName, recipeIngredients, recipeDescription, recipeInstructions, characterImage} = recipe
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchSingleRecipe(id))
    }, [dispatch])


    return (
        <div className='single-recipe-container'>
            <div className='character-image'>
                <img src={characterImage} alt='character image'/>
            </div>

            <div className='recipe-details'>
                <h5>{recipeName}</h5>
                <p>{recipeIngredients}</p>
                <p>{recipeInstructions}</p>
                <p>{recipeDescription}</p>
            </div>

        </div>
    )

    // return (
    //     <Container className='single-recipe'>
    //         <Card>
    //             <CardActionArea>
    //                 <CardMedia 
    //                     component='img'
    //                     height='150'
    //                     image={recipe.characterImage}
    //                     alt='character image'
    //                 />
    //                 <CardContent>
    //                     <Typography gutterBottom variant='h5'>
    //                         {recipe.recipeName}
    //                     </Typography>

    //                     <Typography variant='body2'>
    //                         {recipe.recipeDescription}
    //                     </Typography>

    //                     <Typography variant='body2'>
    //                         {recipe.recipeIngredients}
    //                     </Typography>
                
    //                     <Typography variant='body2'>
    //                         {recipe.recipeInstructions}
    //                     </Typography>

    //                 </CardContent>
    //             </CardActionArea>
    //         </Card>
    //     </Container>
    // )

}

export default SingleRecipe
