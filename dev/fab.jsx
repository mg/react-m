import React from 'react'
import { Fab } from '../src'
import { SpreadRow } from './layouts.jsx'

const noop= () => {}

export default class FabPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Fab buttons</h3>
        <SpreadRow>
          <FabContainer><Fab onClick={noop}>add</Fab></FabContainer>
          <FabContainer><Fab ripple={true} onClick={noop}>mic</Fab></FabContainer>
          <FabContainer><Fab color='#3f51b5' onClick={noop}>call</Fab></FabContainer>
          <FabContainer><Fab color='#ff4081' ripple={true} onClick={noop}>mode_edit</Fab></FabContainer>
          <FabContainer><Fab enabled={false} onClick={noop}>cloud</Fab></FabContainer>
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
