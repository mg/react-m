import React from 'react'
import { Icon, Badge } from '../src'
import { LeftPackedRow, DoubleSpace } from './layouts.jsx'

export default class BadgePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Badges</h3>
        <LeftPackedRow>
          <Badge value='1'>Text</Badge>
          <DoubleSpace/>
          <Badge value='2' backgroundColor='rgb(76,175,80)'>Text</Badge>
          <DoubleSpace/>
          <Badge value='alarm' left icon>Text</Badge>
          <DoubleSpace/>
          <Badge value='24' onIcon><Icon>account_box</Icon></Badge>
        </LeftPackedRow>

        <h3/>
        <LeftPackedRow>
          <Badge value='99' onIcon size={24} offset={18}><Icon size={48}>account_box</Icon></Badge>
          <DoubleSpace/>
          <Badge value='4' onIcon left size={24} offset={18}><Icon size={48}>account_box</Icon></Badge>
          <DoubleSpace/>
          <Badge value='3' left backgroundColor='green' size={24} offset={18}><span style={{fontSize: 36}}>Text</span></Badge>
          <DoubleSpace/>
          <Badge value='3' left color='green' backgroundColor='transparent' size={24} offset={18}><span style={{fontSize: 36}}>Text</span></Badge>
        </LeftPackedRow>
      </div>
    )
  }
}
