import '../src/fonts.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'

import Fab from './fab.jsx'
import FlatButton from './flatbutton.jsx'
import RaisedButton from './raisedbutton.jsx'
import IconButton from './iconbutton.jsx'
import Toggles from './toggles.jsx'
import Sliders from './sliders.jsx'
import Progress from './progress.jsx'
import Badges from './badges.jsx'
import Tooltips from './tooltips.jsx'
import Menus from './menus.jsx'
import Tabs from './tabs.jsx'
import Inputs from './inputs.jsx'

render(
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='fab'/>
      <Route path='fab' component={Fab} />
      <Route path='flatbutton' component={FlatButton} />
      <Route path='raisedbutton' component={RaisedButton} />
      <Route path='iconbutton' component={IconButton} />
      <Route path='toggles' component={Toggles} />
      <Route path='sliders' component={Sliders} />
      <Route path='progress' component={Progress} />
      <Route path='badges' component={Badges} />
      <Route path='tooltips' component={Tooltips} />
      <Route path='menus' component={Menus} />
      <Route path='tabs' component={Tabs} />
      <Route path='inputs' component={Inputs} />
    </Route>
  </Router>
  , document.getElementById('app')
)
