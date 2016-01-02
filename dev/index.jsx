import '../src/fonts.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'

import Buttons from './buttons.jsx'
import Toggles from './toggles.jsx'
import Sliders from './sliders.jsx'
import Progress from './progress.jsx'
import Badges from './badges.jsx'
import Tooltips from './tooltips.jsx'
import Menus from './menus.jsx'
import Tabs from './tabs.jsx'

render(
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='buttons'/>
      <Route path='buttons' component={Buttons} />
      <Route path='toggles' component={Toggles} />
      <Route path='sliders' component={Sliders} />
      <Route path='progress' component={Progress} />
      <Route path='badges' component={Badges} />
      <Route path='tooltips' component={Tooltips} />
      <Route path='menus' component={Menus} />
      <Route path='tabs' component={Tabs} />
    </Route>
  </Router>
  , document.getElementById('app')
)
