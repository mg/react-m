import '../src/fonts.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'

import Fab from './fab.jsx'
import FlatButton from './flatbutton.jsx'
import RaisedButton from './raisedbutton.jsx'
import IconButton from './iconbutton.jsx'
import Checkbox from './checkbox.jsx'
import IconToggle from './icontoggle.jsx'
import RadioButton from './radiobutton.jsx'
import Switch from './switch.jsx'
import Slider from './slider.jsx'
import ProgressBar from './progressbar.jsx'
import Spinner from './spinner.jsx'
import Badge from './badge.jsx'
import Tooltip from './tooltip.jsx'
import Menu from './menu.jsx'
import Drawer from './drawer.jsx'
import Tabs from './tabs.jsx'
import Input from './input.jsx'

render(
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='fab'/>
      <Route path='fab' component={Fab} />
      <Route path='flatbutton' component={FlatButton} />
      <Route path='raisedbutton' component={RaisedButton} />
      <Route path='iconbutton' component={IconButton} />
      <Route path='checkbox' component={Checkbox} />
      <Route path='radiobutton' component={RadioButton} />
      <Route path='icontoggle' component={IconToggle} />
      <Route path='switch' component={Switch} />
      <Route path='slider' component={Slider} />
      <Route path='progressbar' component={ProgressBar} />
      <Route path='spinner' component={Spinner} />
      <Route path='badge' component={Badge} />
      <Route path='tooltip' component={Tooltip} />
      <Route path='menu' component={Menu} />
      <Route path='drawer' component={Drawer} />
      <Route path='tabs' component={Tabs} />
      <Route path='input' component={Input} />
    </Route>
  </Router>
  , document.getElementById('app')
)
