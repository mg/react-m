import React from 'react'
import { Icon } from '../src'
import { SpreadRow } from './layouts.jsx'

export default class IconPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Icons</h3>
        <SpreadRow>
          <IconContainer><Icon>mood</Icon></IconContainer>
          <IconContainer><Icon color='#3f51b5'>face</Icon></IconContainer>
          <IconContainer><Icon color='#33ad67'>lock</Icon></IconContainer>
          <IconContainer><Icon color='#ff4081'>home</Icon></IconContainer>
          <IconContainer><Icon color='#aa4081'>thumb_up</Icon></IconContainer>
        </SpreadRow>
      </div>
    )
  }
}

const IconContainer= ({children}) =>
  <div style={{padding: '0 25px'}}>
    {children}
  </div>
