import React from 'react'
import { IconButton } from '../src'
import { SpreadRow } from './layouts.jsx'

const noop= () => {}

export default class IconButtonPage extends React.Component {
  render() {
    return (
      <div>
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

const FabContainer= ({children}) =>
  <div style={{padding: '0 15px'}}>
    {children}
  </div>

const IconContainer= ({children}) =>
  <div style={{padding: '0 25px'}}>
    {children}
  </div>
