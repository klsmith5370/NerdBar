import React, { useEffect }from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { fetchSingleRecipe } from '../store/recipe'

export const SingleRecipe = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleRecipe(id))
    }, [dispatch])

    return (
        <Container className='single-recipe'>

        </Container>
    )

}

export default SingleRecipe
