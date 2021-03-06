import React from 'react'
import { IconToggle } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class IconTogglePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Icon toggle</h3>
        <LeftPackedRow>
          <IconToggle value={this.state.icon1} onChange={icon1 => this.setState({icon1})}>format_bold</IconToggle>
          <Space/>
          <IconToggle label='Label' value={this.state.icon1} onChange={icon1 => this.setState({icon1})}>format_bold</IconToggle>
        </LeftPackedRow>

        <h3>With ripple</h3>
        <LeftPackedRow>
          <IconToggle ripple value={this.state.icon2} onChange={icon2 => this.setState({icon2})}>format_italic</IconToggle>
          <Space/>
          <IconToggle label='Label' ripple value={this.state.icon2} onChange={icon2 => this.setState({icon2})}>format_italic</IconToggle>
        </LeftPackedRow>

        <h3>Disabled</h3>
        <LeftPackedRow>
          <IconToggle disabled value={false} onChange={noop}>format_italic</IconToggle>
          <Space/>
          <IconToggle label='Label' disabled value={false} onChange={noop}>format_italic</IconToggle>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
