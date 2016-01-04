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
          <RadioButton ripple={true} value='2' selected={this.state.radio} onChange={radio => this.setState({radio})}>With ripple</RadioButton>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
