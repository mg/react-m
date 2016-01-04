import React from 'react'
import { Spinner } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class SpinnerPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Spinners</h3>
        <LeftPackedRow>
          <Spinner/>
          <Space/>
          <Spinner color='#f00'/>
          <Space/>
          <Spinner color='#e5e500'/>
          <Space/>
          <Spinner multicolor/>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
