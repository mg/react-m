import React from 'react'
import { FlatButton } from '../src'
import { SpreadRow } from './layouts.jsx'

const noop= () => {}

export default class FlatButtonPage extends React.Component {
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
      </div>
    )
  }
}

const FabContainer= ({children}) =>
  <div style={{padding: '0 15px'}}>
    {children}
  </div>

const IconContainer= ({children}) =>
  <div style={{padding: '0 25px'}}>
    {children}
  </div>
