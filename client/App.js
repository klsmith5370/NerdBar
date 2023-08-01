import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home';
import { AllRecipes } from './components/AllRecipes'

import { me, logout } from './store'
import { AuthForm } from '../client/components/AuthForm'
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Search from './components/Search';


const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(me())
  }, [])

  const handleClick = () => {
    dispatch(logout(navigate))
  }

  return (
      <div>
        <Navbar
          handleClick={handleClick}
          className='fixed-top'
          isLoggedIn={isLoggedIn}
        />
        {isLoggedIn ? (
          <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route path='/characterRecipes' element={<AllRecipes />} />
              <Route path='/search/:characterName' element={<Search />}/>
          </Routes>
          ) : (
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/home' element={<AuthForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/characterRecipes' element={<AllRecipes />} />
            <Route path='/search/:characterName' element={<Search />} />
          </Routes>
          )}
          <Contact />
        </div>
  )
}

export default App;
