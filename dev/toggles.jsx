import React from 'react'
import { Checkbox } from 'toggle'
import { SpreadRow, LeftPackedRow, Space } from './layouts.jsx'

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
        <SpreadRow>
        </SpreadRow>

        <h3>Icon toggle</h3>
        <SpreadRow>
        </SpreadRow>

        <h3>Switch</h3>
        <SpreadRow>
        </SpreadRow>
      </div>
    )
  }

  state= {}
}
