import '../src/fonts.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'

import Buttons from './buttons.jsx'
import Toggles from './toggles.jsx'
import Sliders from './sliders.jsx'
import Progress from './progress.jsx'

render(
  <Router>
    <Route path="/" component={Main}>
      <IndexRedirect to='buttons'/>
      <Route path="buttons" component={Buttons} />
      <Route path="toggles" component={Toggles} />
      <Route path="sliders" component={Sliders} />
      <Route path="progress" component={Progress} />
    </Route>
  </Router>
  , document.getElementById('app')
)
