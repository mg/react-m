import React from 'react'
import { IconToggle } from '../src'

const noop= () => {}

export default class IconTogglePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Icon toggle</h3>
        <IconToggle value={this.state.icon1} onChange={icon1 => this.setState({icon1})}>format_bold</IconToggle>

        <h3>With ripple</h3>
        <IconToggle ripple value={this.state.icon2} onChange={icon2 => this.setState({icon2})}>format_italic</IconToggle>

        <h3>Disabled</h3>
        <IconToggle disabled value={false} onChange={noop}>format_italic</IconToggle>
      </div>
    )
  }

  state= {}
}
