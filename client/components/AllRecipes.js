import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
                <Grid item xs={14} sm={8} md={6}>
                    <RecipeCard />
                </Grid> 
            </Grid>
        </Container>
    )

    // return (
    //     <Container className='all-recipes'>
    //         <Grid container spacing={2}>
    //             {recipes.map((recipe) => (
    //                 <Grid item xs={14} sm={8} md={6} key={recipe.id}>
    //                     <RecipeCard />
    //                 </Grid>
    //             ))}
    //         </Grid>
    //         {/* <Pagination count={10} variant="outlined" color="secondary" /> */}
    //     </Container>
    // )

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