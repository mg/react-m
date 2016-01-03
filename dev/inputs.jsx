import React from 'react'
import { Input } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

export default class Inputs extends React.Component {
  render() {
    return (
      <div>
        <h3>Inputs</h3>
        <LeftPackedRow>
          <Input label='Text...' value={this.state.input} onChange={input => this.setState({input})}/>
        </LeftPackedRow>
      </div>
    )
  }

  state= {
    input: '',
  }
}
