import React from 'react'
import { Tooltip, IconButton, FlatButton, RaisedButton, RadioButton, Checkbox, Switch } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

const noop= () => {}

export default class TooltipPage extends React.Component {
  render() {
    let controls= [
      <IconButton onClick={noop}>print</IconButton>,
      <FlatButton onClick={noop}>Label</FlatButton>,
      <RaisedButton onClick={noop}>Label</RaisedButton>,
      <RadioButton ripple onChange={noop}>Label</RadioButton>,
      <Checkbox ripple onChange={noop}>Label</Checkbox>,
      <Switch ripple onChange={noop}>Label</Switch>,
    ]

    const Frame= ({children}) => <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>{children}</div>
    const Row= (controls, align) => controls.map((control, idx) => <Frame key={idx}><Tooltip tooltip='Tooltip' align={align}>{control}</Tooltip><Space/></Frame>)

    return (
      <div>
        <h3>Top</h3>
        <LeftPackedRow>
          {Row(controls, 'top')}
        </LeftPackedRow>

        <h3>Bottom</h3>
        <LeftPackedRow>
          {Row(controls, 'bottom')}
        </LeftPackedRow>

        <h3>Left</h3>
        <LeftPackedRow>
          {Row(controls, 'left')}
        </LeftPackedRow>

        <h3>Right</h3>
        <LeftPackedRow>
          {Row(controls, 'right')}
        </LeftPackedRow>
      </div>
    )
  }
}
