import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <h3>LOGGED IN EXPERIENCE COMING SOON!!</h3>
    </div>
  )
}


const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
