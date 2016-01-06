import React from 'react'
import { Slider } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class SliderPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Slider</h3>
        <Slider min={0} max={100} value={this.state.slider1} onChange={slider1 => this.setState({slider1})}/>

        <h3>Slider with steps</h3>
        <Slider min={0} max={100} step={10} value={this.state.slider2} onChange={slider2 => this.setState({slider2})}/>

        <h3>Disabled</h3>
        <Slider disabled min={0} max={100} value={50} onChange={noop}/>
      </div>
    )
  }

  state= {}
}
