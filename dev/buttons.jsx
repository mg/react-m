import React from 'react'
import { FlatButton } from 'button'

const noop= () => {}

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h3>Flat button</h3>
        <FlatButton onClick={noop}>Normal</FlatButton>
        <FlatButton ripple={true} onClick={noop}>Ripple</FlatButton>
        <FlatButton color='#3f51b5' onClick={noop}>Ripple</FlatButton>
        <FlatButton color='#ff4081' ripple={true} rippleColor='#401020' onClick={noop}>Ripple</FlatButton>
        <FlatButton enabled={false}>Disabled</FlatButton>
      </div>
    )
  }
}
