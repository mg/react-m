import React from 'react'
import { FlatButton } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class FlatButtonPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Flat button</h3>
        <LeftPackedRow>
          <FlatButton onClick={noop}>Normal</FlatButton>
          <Space/>
          <FlatButton icon='mood' onClick={noop}>Normal</FlatButton>
        </LeftPackedRow>

        <h3>With ripple</h3>
        <LeftPackedRow>
          <FlatButton ripple onClick={noop}>Ripple</FlatButton>
          <Space/>
          <FlatButton icon='bookmark' ripple onClick={noop}>Ripple</FlatButton>
        </LeftPackedRow>

        <h3>Colored</h3>
        <LeftPackedRow>
          <FlatButton color='#3f51b5' onClick={noop}>Color</FlatButton>
          <Space/>
          <FlatButton icon='inbox' color='#3f51b5' onClick={noop}>Color</FlatButton>
        </LeftPackedRow>

        <h3>Colored with ripple</h3>
        <LeftPackedRow>
          <FlatButton color='#ff4081' ripple rippleColor='#ff8cb3' onClick={noop}>Color & Ripple</FlatButton>
          <Space/>
          <FlatButton icon='favorite' color='#ff4081' ripple rippleColor='#ff8cb3' onClick={noop}>Color & Ripple</FlatButton>
        </LeftPackedRow>

        <h3>Disabled</h3>
        <LeftPackedRow>
          <FlatButton disabled>Disabled</FlatButton>
          <Space/>
          <FlatButton icon='add' disabled>Disabled</FlatButton>
        </LeftPackedRow>
      </div>
    )
  }
}
