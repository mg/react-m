import React from 'react'
import { RadioButton } from '../src'

const noop= () => {}

export default class RadioButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Default</h3>
        <RadioButton value='1' selected={this.state.radio} onChange={radio => this.setState({radio})}>Label</RadioButton>

        <h3>With ripple</h3>
        <RadioButton ripple value='2' selected={this.state.radio} onChange={radio => this.setState({radio})}>Label</RadioButton>

        <h3>Disabled</h3>
        <RadioButton disabled value='3' selected={'3'} onChange={noop}>Label</RadioButton>
        <RadioButton disabled value='4' selected={'3'} onChange={noop}>Label</RadioButton>
      </div>
    )
  }

  state= {}
}
