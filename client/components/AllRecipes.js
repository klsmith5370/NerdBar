import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Container } from '@material-ui/core'
// import { Grid } from '@material-ui/core'
import RecipeCard from './recipeCard'
import { fetchAllRecipes } from '../store/recipes'

export const AllRecipes = () => {
    const recipes = useSelector((state) => state.recipes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [dispatch])

    return (
        <div className='all-recipes-container'>
            <div>
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <RecipeCard recipe={recipe}/>
                    </div>
                ))}
            </div>
        </div>
    )
}


// const AllRecipes = () => {
//     const recipes = useSelector((state) => state.recipes)


//     return (
//         <Container className='all-recipes'>
//             <Grid container spacing={2}>
//                 {recipes.map((recipe) => (
//                     <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//                         <RecipeCard recipe={recipe}/>
//                     </Grid>
//                 ))}
//             </Grid>
//             {/* <Pagination count={10} variant="outlined" color="secondary" /> */}
//         </Container>
//     )
// }

export default AllRecipes