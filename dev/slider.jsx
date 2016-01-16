import React from 'react'
import { Slider } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class SliderPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Slider</h3>
        <Slider min={0} max={100} value={this.state.s1} onChange={s1 => this.setState({s1})}/>
        <div>{this.state.s1}&nbsp;</div>

        <h3>With steps</h3>
        <Slider min={0} max={100} step={1} value={this.state.s2} onChange={s2 => this.setState({s2})}/>
        <div>{this.state.s2}&nbsp;</div>

        <h3>Larger</h3>
        <Slider size={30} min={0} max={100} value={this.state.s3} onChange={s3 => this.setState({s3})}/>
        <div>{this.state.s3}&nbsp;</div>

        <h3>With icon</h3>
        <Slider icon='volume_up' size={40} min={0} max={100} value={this.state.s4} onChange={s4 => this.setState({s4})}/>
        <div>{this.state.s4}&nbsp;</div>

        <h3>Disabled</h3>
        <Slider disabled min={0} max={100} value={50} onChange={noop}/>
      </div>
    )
  }

  state= {}
}
