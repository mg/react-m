import React from 'react'
import { Dots } from '../src'
import { LeftPackedRow, DoubleSpace } from './layouts.jsx'

export default class DotsPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Dots</h3>
        <LeftPackedRow>
          <Dots/>
        </LeftPackedRow>
      </div>
    )
  }
}
