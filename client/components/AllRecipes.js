import React from 'react'
import { Container } from '@material-ui/core'
import { RecipeCard } from './recipeCard'
import SideBar from './SideBar'


export const AllRecipes = () => {


    return (
        <Container className='all-recipes'>
            <RecipeCard />
            <SideBar />
        </Container>

    )

    // Notes for future:
        // for pagination: {/* <Pagination count={10} variant="outlined" color="secondary" /> */}

}


export default AllRecipes
