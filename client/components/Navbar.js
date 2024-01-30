import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { SearchBar } from './SearchBar'
import { HiHome } from 'react-icons/hi'
import { IoIosMail } from 'react-icons/io'
import { IoMenuOutline } from 'react-icons/io5'
import { Button, AppBar, Box, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { AuthForm } from './AuthForm'


const Navbar = ({handleClick, isLoggedIn}) => (
  <AppBar>
    <Toolbar>
      <IconButton edge='start' color='inherit' component={Link} to='/login'>
        {isLoggedIn ? <HiHome /> : <IoMenuOutline />}
      </IconButton>

      <Typography>
        <img className='logo' src='NerdBar-logo.jpg' alt='NerdBar brand logo'/>
      </Typography>

      <SearchBar />

      {isLoggedIn ? (
        <Box>
          <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="error">
                <IoIosMail />
              </Badge>
          </IconButton>

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </Box>
      ) : (
        <Box>
          <Button component={Link} to='/login' color='inherit'>Login</Button>
          <Button component={Link} to='/signup' color='inherit'>Sign Up</Button>
          <AuthForm />
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
