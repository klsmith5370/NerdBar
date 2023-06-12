import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'

export const Search = () => {
    const { characterName } = useParams()

    const characterFilter = (item) => 
        item.characterName.toLowerCase().includes(characterName.toLowerCase())

    const characters = useSelector((state) => state.recipes).filter(characterFilter)

    return (
        <Container className='search-results'>
           {characters.length > 0 ? (
            <div>
                <h3>Results: {characters.length}</h3>
                
            </div>
           ) : null}
        </Container>
    )
}

export default Search