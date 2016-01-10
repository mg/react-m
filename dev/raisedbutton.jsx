import React from 'react'
import { RaisedButton } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class RaisedButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Normal</h3>
        <LeftPackedRow>
          <RaisedButton onClick={noop}>Label</RaisedButton>
          <Space/>
          <RaisedButton icon='build' onClick={noop}>Label</RaisedButton>
        </LeftPackedRow>

        <h3>With ripple</h3>
        <LeftPackedRow>
          <RaisedButton ripple onClick={noop}>Label</RaisedButton>
          <Space/>
          <RaisedButton icon='eject' ripple onClick={noop}>Label</RaisedButton>
        </LeftPackedRow>

        <h3>Colored</h3>
        <LeftPackedRow>
          <RaisedButton color='#3f51b5' onClick={noop}>Label</RaisedButton>
          <Space/>
          <RaisedButton icon='delete' color='#3f51b5' onClick={noop}>Label</RaisedButton>
        </LeftPackedRow>

        <h3>Colored with ripple</h3>
        <LeftPackedRow>
          <RaisedButton color='#ff4081' ripple onClick={noop}>Label</RaisedButton>
          <Space/>
          <RaisedButton icon='search' color='#ff4081' ripple onClick={noop}>Label</RaisedButton>
        </LeftPackedRow>

        <h3>Disabled</h3>
        <LeftPackedRow>
          <RaisedButton disabled>Label</RaisedButton>
          <Space/>
          <RaisedButton icon='language' disabled>Label</RaisedButton>
        </LeftPackedRow>
      </div>
    )
  }
}
