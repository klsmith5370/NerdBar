import React, { useEffect }from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { fetchSingleRecipe } from '../store/recipe'
import SingleRecipeCard from './SingleRecipeCard'

export const SingleRecipe = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchSingleRecipe(id))
    }, [dispatch])

    return (
        <Container className='single-recipe'>
            <SingleRecipeCard />
        </Container>
    )

}

export default SingleRecipe
