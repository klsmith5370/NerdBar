import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Paper } from '@material-ui/core'



const Banner = (props) => {
    const { user } = props
    let auth = useSelector((state) => state.auth)
    // const isOwnProfile = () => {
    //     return auth.id === user.id
    // }
    // const dispatch = useDispatch()

    const bannerStyles = {
        // backgroundImage: `url(${user.bannerImage})`,
        backgroundColor: '#98F5E1',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200',
        position: 'relative',
    }


    return (
        <Container className='user-info'>
            <Paper style={bannerStyles}>
                <div>
                    <h1 style={{ fontSize: '50px', margin: '2rem' }}>
                        {user.firstName} {user.lastName}
                    </h1>

                    <p style={{ margin: '2rem' }}>
                        {user.bio}
                    </p>
                </div>
            </Paper>
   
        </Container>
    )

}

export default Banner