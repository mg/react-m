import React from 'react'
import { ProgressBar, Spinner } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class Progress extends React.Component {
  render() {
    return (
      <div>
        <h3>Progress bars</h3>
        <LeftPackedRow>
          <ProgressBar progress={0.6}/>
          <Space/>
          <ProgressBar progress={0.3} loaded={0.8}/>
          <Space/>
          <ProgressBar indeterminate={true}/>
        </LeftPackedRow>

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
