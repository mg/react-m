import React from 'react'
import { Slider } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class Sliders extends React.Component {
  render() {
    return (
      <div>
        <h3>Slider</h3>
        <LeftPackedRow>
          <Slider min={0} max={100} value={this.state.slider} onChange={slider => this.setState({slider})}/>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
