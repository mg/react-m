import React from 'react'
import { RaisedButton } from '../src'
import { SpreadRow } from './layouts.jsx'

const noop= () => {}

export default class RaisedButtonPage extends React.Component {
  render() {
    return (
      <div>
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

const FabContainer= ({children}) =>
  <div style={{padding: '0 15px'}}>
    {children}
  </div>

const IconContainer= ({children}) =>
  <div style={{padding: '0 25px'}}>
    {children}
  </div>
