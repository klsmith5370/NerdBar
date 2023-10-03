import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'

const Banner = (props) => {
    const { user } = props
    let auth = useSelector((state) => state.auth)
    const isOwnProfile = () => {
        return auth.id === user.id
    }
    const dispatch = useDispatch()

    return (
        <Container>

        </Container>
    )

}

export default Banner