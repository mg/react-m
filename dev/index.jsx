import '../src/fonts.css'
import React from 'react'
import ReactDOM from 'react-dom'

const rootEl= document.getElementById('app')
let render= () => {
  const routes = require('./routes.jsx').default
  ReactDOM.render(routes, rootEl)
}

if(module.hot) {
  const renderApp= render
  const renderError= error => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    )
  }

  render= () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept('./routes', () => {
    setTimeout(render)
  })
}

render()
