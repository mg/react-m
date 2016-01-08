import React from 'react'
import { Switch } from '../src'

const noop= () => {}

export default class SwitchPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Switch</h3>
        <Switch value={this.state.switch1} onChange={switch1 => this.setState({switch1})}>Label</Switch>

        <h3>With ripple</h3>
        <Switch ripple value={this.state.switch2} onChange={switch2 => this.setState({switch2})}>Label</Switch>

        <h3>Disabled</h3>
        <Switch disabled value={true} onChange={noop}>Label</Switch>
      </div>
    )
  }

  state= {}
}
