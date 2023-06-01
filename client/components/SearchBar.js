import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
// import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
    const [search, setSearch] = useState('')
    // const navigate = useNavigate()

    function handleSubmit(evt) {
        evt.preventDefault()
        // navigate(`/search/${search}`)
    }

    return (
        <Container></Container>
    )
}