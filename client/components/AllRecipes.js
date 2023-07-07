import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { RecipeCard } from './recipeCard'

export const AllRecipes = () => {


    return (
        <Container className='all-recipes'>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={6} md={6} lg={6}>
                    <RecipeCard />
                </Grid>
            </Grid>
        </Container>

    )

    // Notes for future:
        // for pagination: {/* <Pagination count={10} variant="outlined" color="secondary" /> */}

}


export default AllRecipes
