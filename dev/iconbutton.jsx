import React from 'react'
import { IconButton } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class IconButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Normal</h3>
        <LeftPackedRow>
          <IconButton onClick={noop}>mood</IconButton>
          <Space/>
          <IconButton label='Label' onClick={noop}>mood</IconButton>
        </LeftPackedRow>

        <h3>Ripple</h3>
        <LeftPackedRow>
          <IconButton ripple={true} onClick={noop}>face</IconButton>
          <Space/>
          <IconButton label='Label' ripple={true} onClick={noop}>face</IconButton>
        </LeftPackedRow>

        <h3>Color</h3>
        <LeftPackedRow>
          <IconButton color='#3f51b5' onClick={noop}>lock</IconButton>
          <Space/>
          <IconButton label='Label' color='#3f51b5' onClick={noop}>lock</IconButton>
        </LeftPackedRow>

        <h3>Color and ripple</h3>
        <LeftPackedRow>
          <IconButton color='#ff4081' ripple={true} onClick={noop}>home</IconButton>
          <Space/>
          <IconButton label='Label' color='#ff4081' ripple={true} onClick={noop}>home</IconButton>
        </LeftPackedRow>

        <h3>Disabled</h3>
        <LeftPackedRow>
          <IconButton disabled onClick={noop}>thumb_up</IconButton>
          <Space/>
          <IconButton label='Label' disabled onClick={noop}>thumb_up</IconButton>
        </LeftPackedRow>
      </div>
    )
  }
}
