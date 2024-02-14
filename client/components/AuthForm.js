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
    <Container maxWidth='md'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{location === "/signup" ? "Sign Up" : "Login"}</Typography>
          <form onSubmit={location === "/signup" ? handleSignUp : handleLogin}>
            {location === '/signup' && (
              <>
                <TextField name="email" label="Email" fullWidth />
                <TextField name="firstname" label="First Name" fullWidth />
                <TextField name="lastname" label="Last Name" fullWidth />
              </>
            )}

              <TextField name="username" label="Username" fullWidth/>
              <TextField name="password" label="Password" type="password" fullWidth/>
              <Button type='submit' variant='contained' color='primary'>
                {location === '/signup' ? 'Sign Up' : 'Login'}
              </Button>
              {error && error.response && <Typography color="error">{error.response.data}</Typography>}
          </form>

          <Typography>
            {location === "/signup" ? "Already have an Account?" : "Don't have an Account?"}{" "}
            <Link href={location === "/signup" ? "/login" : "/signup"}>
              <Button color="primary">{location === "/signup" ? "Login" : "Sign Up"}</Button>
            </Link>
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

//   return (
//     <div>
//       <form onSubmit={handleSubmit} name={name}>
//         <div>
//           <label htmlFor='username'>
//             <small>Username</small>
//           </label>
//           <input name='username' type='text' />
//         </div>
//         <div>
//           <label htmlFor='password'>
//             <small>Password</small>
//           </label>
//           <input name='password' type='password' />
//         </div>
//         <div>
//           <Button className='login-submit' type='submit' variant='contained' color='#9BF6FF'>{displayName}</Button>
//         </div>
//         {error && error.response && <div> {error.response.data} </div>}
//       </form>
      
//     </div>

//   )
}

export default AuthForm

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.auth.error
//   }
// }

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.auth.error
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault()
//       const formName = evt.target.name
//       const username = evt.target.username.value
//       const password = evt.target.password.value
//       dispatch(authenticate(username, password, formName))
//     }
//   }
// }

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
