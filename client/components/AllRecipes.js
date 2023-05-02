import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import Container from '@mui/material/Container'
import { RecipeCard } from './recipeCard'

export const AllRecipes = () => {
    let recipes = useSelector((state) => state.recipes)

    return (
        <Container fluid className='all-recipes'>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                    <Item>
                        <RecipeCard />
                    </Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item>2</Item>
                    </Grid>
                </Grid>
            </Box>
            <Pagination count={10} variant="outlined" color="secondary" />
        </Container>
    )
}