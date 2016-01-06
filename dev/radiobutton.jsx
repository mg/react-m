import React from 'react'
import { RadioButton } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class RadioButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Radio button</h3>
        <LeftPackedRow>
          <RadioButton value='1' selected={this.state.radio} onChange={radio => this.setState({radio})}>Radio button</RadioButton>
          <Space/>
          <RadioButton ripple value='2' selected={this.state.radio} onChange={radio => this.setState({radio})}>With ripple</RadioButton>
          <Space/>
          <RadioButton disabled value='3' selected={'3'} onChange={noop}>Disabled</RadioButton>
          <Space/>
          <RadioButton disabled value='4' selected={'3'} onChange={noop}>Disabled</RadioButton>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
