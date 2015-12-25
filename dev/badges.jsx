import React from 'react'
import { Icon, Badge } from '../src'
import { SpreadRow } from './layouts.jsx'

export default class Badges extends React.Component {
  render() {
    return (
      <div>
        <h3>Badges</h3>
        <SpreadRow>
          <Badge value='1'>Text</Badge>
          <Badge value='2' color='rgb(76,175,80)'>Text</Badge>
          <Badge value='alarm' icon>Text</Badge>
          <Badge value='4' onIcon><Icon>account_box</Icon></Badge>
          <Badge value='4' onIcon align='left'><Icon>account_box</Icon></Badge>
          <Badge value='3' align='left'>Text</Badge>
        </SpreadRow>

      </div>
    )
  }
}
