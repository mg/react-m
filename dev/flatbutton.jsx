import React from 'react'
import { FlatButton } from '../src'

const noop= () => {}

export default class FlatButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Flat button</h3>
        <FlatButton onClick={noop}>Normal</FlatButton>

        <h3>With ripple</h3>
        <FlatButton ripple onClick={noop}>Ripple</FlatButton>

        <h3>Colored</h3>
        <FlatButton color='#3f51b5' onClick={noop}>Color</FlatButton>

        <h3>Colored with ripple</h3>
        <FlatButton color='#ff4081' ripple rippleColor='#ff8cb3' onClick={noop}>Color & Ripple</FlatButton>

        <h3>Disabled</h3>
        <FlatButton disabled>Disabled</FlatButton>
      </div>
    )
  }
}
