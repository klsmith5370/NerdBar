import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Paper } from '@material-ui/core'



const Banner = (props) => {
    const { user } = props
    let auth = useSelector((state) => state.auth)
    const isOwnProfile = () => {
        return auth.id === user.id
    }
    const dispatch = useDispatch()

    const bannerStyles = {
        backgroundImage: `url(${user.bannerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200',
        position: 'relative',
    }


    return (
        <Container>
            <Paper style={bannerStyles}>
                <div>
                    {/* Add in profile information */}
                </div>
            </Paper>
   
        </Container>
    )

}

export default Banner