import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home';
import { AllRecipes } from './components/AllRecipes'

import {me} from './store'
// import { SingleRecipe }from './components/SingleRecipe'
import { AuthForm } from '../client/components/AuthForm'
import Contact from './components/Contact';


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path='/characterRecipes' component={AllRecipes} />
            {/* <Route path='/characterRecipes/:id' component={SingleRecipe}/> */}
            <Redirect to='/home' />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Login } />
            <Route path='/home' exact component={AuthForm} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/characterRecipes' component={AllRecipes} />
            {/* <Route exact path='/characterRecipes/:id' component={SingleRecipe} /> */}
            <Route path='/follow' component={Contact} />
          </Switch>
        )}
      </div>
    )
  }
}


const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
