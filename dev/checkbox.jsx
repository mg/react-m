import React from 'react'
import { Checkbox } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class CheckboxPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Checkbox</h3>
        <LeftPackedRow>
          <Checkbox value={this.state.checked1} onChange={checked1 => this.setState({checked1})}>Checkbox</Checkbox>
          <Space/>
          <Checkbox ripple value={this.state.checked2} onChange={checked2 => this.setState({checked2})}>With ripple</Checkbox>
          <Space/>
          <Checkbox disabled value={true} onChange={noop}>Disabled</Checkbox>
          <Space/>
          <Checkbox disabled value={false} onChange={noop}>Disabled</Checkbox>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
