import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, TextField, Button } from '@material-ui/core'


export const SearchBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSubmit(evt) {
        evt.preventDefault()
        navigate(`/search/${search}`)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
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