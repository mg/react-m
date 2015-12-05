import '../src/fonts.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'

render(
  <Router>
    <Route path="/" component={Main}>
    </Route>
  </Router>
  , document.getElementById('app')
)
