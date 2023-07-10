import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { RecipeCard } from './recipeCard'

export const AllRecipes = () => {


    return (
        <Container className='all-recipes'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8} lg={8}>
                    <RecipeCard />
                </Grid>

            </Grid>
        </Container>

    )

    // Notes for future:
        // for pagination: {/* <Pagination count={10} variant="outlined" color="secondary" /> */}

}


export default AllRecipes
