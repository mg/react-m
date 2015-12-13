import React from 'react'
import { FlatButton, RaisedButton, IconButton } from 'button'
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

        <h3>Icon buttons</h3>
        <SpreadRow>
          <IconContainer><IconButton onClick={noop}>mood</IconButton></IconContainer>
          <IconContainer><IconButton ripple={true} onClick={noop}>face</IconButton></IconContainer>
          <IconContainer><IconButton color='#3f51b5' onClick={noop}>lock</IconButton></IconContainer>
          <IconContainer><IconButton color='#ff4081' ripple={true} onClick={noop}>home</IconButton></IconContainer>
          <IconContainer><IconButton enabled={false} onClick={noop}>thumb_up</IconButton></IconContainer>
        </SpreadRow>
      </div>
    )
  }
}

const IconContainer= ({children}) =>
  <div style={{padding: '0 25px'}}>
    {children}
  </div>
