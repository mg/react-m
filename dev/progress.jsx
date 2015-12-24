import React from 'react'
import { ProgressBar } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class Progress extends React.Component {
  render() {
    return (
      <div>
        <h3>Progress bar</h3>
        <LeftPackedRow>
          <ProgressBar/>
        </LeftPackedRow>
      </div>
    )
  }

  state= {}
}
