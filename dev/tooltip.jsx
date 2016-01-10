import React from 'react'
import { Icon, Tooltip } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

export default class TooltipPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Bottom</h3>
        <Tooltip tooltip='Tooltip'>
          <Icon>print</Icon>
        </Tooltip>

        <h3>Top</h3>
        <Tooltip tooltip='Tooltip' align='top'>
          <Icon>print</Icon>
        </Tooltip>

        <h3>Left</h3>
        <Tooltip tooltip='Tooltip' align='left'>
          <Icon>print</Icon>
        </Tooltip>

        <h3>Right</h3>
        <Tooltip tooltip='Tooltip' align='right' margin={16}>
          <Icon>print</Icon>
        </Tooltip>
      </div>
    )
  }
}
