import React from 'react'
import { Checkbox } from '../src'

const noop= () => {}

export default class CheckboxPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Checkbox</h3>
        <Checkbox value={this.state.checked1} onChange={checked1 => this.setState({checked1})}>Label</Checkbox>

        <h3>With ripple</h3>
        <Checkbox ripple value={this.state.checked2} onChange={checked2 => this.setState({checked2})}>Label</Checkbox>

        <h3>Disabled</h3>
        <Checkbox disabled value={true} onChange={noop}>Label</Checkbox>
        <Checkbox disabled value={false} onChange={noop}>Label</Checkbox>
      </div>
    )
  }

  state= {}
}
