import React from 'react'
import { Switch } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class SwitchPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Switch</h3>
        <LeftPackedRow>
          <Switch value={this.state.switch1} onChange={switch1 => this.setState({switch1})}></Switch>
          <Space/>
          <Switch ripple={true} value={this.state.switch2} onChange={switch2 => this.setState({switch2})}></Switch>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
