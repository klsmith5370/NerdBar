import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <h3>LOGGED IN EXPERIENCE COMING SOON!!</h3>
      <Link to="/characterRecipes">
        <button className="view-all-cards">Click to view all recipes!!</button>
      </Link>
    </div>

  )
}


const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
