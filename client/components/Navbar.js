import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { AppBar, Box, ToolBar, InputBase, SearchIcon } from '@material-ui/core'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="navbar">
      {isLoggedIn ? (
        <Box sx={{ flexGrow: 1, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
          <AppBar>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          </AppBar>
        </Box> 
      ) : (
        <Box sx={{ flexGrow: 1}}>
          <AppBar position='static'>
          {/* The navbar will show these links before you log in */}
            <img className='logo' src='NerdBar-logo.jpg' alt='NerdBar brand logo'/>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to='/home'>Home</Link>
          </AppBar>
        </Box> 
        
      )}     
    </nav>
  </div>
  
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
