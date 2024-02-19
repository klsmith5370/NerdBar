import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { SearchBar } from './SearchBar'
import { HiHome } from 'react-icons/hi'
import { CgProfile } from "react-icons/cg"
import { IoMenuOutline } from 'react-icons/io5'
import { Button, AppBar, Box, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'


const Navbar = ({handleClick, isLoggedIn}) => (
  <AppBar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFADAD' }}>
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      {/* <IconButton edge='start' color='inherit' component={Link} to='/login'>
        {isLoggedIn ? <HiHome /> : <IoMenuOutline />}
      </IconButton> */}

      <Typography>
        <Link to={'/'}>
          <img className='logo' src='NerdBar-logo.jpg' alt='NerdBar brand logo'/>
        </Link>
      </Typography>

      <SearchBar />

      {isLoggedIn ? (
        <Box>
          <Link to="/profile">
            <IconButton size="large" color="inherit">
                <Badge>
                    <CgProfile />
                </Badge>
            </IconButton>
          </Link>

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </Box>
      ) : (
        <Box style={{ display:"flex", justifyContent:"space-between", padding: '10px' }}>
          <Button component={Link} to='/login' color='inherit'>Login</Button>
          <Button component={Link} to='/signup' color='inherit' style={{ whiteSpace: 'nowrap' }}>Sign Up</Button>

        </Box>
         
      )}
      <div className='all-recipes-button'>
          <Link to='/characterRecipes'>
            <Button className='view-all-cards' variant='contained' style={{ backgroundColor: '#8EECF5' }}>Click to view all recipes!!</Button>
          </Link>
      </div>

    </Toolbar>
  </AppBar>
  
  // <div className='navbar'>
  //   <img className='logo' src='NerdBar-logo.jpg' alt='NerdBar brand logo'/>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Link to="/home">Home</Link>
          // <a href="#" onClick={handleClick}>
          //   Logout
          // </a>
  //         {/* <Link to='/follow'>Follow us!</Link> */}
  //         <Link to='/profile'>Profile</Link>
  //         <SearchBar />
  //       </div>
  //     ) : (
  //       <div>
  //         {/* The navbar will show these links before you log in */}
  //         <Link to='/home'><HiHome /></Link>
  //         <Link to="/login">Login</Link>
  //         <Link to="/signup">Sign Up</Link>
  //         {/* <Link to='/follow'>Follow us!</Link> */}
  //         <SearchBar />
  //       </div>
        
        
  //     )}     
  //   </nav>
    // <div className='all-recipes-button'>
    //   <Link to='/characterRecipes'>
    //     <Button className='view-all-cards' variant='contained' style={{ backgroundColor: '#8EECF5' }}>Click to view all recipes!!</Button>
    //   </Link>
    // </div>
  // </div>
  
)


const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
