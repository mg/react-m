import React from 'react'
import { RaisedButton } from '../src'

const noop= () => {}

export default class RaisedButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Raised buttons</h3>
        <RaisedButton onClick={noop}>Normal</RaisedButton>

        <h3>With ripple</h3>
        <RaisedButton ripple onClick={noop}>Ripple</RaisedButton>

        <h3>Colored</h3>
        <RaisedButton color='#3f51b5' onClick={noop}>Color</RaisedButton>

        <h3>Colored with ripple</h3>
        <RaisedButton color='#ff4081' ripple onClick={noop}>Color & Ripple</RaisedButton>

        <h3>Disabled</h3>
        <RaisedButton disabled>Disabled</RaisedButton>
      </div>
    )
  }
}
