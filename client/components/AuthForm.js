import React from 'react'
import {connect} from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import {authenticate} from '../store'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core'


export const AuthForm = (props) => {
  // const {name, displayName, handleSubmit, error} = props
  const location = useLocation().pathname
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector((state) => state.auth.error)

  const handleLogin = (evt) => {
    evt.preventDefault()
    const formName = 'login'
    const username = evt.target.username.value
    const password = evt.target.password.value
    dispatch(
      authenticate(username, password, formName, null, null, null, navigate)
    )
  }

  const handleSignUp = (evt) => {
    const formName = 'signup'
    const username = evt.target.username.value
    const password = evt.target.password.value
    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value

    dispatch(
      authenticate(username, password, formName, firstName, lastName, navigate)
    )
  }

  return (
    <Container maxWidth='md' style={{ marginTop: '200px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{location === "/signup" ? "Sign Up" : "Login"}</Typography>
          <form onSubmit={location === "/signup" ? handleSignUp : handleLogin}>
            {location === '/signup' && (
              <>
              <div>
                <TextField name="email" label="Email" fullWidth />
              </div>
                
                <div>
                  <TextField name="firstname" label="First Name" fullWidth />
                </div>
                
                <div>
                  <TextField name="lastname" label="Last Name" fullWidth />
                </div>
                
              </>
            )}
            <>
              <div>
                <TextField name="username" label="Username" fullWidth/>
              </div>
              
              <div>
                <TextField name="password" label="Password" type="password" fullWidth/>
              </div>

            </>
              
              <Button type='submit' variant='contained' color='primary'>
                {location === '/signup' ? "Sign Up" : "Login"}
              </Button>
              {error && error.response && <Typography color="error">{error.response.data}</Typography>}
          </form>

          <Typography>
            {location === "/signup" ? "Already have an Account?" : "Don't have an Account?"}{" "}
            <Button component={Link} to={location === "/signup" ? "/login" : "/signup"} color='primary'>{location === "/signup" ? "Login" : "Sign Up"}</Button>
          </Typography>

        </Grid>

        <Grid item xs={12} sm={6}>
          <img
            src={location === "/signup" ? "/SignUp.png" : "/Login.png"}
            alt={location === "/signup" ? "Signup illustration" : "Login illustration"}
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>

    </Container>
  )

}

export default AuthForm

