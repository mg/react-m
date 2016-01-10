import React from 'react'
import { IconButton } from '../src'

const noop= () => {}

export default class IconButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Normal</h3>
        <IconButton onClick={noop}>mood</IconButton>

        <h3>Ripple</h3>
        <IconButton ripple={true} onClick={noop}>face</IconButton>

        <h3>Color</h3>
        <IconButton color='#3f51b5' onClick={noop}>lock</IconButton>

        <h3>Color and ripple</h3>
        <IconButton color='#ff4081' ripple={true} onClick={noop}>home</IconButton>

        <h3>Disabled</h3>
        <IconButton disabled onClick={noop}>thumb_up</IconButton>
      </div>
    )
  }
}
