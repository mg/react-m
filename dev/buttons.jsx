import React from 'react'
import { FlatButton, RaisedButton } from 'button'
import { SpreadRow } from './layouts.jsx'

const noop= () => {}

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h3>Flat buttons</h3>
        <SpreadRow>
          <FlatButton onClick={noop}>Normal</FlatButton>
          <FlatButton ripple={true} onClick={noop}>Ripple</FlatButton>
          <FlatButton color='#3f51b5' onClick={noop}>Color</FlatButton>
          <FlatButton color='#ff4081' ripple={true} rippleColor='#ff8cb3' onClick={noop}>Color & Ripple</FlatButton>
          <FlatButton enabled={false}>Disabled</FlatButton>
        </SpreadRow>

        <h3>Raised buttons</h3>
        <SpreadRow>
          <RaisedButton onClick={noop}>Normal</RaisedButton>
          <RaisedButton ripple={true} onClick={noop}>Ripple</RaisedButton>
          <RaisedButton color='#3f51b5' onClick={noop}>Color</RaisedButton>
          <RaisedButton color='#ff4081' ripple={true} onClick={noop}>Color & Ripple</RaisedButton>
          <RaisedButton enabled={false}>Disabled</RaisedButton>
        </SpreadRow>
      </div>
    )
  }
}
