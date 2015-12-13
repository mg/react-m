import '../src/fonts.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'

import Buttons from './buttons.jsx'
import Toggles from './toggles.jsx'

render(
  <Router>
    <Route path="/" component={Main}>
      <IndexRedirect to='buttons'/>
      <Route path="buttons" component={Buttons} />
      <Route path="toggles" component={Toggles} />
    </Route>
  </Router>
  , document.getElementById('app')
)
