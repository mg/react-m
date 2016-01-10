import React from 'react'
import { RaisedButton } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class RaisedButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Raised buttons</h3>
        <LeftPackedRow>
          <RaisedButton onClick={noop}>Normal</RaisedButton>
          <Space/>
          <RaisedButton icon='build' onClick={noop}>Normal</RaisedButton>
        </LeftPackedRow>

        <h3>With ripple</h3>
        <LeftPackedRow>
          <RaisedButton ripple onClick={noop}>Ripple</RaisedButton>
          <Space/>
          <RaisedButton icon='eject' ripple onClick={noop}>Ripple</RaisedButton>
        </LeftPackedRow>

        <h3>Colored</h3>
        <LeftPackedRow>
          <RaisedButton color='#3f51b5' onClick={noop}>Color</RaisedButton>
          <Space/>
          <RaisedButton icon='delete' color='#3f51b5' onClick={noop}>Color</RaisedButton>
        </LeftPackedRow>

        <h3>Colored with ripple</h3>
        <LeftPackedRow>
          <RaisedButton color='#ff4081' ripple onClick={noop}>Color & Ripple</RaisedButton>
          <Space/>
          <RaisedButton icon='search' color='#ff4081' ripple onClick={noop}>Color & Ripple</RaisedButton>
        </LeftPackedRow>

        <h3>Disabled</h3>
        <LeftPackedRow>
          <RaisedButton disabled>Disabled</RaisedButton>
          <Space/>
          <RaisedButton icon='language' disabled>Disabled</RaisedButton>
        </LeftPackedRow>
      </div>
    )
  }
}
