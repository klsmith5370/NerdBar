import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, TextField, Button } from '@material-ui/core'
import { fetchAllRecipes } from '../store/recipes'


export const SearchBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSubmit(evt) {
        evt.preventDefault()
        navigate(`/search/${search}`)
    }

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [dispatch])

    return (
        <Container>
            <form onSubmit={handleSubmit} className='search'>
                <TextField 
                    label='Search'
                    value={search}
                    onChange={(evt) => setSearch(evt.target.value)}
                />

                <Button type='submit' variant='contained' color='primary'>
                    Search!
                </Button>
            </form>
        </Container>
    )
}