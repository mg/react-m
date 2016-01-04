import React from 'react'
import { Input } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

export default class InputPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Inputs</h3>
        <LeftPackedRow>
          <Input label='Text...' value={this.state.input1} onChange={input1 => this.setState({input1})}/>
          <Input label='Text...' value={this.state.input2} onChange={input2 => this.setState({input2})} error='There is an error.'/>
        </LeftPackedRow>
      </div>
    )
  }

  state= {
    input1: '',
  }
}
