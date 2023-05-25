import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '@material-ui/core'

export const SearchBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSubmit(evt) {
        evt.preventDefault()
        navigate(`/search/${search}`)
    }

    return (
        <Container></Container>
    )
}