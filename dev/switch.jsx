import React from 'react'
import { Switch } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class SwitchPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Switch</h3>
        <Switch value={this.state.switch1} onChange={switch1 => this.setState({switch1})}>Label</Switch>

        <h3>With ripple</h3>
        <Switch ripple value={this.state.switch2} onChange={switch2 => this.setState({switch2})}>Label</Switch>

        <h3>With icons</h3>
        <LeftPackedRow>
          <Switch onIcon='grade' ripple value={this.state.switch3} onChange={switch3 => this.setState({switch3})}>Label</Switch>
          <Space/>
          <Switch onIcon='mic' offIcon='mic_off' ripple value={this.state.switch4} onChange={switch4 => this.setState({switch4})}>Label</Switch>          
        </LeftPackedRow>

        <h3>Disabled</h3>
        <Switch disabled value={true} onChange={noop}>Label</Switch>
      </div>
    )
  }

  state= {}
}
