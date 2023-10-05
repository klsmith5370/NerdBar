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
        <Container  
            className='user-info'
            style={{ backgroundImage: `url(${user.bannerImage})`
        }}>
            <div className='banner-profile-image' alt='profile-image'>
                <img>

                </img>

            </div>

            <div>
                
            </div>
        </Container>
    )

}

export default Banner