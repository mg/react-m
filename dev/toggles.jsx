import React from 'react'
import { } from 'toggle'
import { SpreadRow } from './layouts.jsx'

const noop= () => {}

export default class Toggles extends React.Component {
  render() {
    return (
      <div>
        <h3>Checkbox</h3>
        <SpreadRow>
        </SpreadRow>

        <h3>Radio button</h3>
        <SpreadRow>
        </SpreadRow>

        <h3>Icon toggle</h3>
        <SpreadRow>
        </SpreadRow>

        <h3>Switch</h3>
        <SpreadRow>
        </SpreadRow>
      </div>
    )
  }
}
