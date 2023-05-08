import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import { RecipeCard } from './recipeCard'
import { fetchAllRecipes } from '../store/recipes'


export const AllRecipes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [dispatch])

    return (
        <Container className='all-recipes'>
            <RecipeCard />

        </Container>

    )

    // Notes for future:
        // for pagination: {/* <Pagination count={10} variant="outlined" color="secondary" /> */}

}


export default AllRecipes
