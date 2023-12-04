import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Paper } from '@material-ui/core'

const Banner = (props) => {
    const { user } = props
    let auth = useSelector((state) => state.auth)
    // const isOwnProfile = () => {
    //     return auth.id === user.id
    // }

    const bannerStyles = {
        // backgroundImage: `url(${user.bannerImage})`,
        backgroundColor: '#98F5E1',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200',
        position: 'right',
    }


    return (
        <Container className='user-info'>
            <Paper style={bannerStyles}>
                <div>
                    <h1 style={{ fontSize: '50px', margin: '2rem' }}>
                        {auth.firstName} {auth.lastName}
                    </h1>

                </div>
            </Paper>
   
        </Container>
    )

}

export default Banner