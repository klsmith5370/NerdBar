import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export const Home = props => {
  const {username} = props

  return (
    <div>
      <h3>Welcome to your bar, {username}!</h3>
      <h3>LOGGED IN EXPERIENCE COMING SOON!!</h3>
      <Link to="/characterRecipes">
        <Button className="view-all-cards" variant='contained' color='primary'>Click to view all recipes!!</Button>
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
