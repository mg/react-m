import React from 'react'
import { Input } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

export default class InputPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Input</h3>
        <LeftPackedRow>
          <Input label='Text...' value={this.state.input11} onChange={input11 => this.setState({input11})}/>
          <Space/>
          <Input icon='email' label='Email...' value={this.state.input12} onChange={input12 => this.setState({input12})}/>
        </LeftPackedRow>

        <h3>In error state</h3>
        <LeftPackedRow>
          <Input label='Text...' value={this.state.input21} onChange={input21 => this.setState({input21})} error='There is an error.'/>
          <Space/>
          <Input icon='call' label='Number...' value={this.state.input22} onChange={input22 => this.setState({input22})} error='There is an error.'/>
        </LeftPackedRow>

        <h3>Disabled</h3>
        <LeftPackedRow>
          <Input disabled label='Text...' value={this.state.input31} onChange={input31 => this.setState({input31})}/>
          <Space/>
          <Input icon='chat_bubble' disabled label='Text...' value={this.state.input32} onChange={input32 => this.setState({input32})}/>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
