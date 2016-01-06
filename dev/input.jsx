import React from 'react'
import { Input } from '../src'

export default class InputPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Input</h3>
        <Input label='Text...' value={this.state.input1} onChange={input1 => this.setState({input1})}/>

        <h3>In error state</h3>
        <Input label='Text...' value={this.state.input2} onChange={input2 => this.setState({input2})} error='There is an error.'/>

        <h3>Disabled</h3>
        <Input disabled label='Text...' value={this.state.input1} onChange={input1 => this.setState({input1})}/>
      </div>
    )
  }

  state= {}
}
