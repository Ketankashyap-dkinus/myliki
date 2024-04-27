import { useState } from 'react'
import {BrowserRouter as Router, Route,Switch   } from "react-router-dom";

// routes import 
import Home from './pages/Home';
import Guide from './pages/Guide';
import Alt from './pages/CompareAlternative'
import Login from './pages/Login'
import Register from './pages/Register'
import Reset from './pages/Reset'
import Term from './pages/Terms'
import Privacy from './pages/Privacy'
import Price from './pages/Pricing'
import Work from './pages/HowItWork'
import Error from './pages/Error'
import Profile from './pages/Profile'

  return (
    <Router>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/Guide' Component={Guide}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/register' Component={Register}/>
      <Route exact path='/reset' Component={Reset}/>
      <Route exact path='/alernative' Component={Alt}/>
      <Route exact path='/term' Component={Term}/>
      <Route exact path='/privacy' Component={Privacy}/>
      <Route exact path='/price' Component={Price}/>
      <Route exact path='/How-It-Work' Component={Work}/>
      <Route exact path='/profile' Component={Profile}/>
      <Route exact path='/*' Component={Error}/>

    </Router>
  )


export default App
