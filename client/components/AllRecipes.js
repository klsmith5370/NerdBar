import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { RecipeCard } from './recipeCard'
import { fetchAllRecipes } from '../store/recipes'

export const AllRecipes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [dispatch])

    return (
        <Container className='all-recipes'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={6}>
                    <RecipeCard />
                </Grid>
            </Grid>
            {/* <Pagination count={10} variant="outlined" color="secondary" /> */}
        </Container>
    )

}


export default AllRecipes


// if wanting to use regular React
    // return (
    //     <div className='all-recipes-container'>
    //         <div>
    //             {recipes.map((recipe) => (
    //                 <div key={recipe.id}>
    //                     <RecipeCard />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )