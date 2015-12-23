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
          <Slider min={0} max={100} value={this.state.slider1} onChange={slider1 => this.setState({slider1})}/>
          <Space/>
          <Slider min={0} max={100} step={2} value={this.state.slider2} onChange={slider2 => this.setState({slider2})}/>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
