import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="navbar">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to='/follow'>Follow us!</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <img className='logo' src='NerdBar-logo.jpg' alt='NerdBar brand logo'/>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to='/home'>Home</Link>
          <Link to='/follow'>Follow us!</Link>
        </div>
        
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
