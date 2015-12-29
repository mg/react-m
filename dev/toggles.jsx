import React from 'react'
import { Checkbox, RadioButton, IconToggle, Switch } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class Toggles extends React.Component {
  render() {
    return (
      <div>
        <h3>Checkbox</h3>
        <LeftPackedRow>
          <Checkbox value={this.state.checked1} onChange={checked1 => this.setState({checked1})}>Checkbox</Checkbox>
          <Space/>
          <Checkbox ripple={true} value={this.state.checked2} onChange={checked2 => this.setState({checked2})}>With ripple</Checkbox>
        </LeftPackedRow>

        <h3>Radio button</h3>
        <LeftPackedRow>
          <RadioButton value='1' selected={this.state.radio} onChange={radio => this.setState({radio})}>Radio button</RadioButton>
          <Space/>
          <RadioButton ripple={true} value='2' selected={this.state.radio} onChange={radio => this.setState({radio})}>With ripple</RadioButton>
        </LeftPackedRow>

        <h3>Icon toggle</h3>
        <LeftPackedRow>
          <IconToggle value={this.state.icon1} onChange={icon1 => this.setState({icon1})}>format_bold</IconToggle>
          <IconToggle ripple={true} value={this.state.icon2} onChange={icon2 => this.setState({icon2})}>format_italic</IconToggle>
        </LeftPackedRow>

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
