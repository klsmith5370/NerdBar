import React from 'react'
import { Link } from 'react-router-dom'
import { SiTiktok } from 'react-icons/si'
import { GrInstagram } from 'react-icons/gr'
import { Container, Typography, Grid } from '@material-ui/core'
import { styled } from '@material-ui/core'

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: '#CDB4DB',
    padding: theme.spacing(6),
    // marginTop: 'auto',
    width: '100%',
}))

const CenteredGridItem = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
}))

export const Contact = () => {

    return (
        <FooterContainer>
            <Container maxWidth='lg'>
                <Grid container spacing={2} justifyContent='center'>
                    <CenteredGridItem item xs={12}>
                        <Typography>
                            Follow us on Instagram & TikTok!
                        </Typography>
                    </CenteredGridItem>
                <CenteredGridItem item xs={6} sm={3}>
                    <Link className='icon-link'>
                        <SiTiktok />
                    </Link>
                </CenteredGridItem>
                <CenteredGridItem item xs={6} sm={3}>
                    <Link className='icon-link'>
                        <GrInstagram />
                    </Link>
                </CenteredGridItem>
                </Grid>
            </Container>
        </FooterContainer>
    )
}

export default Contact